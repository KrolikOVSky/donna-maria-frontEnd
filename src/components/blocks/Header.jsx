import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Global} from "../Global"
import {getFromServer} from "../functions/ServerConnect";

const size = 50;

export class Header extends React.Component {

	state = {
		groups: []
	}

	componentDidMount() {
		// axios.get(`${Global.url}/gro`)
		// 	.then(res => {
		// 		const groups = res.data;
		// 		this.setState({groups});
		// 	})
		getFromServer(Global.getGroup).then(res => {
			this.setState({ groups: res });
		})
	}

	render() {
		return (
			<Navbar collapseOnSelect sticky="top" fixed="top" variant="dark" expand="lg" className="bg-donna px-2 mb-4">
				<Navbar.Toggle className="" variant="dark" aria-controls="responsive-navbar-nav"/>

				<Navbar.Brand href="/" className="mx-auto text-donna">
					<img className="mb-1 mt-1 mr-2" src="/logo_Donna.gif" width={size} height={size} alt="Home"/>Donna
					Maria
				</Navbar.Brand>

				<Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
					<Nav className="mx-auto">
						<Nav.Link className="text-light mx-auto" href="#about">О нас</Nav.Link>
						<Nav.Link className="text-light mx-auto" href="/groups">Меню</Nav.Link>
						<Nav.Link className="text-light mx-auto" href="#sales">Акции</Nav.Link>
						<Nav.Link className="text-light mx-auto" href="#contacts">Контакты</Nav.Link>
						<Nav.Link className="text-light mx-auto">Подробнее о сайте</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}