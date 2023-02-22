import React, { Component } from "react";

export default class FarmerAddressItem extends Component {
	render() {
		const { username, phone_number, email, location, address } =
			this.props.farmer;
		console.log(this.props);
		return (
			<div className="my-5">
				<table className="table table-bordered">
					<tr>
						<th scope="row">Name</th>
						<td>{username}</td>
					</tr>
					<tr>
						<th scope="row">E-mail:</th>
						<td>
							<a href={`mailto:${email}`}>{email}</a>
						</td>
					</tr>
					<tr>
						<th scope="row">Phone number</th>
						<td>{phone_number}</td>
					</tr>
					<tr>
						<th scope="row">Address</th>
						<td>
							<address>{address}</address>
						</td>
					</tr>
					<tr>
						<th scope="row">Location</th>
						<td>
							<a href={location}>{location}</a>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
