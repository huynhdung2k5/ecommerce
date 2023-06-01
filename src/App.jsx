import "./App.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import { AuthProvider } from "./auth/JsonWebTokenConText";

import AboutUs from "./pages/AboutUs";
import Home from "./pages";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import OrderUser from "./pages/OrderUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserLayout from "./pages/UserLayout";
import Address from "./pages/Address";
import FavoriteProduct from "./pages/FavoriteProduct";
import ChangePassword from "./pages/ChangePassword";
import OrderDetail from "./pages/OrderDetails";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
    return (
        <div>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="product" element={<Product />} />
                        <Route path="detail-product/:id" element={<DetailProduct />} />
                        <Route path="policy" element={<Policy />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />``
                        <Route path="user" element={<UserLayout />}>
                            <Route index element={<Profile />} />
                            <Route path="/user/profile" element={<Profile />} />
                            <Route path="/user/order" element={<OrderUser />} />
                            <Route path="/user/address" element={<Address />} />
                            <Route path="/user/favorite" element={<FavoriteProduct />} />
                            <Route path="/user/change-password" element={<ChangePassword />} />
                            <Route path="/user/order-details" element={<OrderDetail />} />
                        </Route>
                    </Route>
                </Routes>
                <ToastContainer />
            </AuthProvider>
        </div>
    );
}

export default App;
