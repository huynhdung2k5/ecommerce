import "./App.css";
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
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Dones from "./pages/Done";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="product" element={<Product />} />
                        <Route path="detail-product/:id" element={<DetailProduct />} />
                        <Route path="policy" element={<Policy />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="account" element={<Account />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="payment" element={<Payment />} />
                        <Route path="done" element={<Dones />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Routes>
                <ToastContainer />
            </AuthProvider>
        </>
    );
}

export default App;
