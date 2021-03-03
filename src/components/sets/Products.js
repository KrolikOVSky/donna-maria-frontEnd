import React from 'react'
import {Product} from "../Product";
import axios from "axios";
import { Global } from "../testSets/Global";

export class Products extends React.Component {

    // state = {
    //     products: []
    // }
    //
    // componentDidMount() {
    //     axios.get(`http://localhost:8081/pro`)
    //         .then(res => {
    //             const products = res.data;
    //             this.setState({ products });
    //         })
    // }

    render() {
        return (
            <div align="center" className="container-fluid">
                <div className="container-fluid row bg-ddark gap-3">
                    {
                        // this.state.products.map(product => (
                        Global.products().map(product => (
                            <Product name={product.name} price={product.price} img="images/1.png"/>
                        ))
                    }
                </div>
            </div>
        )
    }
}