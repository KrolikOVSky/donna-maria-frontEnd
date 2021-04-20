import React from 'react'
import {Global} from "../Global"
import axios from "axios";
import {Accordion, Card, Button} from "react-bootstrap"
import {AdminGroup} from "../adminComponents/Groups/AdminGroup";

export class Test extends React.Component {

	componentDidMount() {
		console.log('componentDidMount start')

		axios.get(`${Global.url}/test/items`).then(res => {
			// console.log(res.data)
			console.log(res.data)
			// for(let el : res.data){
			// 	console.log("res.data = ", res.data[i])
			// }

		})

		console.log('componentDidMount end ')

	}


	render() {
		return (
			<div>
				<Accordion defaultActiveKey="-1">
					<Card>
						<Accordion.Toggle as={Button} eventKey="0" className="row">
							<AdminGroup/>
						</Accordion.Toggle>

						<Accordion.Collapse eventKey="0">
							<Card.Body>Hello! I'm the body</Card.Body>
						</Accordion.Collapse>

					</Card>
			0	</Accordion>
			</div>
		)
	}
}