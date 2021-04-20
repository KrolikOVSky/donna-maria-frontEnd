import React from 'react'
import {Link} from "react-router-dom";

export class Group extends React.Component {
	render() {
		return (
			<div className="col-auto grp-btn mx-auto">
				<Link key={this.props.id} to={`/groups/${this.props.urlName}`} className="col-auto">
					<div className="prod-div-img">
						<img id='img' className="prod-img rounded-custom"
						     alt={this.props.name}
						     src={this.props.img}/>
					</div>
					<div className="mb-auto">
						<h2 align='center'>{this.props.name}</h2>
					</div>
				</Link>
			</div>
		)
	}

}