import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartItem extends Component {
  render() {
    const { name, quantity, price, description, image, _id } =
      this.props.product;
    return (
      <div className="card col-xs-12 col-md-2 my-5 mx-3">
        <img className="card-img-top mt-2 " src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div>Quantity: {quantity}</div>
          <div>Price: Rs.{price}</div>

          <Link className="btn btn-primary" to={`/detail/${_id}`}>
            View
          </Link>
        </div>
      </div>
    );
  }
}
