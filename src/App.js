import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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
          <Route path="/consumer/shop" element={<ShopProducts />}></Route>
          <Route path="/detail/:id" element={<ProductDetails />}></Route>
          <Route
            path="/farmer/product-upload"
            element={<ProductUpload />}
          ></Route>
        {/* Payment+++++++++++++++++++++ */}
          <Route path="/consumer/payment" element={<Payment />}></Route>
        {/* ++++++++++++++++++++++++++++ */}
        <Route path="/consumer/cart" element={<Cart />}></Route>
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
