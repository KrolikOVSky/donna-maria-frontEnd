import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Global} from "../testSets/Global";
import Translit from "../functions/Translit";
import {Link} from "react-router-dom";

const size = 50;

export class LiveHeader extends React.Component {
	render() {
		return (
			<Navbar collapseOnSelect sticky="top" fixed="top" variant="dark" expand="lg" className="bg-donna px-2 mb-4">
				<Navbar.Toggle className="" variant="dark" aria-controls="responsive-navbar-nav"/>

				<Navbar.Brand href="/" className="mx-auto text-donna">
					<img className="mb-1 mt-1 mr-2" src="logo_Donna.gif" width={size} height={size} alt="Home"/>Donna
					Maria
				</Navbar.Brand>

				<Navbar.Collapse id="responsive-navbar-nav" className="mx-auto">
					<Nav className="mx-auto">
						<Nav.Link className="text-light mx-auto" href="#about">О нас</Nav.Link>
						{/*<Nav.Link className="text-light mx-auto" href="#catalog">Меню</Nav.Link>*/}

						<NavDropdown id="ndd" className="text-light mx-auto" title="Menu">

							{
								Global.groups().map(group => (
									<NavDropdown.Item
										href={"/products" + "/" + Translit.translit(group.name)}>{group.name}</NavDropdown.Item>
								))
							}


						</NavDropdown>


						<Nav.Link className="text-light mx-auto" href="#sales">Акции</Nav.Link>
						<Nav.Link className="text-light mx-auto" href="#contacts">Контакты</Nav.Link>

						<Nav.Link className="text-light mx-auto">

							<Link to="add-group">
								Подробнее о сайте
							</Link>

						</Nav.Link>
						{/*<Nav.Link className="text-light mx-auto" href="/products">Товары</Nav.Link>*/}
						{/*<Nav.Link className="text-light mx-auto" href="/groups">Группы</Nav.Link>*/}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}