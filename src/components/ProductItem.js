import React, { Component } from "react";

export default class ProductItem extends Component {
  render(product) {
    const { name, quantity, price, description, image } = this.props.product;
    return (
      <div className="card col-xs-12 col-md-4 my-5">
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div>Quantity: {quantity}</div>
          <div>Price: {price}</div>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
