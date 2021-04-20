import React from 'react'
import {Link} from "react-router-dom";

export class AdminPage extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to='/admin/products'>Edit product</Link></li>
					<li><Link to='/admin/groups'>Edit group</Link></li>
					<li><Link to='/add/group'>Add group</Link></li>
					<li><Link to='/add/product'>Add product</Link></li>
				</ul>
			</div>
		)
	}
}