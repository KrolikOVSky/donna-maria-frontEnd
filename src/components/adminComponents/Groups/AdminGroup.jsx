import React from 'react'
import {Modal} from "../../blocks/Modal";
import {Edit} from "../../editItems/Edit";

const size = 100;

export class AdminGroup extends React.Component {

	state = {
		editModal: false,
		removeModal: false
	}

	componentDidMount() {
		this.setState({
			editModal: false,
			removeModal: false
		})
	}

	render() {
		return (
			<div className="container col-md-4 col-sm-6 col-xs-12 col-lg-5">
				<div className="row rounded-3 bg-info align-items-center p-2">

					<div className="col row align-items-center">
						<div className="col">
							<img src={this.props.img}
							     alt={this.props.name}
							     className="my-auto"
							     width={size}
							     height={size}/>
						</div>

						<div className="col">
							<p className="my-auto">{this.props.name}</p>
						</div>
					</div>


					<div className="col gap-lg-0 gap-3 row align-items-center">
						<div className="col">
							<button onClick={() => this.setState({editModal: true})} className="mx-auto btn btn-warning"
							        children="Редактировать"/>
						</div>

						<div className="col">
							<button onClick={() => this.setState({removeModal: true})}
							        className="mx-auto btn btn-danger" children="Удалить"/>
						</div>
					</div>

					<Modal active={this.state.editModal}
					       onModalClose={() => this.setState({editModal: false})}>
						<h1 className="display-2">Hello popUp edit</h1>
						<h1>{this.props.name}</h1>

						<Edit name={this.props.name} img={this.props.img} id={this.props.id}/>

					</Modal>

					<Modal active={this.state.removeModal}
					       onModalClose={() => this.setState({removeModal: false})}>
						<h1 className="display-2">Hello popUp remove</h1>
						<h1>{this.props.name}</h1>
					</Modal>

				</div>
			</div>
		)
	}
}