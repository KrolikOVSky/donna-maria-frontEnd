import React from 'react'
import {getFromServer} from "./functions/ServerConnect";
import {Global} from "./Global"

// noinspection JSUnresolvedVariable
export class ProductInfo extends React.Component {

	state = {
		img: null,
		name: null,
		price: null,
		desc: null,
		size: 350
	}

	componentDidMount() {
		getFromServer(Global.getProducts).then(resp => {
			console.log(resp[2]);
			let res = resp[2];
			this.setState({
				img: res.imageFileName,
				name: res.name,
				price: res.price,
				desc: res.description
			})
		})
	}

	render() {
		const {img, name, price, desc} = this.state;
		return (
			<div className="container align-items-center justify-content-center">
				<div className="container row">
					<div className="col">
						<img className="img-prod" src={`${Global.getImg}/${img}`} alt={name} height={this.state.size} width={this.state.size}/>
					</div>

					<div className="col">
						<h1>{name}</h1>
						<h2>{price}</h2>
					</div>

				</div>
				<br/>
				<hr/>
				<div className="row desc-prod">
					<h3 className="text-left">Описание</h3>
					<p className="text-left">{desc}</p>
				</div>
			</div>
		)
	}
}