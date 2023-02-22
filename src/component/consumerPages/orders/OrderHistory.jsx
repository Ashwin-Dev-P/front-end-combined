import React, { Component } from "react";
import ConsumerNavbar from "../ConsumerNavbar";
import OrderItem from "./OrderItem";

export default class OrderHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			orders: [],
		};
	}
	getOrderHistory() {
		const url = process.env.REACT_APP_BACKEND_URL + "/api/order/order_history";

		var body = {
			consumer_id: sessionStorage.getItem("userid"),
			status: 2,
		};

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
				<ConsumerNavbar />
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
