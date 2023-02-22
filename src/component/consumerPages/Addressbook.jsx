import React, { Component } from "react";
import FarmerAddressItem from "../../components/FarmerAddressItem";

import FarmerItem from "../components/FarmerItem";
import ConsumerNavbar from "./ConsumerNavbar";

export default class Addressbook extends Component {
	constructor(props) {
		super(props);

		this.state = {
			farmers: [],
		};
	}

	componentDidMount() {
		this.getFarmers();
	}

	getFarmers() {
		const url = process.env.REACT_APP_BACKEND_URL + "/api/user/farmers";

		fetch(url, {
			method: "GET",
			headers: { "content-type": "application/json" },
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					this.setState({
						farmers: res.farmers,
					});
				}
			});
	}

	render() {
		const { farmers } = this.state;
		return (
			<div>
				<ConsumerNavbar />
				<div className="container">
					{farmers.map((product) => {
						return <FarmerAddressItem key={product._id} farmer={product} />;
					})}
				</div>
			</div>
		);
	}
}
