import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class OrderItem extends Component {
	render() {
		var { product_ids, _id, createdAt, status } = this.props.order;

		createdAt = createdAt.slice(0, 10);

		return (
			<div className="shadow-sm border p-3 my-5">
				<div className="border shadow-sm p-1 px-2 mb-4">
					<div className="py-2">Order ID: {_id}</div>
					<div className="py-2">Date: {createdAt}</div>
				</div>
				<div>
					<div className="mb-3">Items purchased:</div>
					{product_ids.map((product) => {
						return <ProductItem product={product} key={product._id} />;
					})}

					{status === 2 ? (
						<div className="btn btn-success mt-3">Delivered</div>
					) : (
						<div className="danger">pending</div>
					)}
				</div>
			</div>
		);
	}
}
