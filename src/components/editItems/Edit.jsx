import React from "react";
import {Global} from "../Global";
import {getFromServer} from "../functions/ServerConnect";
import {Redirect} from "react-router";

export class Edit extends React.Component {

	constructor(props) {
		super(props);
	}

	state = {
		name: this.props.name,
		file: null,
		redirect: false
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
		fetch(`${Global.editGroup}/${this.props.id}`, {
			method: 'PUT',
			body: formData
		}).then(res => {
			console.log(res);
			if (res.status === 200) this.setState({redirect: true})
			else alert("Возможно группа с данным названием уже существует")
		})
	}

	render() {
		const {redirect} = this.state
		if (redirect) {
			return <Redirect to={`http://localhost:3000/admin/groups`}/>;
		}
		return (
			<div className="text-center">
				<form className="gap-3 row" onSubmit={this.handleSubmit}>

					<div className="form-floating">
						<input type="text" id="name" name="name" onChange={this.handleText}
						       placeholder="Введите название блюда" className="form-control input edit"
						       value={this.state.name} required/>
						<label htmlFor="name">Название группы</label>
					</div>

					<div className="form-group">
						<input type="file" id="file" name="file" onChange={this.handleFile}
						       placeholder="Загрузите фото блюда" className="form-control input edit"
						/>
					</div>

					<button type="submit" className="btn btn-success input">Submit</button>
				</form>
			</div>
		)
	}
}