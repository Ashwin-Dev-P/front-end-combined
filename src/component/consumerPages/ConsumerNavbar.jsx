import React from "react";
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
//shared components
import MyButton from "../../MyComponents/MyButton";

//actions
import logoutAction from "../../actions/logout.action";

const ConsumerNavbar = () => {
	const usenavigate = useNavigate();
	const logout = async () => {
		await logoutAction();

		usenavigate("/");
	};

	return (
		<nav className="consumer-navbar">
			<div className="consumer-navbar--links">
				<Link to={"/consumer-Dash"} className="consumer-navbar--links_item">
					Home
				</Link>
				<Link to={"/consumer/shop"} className="consumer-navbar--links_item">
					Shop Products
				</Link>
				<Link to={"/consumer/cart"} className="consumer-navbar--links_item">
					Cart
				</Link>
				<Link to={"/consumer/profile"} className="consumer-navbar--links_item">
					Profile
				</Link>
				<Link
					to={"/consumer/address_book"}
					className="consumer-navbar--links_item"
				>
					Address book
				</Link>

				<MyButton
					text="logout"
					className="btn btn-danger consumer-navbar--links_item"
					onClick={logout}
				/>
			</div>
		</nav>
	);
};

export default ConsumerNavbar;
