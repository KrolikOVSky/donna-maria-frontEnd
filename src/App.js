import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Footer} from "./components/blocks/Footer";
import {Header} from "./components/blocks/Header";
import {Products} from "./components/sets/Products";
import {Groups} from "./components/sets/Groups";
import {AddProduct} from "./components/editItems/AddProduct";
import {AddGroup} from "./components/editItems/AddGroup";
import {TestAxios} from "./components/testSets/TestAxios";
import {EditGroup} from "./components/editItems/EditGroup";
import {EditProduct} from "./components/editItems/EditProduct";
import {NotFound} from "./components/NotFound";
import {Test} from "./components/testSets/Test";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Router>
					<Switch>
						<Route exact path="/"/>
						<Route exact path="/groups" component={Groups}/>
						<Route path="/groups/:name" component={Products}/>
						<Route exact path="/add/product" component={AddProduct}/>
						<Route exact path="/add/group" component={AddGroup}/>
						<Route path="/edit/product/:id" component={EditProduct}/>
						<Route path="/edit/group/:id" component={EditGroup}/>
						<Route exact path="/test" component={TestAxios}/>
						<Route component={NotFound}/>
					</Switch>
					{/*<Groups />*/}
					{/*<EditGroup />*/}
				</Router>
				<Footer/>
			</div>
		);
	}
}