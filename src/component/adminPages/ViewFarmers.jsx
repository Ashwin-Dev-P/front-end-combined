import React, { Component } from "react";
import FarmerAddressItem from "../../components/FarmerAddressItem";
import AdminNav from "./AdminNav";
import UserItemFarmer from "./UserItemFarmer";

export default class ViewConsumers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			consumers: [],
		};
	}

	componentDidMount() {
		this.getConsumers();
	}
	getConsumers() {
		const url = process.env.REACT_APP_BACKEND_URL + "/api/user/farmers";

		fetch(url, {
			method: "GET",
			headers: { "content-type": "application/json" },
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res.order_history);
				if (res.status === 200) {
					this.setState({
						consumers: res.farmers,
					});
				}
			});
	}

	render() {
		return (
			<div>
				<AdminNav />
				<div className="container">
					<div className="text-center">
						<h1>Farmers</h1>
					</div>

					<div className="row">
						{this.state.consumers.map((consumer) => {
							return <UserItemFarmer consumer={consumer} key={consumer._id} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}
