import React from "react";
import {Global} from "../Global";
import {getFromServer} from "../functions/ServerConnect";

export class EditGroup extends React.Component {

	constructor(props) {
		super(props);
		this.requireId = this.props.match.params.id
	}

	state = {
		name: '',
		file: '',
		redirect: ''
	}

	handleText = event => {
		this.setState({name: event.target.value})
	}

	handleFile = event => {
		this.setState({file: event.target.files[0]})
	}

	handleSubmit = event => {
		event.preventDefault();
		let formData = new FormData()
		formData.append('name', this.state.name)
		formData.append('file', this.state.file)
		fetch(`${Global.url}/upd/gro/${this.requireId}`, {
			method: 'PUT',
			body: formData
		}).then(res => {
			console.log(res);
			if (res.status === 200) this.setState({redirect: true})
			else alert("Возможно группа с данным названием уже существует")
		})
	}

	componentDidMount() {
		getFromServer(Global.getGroup).then(res => {
			res.map(item => {
				if(String(item.id) === String(this.requireId)){
					this.setState({
						name: item.name,
					})
				}
			})
		})
	}

	render() {
		return (
			<div className="text-center">
				<h1 className="display-3">Редактирование группы</h1>
				<form className="gap-3 row" onSubmit={this.handleSubmit}>

					<div className="form-floating">
						<input type="text" id="name" name="name" onChange={this.handleText}
						       placeholder="Введите название блюда" className="form-control input"
						       value={this.state.name} required/>
						<label htmlFor="name">Название группы</label>
					</div>

					<div className="form-group">
						<input type="file" id="file" name="file" onChange={this.handleFile}
						       placeholder="Загрузите фото блюда" className="form-control input"
						       />
					</div>

					<button type="submit" className="btn btn-success input">Submit</button>
				</form>
			</div>
		)
	}
}