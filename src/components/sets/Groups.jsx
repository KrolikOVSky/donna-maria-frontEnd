import React from 'react'
import {Group} from "../Group";
import axios from "axios";
import {Global} from "../Global";

export class Groups extends React.Component {
	state = {
		groups: []
	}

	componentDidMount() {
		axios.get(`${Global.url}/gro`)
			.then(res => {
				const groups = res.data;
				this.setState({groups});
			})
	}

	render() {
		return (
			<div align="center" className="container-fluid">
				<h1 className="display-3">Меню</h1>
				<div className="container-fluid row gap-3">
					{
						this.state.groups.map(group => (
							<Group key={group.id} name={group.name} img={`${Global.url}/img/${group.imageFileName}`}/>
						))
					}
				</div>
			</div>
		)
	}
}