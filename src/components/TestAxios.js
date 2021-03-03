import React from 'react'

export class TestAxios extends React.Component {
	state = {
		name: '',
		file: ''
	}

	handleFile = event => {
		this.setState({ file: event.target.files[0] })
	}

	handleText = event =>{
		console.log(event.target.value)
		this.setState({ name: event.target.value })
	}

	handleSubmitNew = event => {
		event.preventDefault();
		let formData = new FormData()
		formData.append('name', this.state.name)
		fetch('http://localhost:8081/upd/gro/26', {
			method: 'PUT',
			body: formData
		}).then(res => {
			console.log(res)
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmitNew} method="POST">
					<input type="text" name="name" onChange={this.handleText}/>
					<input type="file" name="file" id="file" onChange={this.handleFile}/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}