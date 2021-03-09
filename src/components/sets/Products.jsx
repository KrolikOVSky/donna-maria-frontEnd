import React from 'react'
import {Product} from "../Product";
import axios from "axios";
import {Global} from "../Global";

export class Products extends React.Component {
	constructor(props) {
		super(props);
		this.group = this.props.match.params.name
	}


	state = {
		products: [],

	}

	componentDidMount() {
		axios.get(`${Global.url}/pro`)
			.then(res => {
				const products = res.data;
				this.setState({products});
			})
	}

	render() {
		return (
			<div align="center" className="container-fluid">
				<h1 className="display-3">{this.group}</h1>
				<div className="container-fluid row gap-3">
					{
						// this.state.products.map(product => {
						// 	if (product.groupName === this.group) {
						// 		return <Product key={product.id} name={product.name} price={product.price}
						// 		         img={`${Global.url}/img/${product.imageFileName}`}/>
						// 	}
						// })

						this.state.products.map(product =>{
								if (product.groupName === this.group) {
									return <Product key={product.id} name={product.name} price={product.price}
									         img={`${Global.url}/img/${product.imageFileName}`}/>
								} else return null;
						})

					}
				</div>
			</div>
		)
	}
}