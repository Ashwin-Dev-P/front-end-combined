import React from "react";
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
//shared components
import MyButton from "../../MyComponents/MyButton";

//actions
import logoutAction from "../../actions/logout.action";

const AdminNav = () => {
	const usenavigate = useNavigate();
	const logout = async () => {
		await logoutAction();

		usenavigate("/");
	};

	return (
		<nav className="farmers-Nav">
			<Link to={"/admin-Dash"} className="farmers-Nav--items">
				Home
			</Link>

			<MyButton
				text="logout"
				className="btn btn-danger farmers-Nav--items"
				onClick={logout}
			/>
		</nav>
	);
};

export default AdminNav;
