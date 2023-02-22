import React, { Component } from "react";

import ConsumerNavbar from "./ConsumerNavbar";
import CartItem from "../../components/CartItem";
import '../../css/index.css';
import { Link } from "react-router-dom";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      total_price: 0,
    };
  }

  componentDidMount() {
    this.getCartProducts();
  }

  getCartProducts() {
    const url = process.env.REACT_APP_BACKEND_URL + "/api/user/view_cart";

    const regobj = {
      user_id: sessionStorage.getItem("userid"),
    };

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          //calculate amount
          var total_price = 0;
          res.cart.forEach(myFunction);

          function myFunction(product) {
            total_price += product.quantity * product.price;
          }
          sessionStorage.setItem("total_price", total_price);

          this.setState({
            products: res.cart,
            total_price: total_price,
          });
        }
      });
  }

  render() {
    const { total_price } = this.state;
    return (
      <div>
        <ConsumerNavbar />
        <div>
          <h1 className="text-center">My cart</h1>
          <div className="text-center">Total price: Rs.{total_price}</div>
          <div className="container">
            <div className="row">
              {this.state.products.map((product) => {
                return <CartItem product={product} key={product._id} />;
              })}
            </div>
            <div className="text-center">
            <Link to={"/consumer/payment"} className="btn btn-primary">Pay now</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
