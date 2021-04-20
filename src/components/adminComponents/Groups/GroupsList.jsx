import React from 'react'
import {Global} from "../../Global";
import {AdminGroup} from "./AdminGroup";
import {getFromServer} from "../../functions/ServerConnect";

// noinspection JSUnresolvedVariable
export class GroupsList extends React.Component {

	state = {
		groups: [],
		current: null,
		modal: false
	}

	componentDidMount = () => {
		getFromServer(Global.getGroups).then(res => {
			console.log(res)
			this.setState({groups: res})
		})
	}

	render() {
		return (
			<div align="center" className="container-fluid">
				<h1 className="display-3">Меню</h1>
				<div className="row gap-3">
					{
						this.state.groups.map(group => {
							// Global.groups().map((group) => {
							return (
								// <AdminGroup name={group.name} img={Global.groups()[0].img}/>
								<AdminGroup key={group.id}
								            id={group.id}
								            name={group.name}
								            img={`${Global.getImg}/${group.imageFileName}`}/>
							)
						})
					}
				</div>
			</div>
		)
	}
}