import React, { Component } from "react";
import MyButton from "../MyComponents/MyButton";
//import { withRouter } from "react-router";

//toastify
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import ConsumerNavbar from "../component/consumerPages/ConsumerNavbar";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      image: "",
      addedToCart: false,
    };

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    //const { id } = this.props.match.params;
    console.log(this.props, window.location.href.split("/")[4]);
    this.getDetails();
  }

  getDetails() {
    const product_id = window.location.href.split("/")[4];
    const url =
      process.env.REACT_APP_BACKEND_URL + "/api/product/details/" + product_id;

    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const { name, description, price, quantity, veg, image, _id } =
            res.product_details;

          this.setState({
            name,
            description,
            price,
            quantity,

            image,
            _id,
          });
        }
      });
  }

  addToCart() {
    const regobj = {
      user_id: sessionStorage.getItem("userid"),
    };

    const url =
      process.env.REACT_APP_BACKEND_URL +
      "/api/user/add_to_cart/product_id/" +
      this.state._id;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);

        if (resp.status !== 200) {
          var err = new Error();
          err.message = resp.message;
          throw err;
        } else {
          console.log(resp);
          this.setState({
            addedToCart: true,
          });
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  render() {
    const { name, description, price, quantity, image, addedToCart } =
      this.state;
    return (
      <>
        <ConsumerNavbar />
        <div className="row justify-content-center mt-5">
          <div className="card col-xs-12 col-md-4 ">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Name:{name}</h5>
              <div>Price: {price}</div>
              <div>Quantity: {quantity}</div>

              <p className="card-text">Description:{description}</p>

              <MyButton
                text={addedToCart ? "Added to cart" : "Add to cart"}
                className={
                  addedToCart ? "btn btn-secondary" : "btn btn-primary"
                }
                onClick={this.addToCart}
                disabled={addedToCart}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

//const ProductDetailsWithRouter = withRouter(ProductDetails);
//export default ProductDetailsWithRouter;
export default ProductDetails;
