import React from 'react'
// import "../styles/ProductStyle.css"

const rub = '\u20bd'

export class Product extends React.Component {
    render() {
        return (
            <a href="##" className="col-auto prod-btn mx-auto">
                <div className="prod-div-img">
                    <img id='img' className="prod-img rounded-custom"
                         alt={this.props.name}
                         src={this.props.img}/>
                </div>

                <div className="mb-auto">
                    <h2 align='center'>{this.props.name}</h2>
                    <h3 align='right'>{this.props.price} {rub}</h3>
                </div>
            </a>
            // </div>
        )
    }
}