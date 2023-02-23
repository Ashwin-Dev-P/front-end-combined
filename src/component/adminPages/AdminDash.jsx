import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";

export default class AdminDash extends Component {
	render() {
		return (
			<div>
				<AdminNav />
				<div className="container text-center mt-5">
					<Link to={"/admin/consumers"} className="btn btn-primary">
						View consumers
					</Link>
				</div>
			</div>
		);
	}
}
