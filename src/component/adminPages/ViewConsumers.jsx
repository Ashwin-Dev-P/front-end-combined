import React, { Component } from "react";
import FarmerAddressItem from "../../components/FarmerAddressItem";
import AdminNav from "./AdminNav";
import UserItem from "./UserItem";

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
		const url = process.env.REACT_APP_BACKEND_URL + "/api/user/consumers";

		fetch(url, {
			method: "GET",
			headers: { "content-type": "application/json" },
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res.order_history);
				if (res.status === 200) {
					this.setState({
						consumers: res.consumers,
					});
				}
			});
	}

	render() {
		return (
			<div>
				<AdminNav />
				<div className="container">
					<div className="row">
						{this.state.consumers.map((consumer) => {
							return <UserItem consumer={consumer} key={consumer._id} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}
