import React, { Component } from "react";

export default class ProductItem extends Component {
	render() {
		const { quantity, name, price, image } = this.props.product;
		return (
			<div className="card col-xs-12 col-md-3 mx-3">
				<img className="card-img-top mt-2 " src={image} alt={name} />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<div>Quantity: {quantity}</div>
					<div>Price: Rs.{price}</div>
				</div>
			</div>
		);
	}
}
