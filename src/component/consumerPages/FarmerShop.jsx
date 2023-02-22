import React, { Component } from "react";
import FarmersNav from "../farmer/FarmersNav";
import ProductItem from "../../components/ProductItem";
import ConsumerNavbar from "./ConsumerNavbar";

export default class FarmerShop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		};
	}

	componentDidMount() {
		this.getFarmerDetails();
	}

	getFarmerDetails() {
		console.log();
		const farmer_id = window.location.href.split("/")[5];
		const url =
			process.env.REACT_APP_BACKEND_URL + "/api/user/farmer/" + farmer_id;

		fetch(url, {
			method: "GET",
			headers: { "content-type": "application/json" },
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res);

				if (res.status === 200) {
					this.setState({
						farmer_details: res.farmer_details,
						loading: false,
					});
				}
			});
	}
	render() {
		if (!this.state.loading) {
			var { details, products } = this.state.farmer_details;

			console.log(details);
			var {
				username,
				email,
				location,
				phone_number,
				createdAt,
				updatedAt,
				address,
			} = details;

			createdAt = createdAt.slice(0, 9);
			updatedAt = updatedAt.slice(0, 9);
		}

		return (
			<div>
				<ConsumerNavbar />
				<div>
					{this.state.loading ? (
						<div className="text-center">Loading...</div>
					) : (
						<>
							<div>
								<div className="border p-5 container">
									<h2 className="text-center">Farmer details</h2>
									<div>
										<div>Name:{username}</div>
										<div>E-mail: {email}</div>
										<div>Phone number: {phone_number}</div>
										<div>
											<address>Address: {address}</address>
										</div>
										<div>
											{" "}
											<a href={location} className="btn btn-primary">
												Visit the shop{" "}
											</a>{" "}
										</div>
									</div>
								</div>
								<div>
									<div className="container">
										<div className="row">
											{products.map((product) => {
												return (
													<ProductItem product={product} key={product._id} />
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		);
	}
}
