import React, { Component } from "react";

export default class UserItemFarmer extends Component {
	render() {
		var {
			username,
			email,
			phone_number,
			address,
			location,
			createdAt,
			updatedAt,
		} = this.props.consumer;

		createdAt = createdAt.slice(0, 10);
		updatedAt = updatedAt.slice(0, 10);

		return (
			<div className="my-5 border border-success border-3 p-3">
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
					<tr>
						<th scope="row">Joined at</th>
						<td>{createdAt}</td>
					</tr>

					{createdAt !== updatedAt ? (
						<tr>
							<th scope="row">Lastmodified</th>
							<td>{updatedAt}</td>
						</tr>
					) : null}
				</table>
			</div>
		);
	}
}
