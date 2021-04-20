import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Footer} from "./components/blocks/Footer";
import {Header} from "./components/blocks/Header";
import {Products} from "./components/sets/Products";
import {Groups} from "./components/sets/Groups";
import {AddProduct} from "./components/editItems/AddProduct";
import {AddGroup} from "./components/editItems/AddGroup";
import {EditGroup} from "./components/editItems/EditGroup";
import {EditProduct} from "./components/editItems/EditProduct";
import {NotFound} from "./components/NotFound";
import {Test} from "./components/testSets/Test";
import {GroupsList} from "./components/adminComponents/Groups/GroupsList";
import {ProductsList} from "./components/adminComponents/Products/ProductsList";
import {AdminPage} from "./components/adminComponents/AdminPage";
import {ProductInfo} from "./components/ProductInfo";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Header/>

					<Switch>
						<Route exact path="/"/>
						<Route exact path="/groups" component={Groups}/>
						<Route path="/groups/:name" component={Products}/>
						<Route exact path="/add/product" component={AddProduct}/>
						<Route exact path="/add/group" component={AddGroup}/>
						<Route path="/edit/product/:id" component={EditProduct}/>
						<Route path="/edit/group/:id" component={EditGroup}/>

						<Route exact path="/test" component={Test}/>

						<Route exact path="/admin/groups" component={GroupsList}/>
						<Route exact path="/admin/products" component={ProductsList}/>
						<Route exact path="/admin/" component={AdminPage}/>

						<Route exact path="/prod" component={ProductInfo}/>

						<Route component={NotFound}/>
					</Switch>

					<Footer/>
				</Router>
			</div>
		);
	}
}