import React from 'react'
// import {Product} from "./components/Product";
// import {Header} from "./components/blocks/Header";
import {Footer} from "./components/blocks/Footer";
import {Products} from "./components/sets/Products";
import {Groups} from "./components/sets/Groups";
import {LiveHeader} from "./components/blocks/LiveHeader";
import {AddProduct} from "./components/editItems/AddProduct";
import {AddGroup} from "./components/editItems/AddGroup";
// import {EditGroup} from "./components/editItems/EditGroup";
// import {EditProduct} from "./components/editItems/EditProduct";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {TestAxios} from "./components/TestAxios";


export default class App extends React.Component {
	render() {
		return (
			<Router>
				<LiveHeader/>

				<img src="C:\\Users\\User\\Images\\2.jpg" alt="ok" width="256" height="256"/>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="products">Products</Link>
					</li>
					<li>
						<Link to="test">Test</Link>
					</li>
					<li>
						<Link to="add-Group">AddGroup</Link>
					</li>
					<li>
						<Link to="add-product">AddProduct</Link>
					</li>
				</ul>


				<Switch>



					<Route path="/products" component={Products}/>
					<Route path="/groups" component={Groups}/>
					<Route path="/add-product" component={AddProduct}/>
					<Route path="/add-group" component={AddGroup}/>
					<Route path="/test" component={TestAxios}/>


					<Products />
					{/*<Groups />*/}
					{/*<AddProduct />*/}
					{/*<EditProduct />*/}
					{/*<AddGroup />*/}
					{/*<EditGroup />*/}

				</Switch>
				<Footer/>
			</Router>
		);
	}
}