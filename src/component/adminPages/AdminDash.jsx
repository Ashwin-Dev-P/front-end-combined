import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";

export default class AdminDash extends Component {
	render() {
		return (
			<div>
				<AdminNav />
				<div className="container text-center mt-5">
					<div className="row">
						<div className="my-2">
							<Link to={"/admin/consumers"} className="btn btn-primary w-75">
								View consumers
							</Link>
						</div>
						<div className="my-2">
							<Link to={"/admin/farmers"} className="btn btn-primary w-75">
								View farmers
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
