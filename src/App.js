import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import FarmersLanding from "./component/FarmersLanding";
import ConsumerLanding from "./component/ConsumerLanding";
import { ToastContainer } from "react-toastify";
import Homepage from "./component/Homepage";
import ProductUpload from "./component/farmer/ProductUpload";
import ShopProducts from "./component/mycomponent/ShopProducts";
import ConsumerProfile from "./component/consumerPages/ConsumerProfile";
import FarmersProfile from "./component/farmer/FarmersProfile";

import ProductDetails from "./components/ProductDetails";
import Cart from "./component/consumerPages/Cart";
import Payment from "./component/consumerPages/Payment";
import Callback from "./component/consumerPages/Callback";
import SearchByFarmers from "./component/consumerPages/SearchByFarmers";
import FarmerShop from "./component/consumerPages/FarmerShop";
import Addressbook from "./component/consumerPages/Addressbook";
import OrderHistory from "./component/consumerPages/orders/OrderHistory";
import OrderHistoryFarmer from "./component/farmer/OrderHistory";
import OrderStatus from "./component/consumerPages/orders/OrderStatus";
import Report from "./component/farmer/Report";

function App() {
	return (
		<div className="App">
			<ToastContainer theme="colored" position="top-center"></ToastContainer>
			<BrowserRouter>
				<Routes>
					<Route path="" element={<Homepage />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/farmer-Dash" element={<FarmersLanding />}></Route>
					<Route path="/consumer-Dash" element={<ConsumerLanding />}></Route>
					<Route path="/consumer/Profile" element={<ConsumerProfile />}></Route>
					<Route path="/farmer/Profile" element={<FarmersProfile />}></Route>
					<Route path="/farmer/reports" element={<Report />}></Route>
					<Route path="/consumer/shop" element={<ShopProducts />}></Route>
					<Route path="/consumer/farmers" element={<SearchByFarmers />}></Route>

					<Route path="/detail/:id" element={<ProductDetails />}></Route>
					<Route path="/callback" element={<Callback />}></Route>
					<Route
						path="/farmer/product-upload"
						element={<ProductUpload />}
					></Route>

					<Route
						path="/farmer/order_history"
						element={<OrderHistoryFarmer />}
					></Route>

					{/* Payment+++++++++++++++++++++ */}
					<Route path="/consumer/payment" element={<Payment />}></Route>
					{/* ++++++++++++++++++++++++++++ */}
					<Route path="/consumer/cart" element={<Cart />}></Route>

					<Route
						path="consumer/farmer/:farmer_id"
						element={<FarmerShop />}
					></Route>
					<Route
						path="/consumer/address_book"
						element={<Addressbook />}
					></Route>

					<Route
						path="/consumer/order_history"
						element={<OrderHistory />}
					></Route>

					<Route
						path="/consumer/order_status"
						element={<OrderStatus />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
