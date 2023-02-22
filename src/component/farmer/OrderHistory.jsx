import React, { Component } from "react";
import FarmersNav from "./FarmersNav";
import OrderItem from "../consumerPages/orders/OrderItem";

export default class OrderHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			orders: [],
		};
		console.log("here");
	}
	getOrderHistory() {
		const url =
			process.env.REACT_APP_BACKEND_URL + "/api/order/order_history_farmer";

		var body = {
			farmer_id: sessionStorage.getItem("userid"),
			status: {
				$ne: 999,
			},
		};
		console.log(body);

		fetch(url, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res.order_history);
				if (res.status === 200) {
					this.setState({
						orders: res.order_history,
					});
				}
			});
	}

	componentDidMount() {
		this.getOrderHistory();
	}
	render() {
		return (
			<div>
				<FarmersNav />
				<div className="container">
					<div className="row">
						{this.state.orders.map((order) => {
							return <OrderItem order={order} key={order._id} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}
