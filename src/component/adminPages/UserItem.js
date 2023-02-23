import React, { Component } from "react";

export default class UserItem extends Component {
	render() {
		const { username, email, phone_number, address } = this.props.consumer;
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
				</table>
			</div>
		);
	}
}
