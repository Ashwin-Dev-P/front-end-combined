import React from "react";
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
//shared components
import MyButton from "../../MyComponents/MyButton";

//actions
import logoutAction from "../../actions/logout.action";

const FarmersNav = () => {
	const usenavigate = useNavigate();
	const logout = async () => {
		await logoutAction();

		usenavigate("/");
	};

	return (
		<nav className="farmers-Nav">
			<Link to={"/farmer-Dash"} className="farmers-Nav--items">
				Home
			</Link>
			<Link to={"/farmer/product-upload"} className="farmers-Nav--items">
				Upload Produce
			</Link>
			<Link to={"/farmer/profile"} className="farmers-Nav--items">
				Profile
			</Link>
			<Link to={"/farmer/order_history"} className="farmers-Nav--items">
				Orders
			</Link>
			<MyButton
				text="logout"
				className="btn btn-danger farmers-Nav--items"
				onClick={logout}
			/>
		</nav>
	);
};

export default FarmersNav;
