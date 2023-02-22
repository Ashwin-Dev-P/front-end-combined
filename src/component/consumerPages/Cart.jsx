import React, { Component } from "react";

import { Link, useNavigate, Navigate } from "react-router-dom";

import ConsumerNavbar from "./ConsumerNavbar";
import CartItem from "../../components/CartItem";
import "../../css/index.css";
import MyButton from "../../MyComponents/MyButton";

export default class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
			total_price: 0,
		};

		this.submitOrder = this.submitOrder.bind(this);
	}

	componentDidMount() {
		this.getCartProducts();
	}

	submitOrder() {
		const url = process.env.REACT_APP_BACKEND_URL + "/api/order";

		var body = this.state.order;
		body.consumer_id = sessionStorage.getItem("userid");
		console.log(body);

		fetch(url, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					this.setState({
						orderSubmitted: true,
					});
				}
			});
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

					//to create order
					var product_ids = [];
					var farmer_ids = [];

					res.cart.map((product) => {
						if (!product_ids.includes(product._id)) {
							product_ids.push(product._id);
						}

						if (!farmer_ids.includes(product.farmer_id)) {
							farmer_ids.push(product.farmer_id);
						}
					});

					function myFunction(product) {
						total_price += product.quantity * product.price;
					}

					this.setState({
						order: {
							product_ids: product_ids,
							farmer_ids: farmer_ids,
						},
					});
					sessionStorage.setItem("total_price", total_price);

					//

					this.setState({
						products: res.cart,
						total_price: total_price,
					});
				}
			});
	}

	render() {
		const { total_price, orderSubmitted } = this.state;

		if (orderSubmitted) {
			return <Navigate to="/consumer/payment" />;
		}
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
							<MyButton onClick={this.submitOrder} text="Pay now" />
							<Link to={"/consumer/payment"} className="btn btn-primary">
								Pay now
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
