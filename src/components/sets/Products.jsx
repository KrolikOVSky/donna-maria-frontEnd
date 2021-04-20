import React from 'react'
import {Product} from "./Product";
import {Global} from "../Global";
import {getFromServer} from "../functions/ServerConnect";

// noinspection JSUnresolvedVariable
export class Products extends React.Component {
	constructor(props) {
		super(props);
		this.group = this.props.match.params.name
	}

	state = {
		products: [],
		groupName: null
	}

	componentDidMount() {
		getFromServer(Global.getGroups).then(res => {
			res.map(el => {
				if (this.group === el.transLitName) {
					let products = el.products
					this.setState({
						products,
						groupName: el.name
					})
				}
				return null;
			})
		})
	}

	render() {
		return (
			<div align="center" className="container-fluid">
				<h1 className="display-3">{this.state.groupName}</h1>
				<div className="container-fluid row gap-3">
					{
						this.state.products.map(product => {
							return <Product key={product.id}
							                name={product.name}
							                price={product.price}
							                img={`${Global.getImg}/${product.imageFileName}`}/>
						})
					}
				</div>
			</div>
		)
	}
}