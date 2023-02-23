import { Bar } from "react-chartjs-2";
import React, { Component } from "react";

import { CategoryScale, Chart, LinearScale, registerables } from "chart.js";
import FarmersNav from "./FarmersNav";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(...registerables);

export default class Report extends Component {
	constructor(props) {
		super(props);

		this.state = {
			type_data: [0, 0],

			data: {
				labels: ["vegetables", "fruits"],
				datasets: [
					{
						label: "Product types",
						data: [65, 59],
						backgroundColor: [
							"rgba(255, 99, 132, 0.2)",
							"rgba(255, 159, 64, 0.2)",
						],
					},
				],
			},
			config: {
				type: "bar",

				scales: {
					y: {
						min: 0,

						ticks: {
							stepSize: 1,
						},
					},
					x: {},
				},
			},
		};
	}

	componentDidMount() {
		this.getStatistics();
	}

	getStatistics() {
		const url = process.env.REACT_APP_BACKEND_URL + "/api/product/statistics";

		var body = {
			farmer_id: sessionStorage.getItem("userid"),
		};
		console.log(body);

		fetch(url, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res.order_history);
				if (res.status === 200) {
					this.setState({
						data: {
							labels: ["vegetables", "fruits"],
							datasets: [
								{
									label: "Product types",
									data: [res.data.veg, res.data.fruit],
									backgroundColor: [
										"rgba(255, 99, 132, 0.2)",
										"rgba(255, 159, 64, 0.2)",
									],
								},
							],
						},
					});
				}
			});
	}
	render() {
		const { data, config } = this.state;
		return (
			<div>
				<FarmersNav />
				<div className="container mt-5">
					<div className="my-3">
						<h2 className="text-center">SHOP REPORTS</h2>
					</div>
					<div className="row justify-content-center">
						<div className="col-xs-12 col-md-8 col-lg-9">
							<Bar options={config} data={data} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
