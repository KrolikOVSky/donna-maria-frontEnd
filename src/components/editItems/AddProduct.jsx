import React from 'react'
import "../../styles/ProductStyle.css"
import {Global} from "../Global";
import {Redirect} from "react-router";
import {getFromServer, sendToServer} from "../functions/ServerConnect";

export class AddProduct extends React.Component {

	state = {
		name: '',
		price: '',
		description: '',
		shortDesc: '',
		volume: '',
		groupName: '',
		file: '',
		redirect: '',
		groups: []
	}


	componentDidMount() {
		getFromServer(Global.getGroup).then(res => {
			this.setState({ groups: res });
		})
	}


	handleText = event => {
		let target = event.target
		let name = target.name
		let value = target.value

		this.setState({
				[name]: value
			}
		)
	}

	handleFile = event => {
		this.setState({file: event.target.files[0]})
	}

	handleSubmit = event => {
		event.preventDefault();
		sendToServer(this.state, "POST", Global.addProduct).then(res => {
			console.log(res);
			if (res.status === 200) this.setState({redirect: true})
			else alert(`Возможно блюдо с данным названием уже существует`)
		})
	}

	render() {
		const {redirect} = this.state;
		if (redirect) {
			return <Redirect to="/"/>;
		}
		return (
			<div className="text-center">
				<h1 className="display-3">Добавление нового блюда</h1>
				<form className="gap-3 row" onSubmit={this.handleSubmit}>

					<div className="form-floating">
						<input type="text" id="name" name="name" onChange={this.handleText}
						       placeholder="Введите название блюда" className="input form-control" required/>
						<label htmlFor="name">Название блюда</label>
					</div>

					<div className="form-floating">
						<input type="text" id="price" name="price" onChange={this.handleText}
						       placeholder="Введите стомость блюда" className="form-control input" required/>
						<label htmlFor="price"> Стоимость блюда</label>
					</div>

					<div className="form-group">
						<textarea id="shortDesc" name="shortDesc" onChange={this.handleText}
						          placeholder="Введите краткое описание блюда" className="form-control input" rows="5"
						          required/>
					</div>

					<div className="form-group">
						<textarea id="description" name="description" onChange={this.handleText}
						          placeholder="Введите Описание блюда" className="form-control input" rows="10"
						          required/>
					</div>

					<div className="form-floating">
						<input type="text" id="volume" name="volume" onChange={this.handleText}
						       placeholder="Введите размер порции" className="form-control input" required/>
						<label htmlFor="volume">Размер порции</label>
					</div>

					<div className="form-floating">
						<select id="groupName" name="groupName" onChange={this.handleText}
						        className="form-select input" required>
							<option value=""/>
							{
								this.state.groups.map(group => (
									<option key={group.id}>{group.name}</option>
								))
							}
						</select>
						<label htmlFor="groupName">Группа</label>
					</div>

					<div className="form-group">
						<input type="file" id="file" name="file" onChange={this.handleFile}
						       placeholder="Загрузите фото блюда" className="form-control input" required/>
					</div>

					<div className="form-floating">
						<input type="submit" className="btn btn-success input"/>
					</div>

				</form>
			</div>
		)
	}
}