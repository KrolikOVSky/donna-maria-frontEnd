import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";

const size = 50;

export class Header extends React.Component {
	render() {
		return (
			<Navbar collapseOnSelect sticky="top" fixed="top" variant="dark" expand="lg" className="bg-donna px-2 mb-4">
				<Navbar.Toggle className="" variant="dark" aria-controls="responsive-navbar-nav"/>

				<Navbar.Brand as={Link} to={"/"} className="mx-auto text-donna">
					<img className="mb-1 mt-1 mr-2" src={"/logo_Donna.gif"} width={size} height={size} alt="Home"/>{' '}
					Итальянцы в России
				</Navbar.Brand>

				<Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
					<Nav className="mx-auto">
						<Nav.Link className="text-light mx-auto" as={Link} to={"#about"}>О нас</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"/groups"}>Меню</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"#sales"}>Акции</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"#contacts"}>Контакты</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"#Details"}>Подробнее о сайте</Nav.Link>
						<Nav.Link className="text-light mx-auto" as={Link} to={"/admin"}>Панель Администратора</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}