import React from 'react'
import {Group} from "./Group";
import {Global} from "../Global";
import {getFromServer} from "../functions/ServerConnect";

// noinspection JSUnresolvedVariable
export class Groups extends React.Component {
	state = {
		groups: []
	}

	componentDidMount() {
		getFromServer(Global.getGroups).then(res => {
			const groups = res;
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
							<Group key={group.id} id={group.id} name={group.name} urlName={group.transLitName} img={`${Global.getImg}/${group.imageFileName}`}/>
						))
					}
				</div>
			</div>
		)
	}
}