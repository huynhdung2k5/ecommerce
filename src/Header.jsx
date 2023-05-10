import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext.jsx";
import { useLocation } from "react-router-dom";

import Logo from "./assets/img/logo/logobeau.png";
import Cart1 from "./assets/img/cart/sp1.png";
import { useAuthContext } from "./auth/useAuthContext.js";
import { toast, ToastContainer } from "react-toastify";

//components
import LinkWithDropdown from "./components/LinkWithDropdown";

export default function Header() {
    const [cartShow, setCartShow] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const location = useLocation();

    const { isAuthenticated } = useAuthContext();

    const handleCart = () => {
        if (isAuthenticated) {
            navigate("/cart");
        } else {
            toast.error("Vui lòng đăng nhập");
        }
    };

    // console.log(location.pathname == "/about-us" ? "active" : "");

    return (
        <div className="header_area">
            {/*header top*/}
            <div className="header_top">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="switcher"></div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header_links">
                            <ul className="row align-items-center">
                                <li>
                                    <Link to={"/about-us"}>Liên Hệ</Link>
                                </li>
                                <li>
                                    <Link to={""}>Sản Phẩm Yêu Thích</Link>
                                </li>
                                <li>
                                    <Link onClick={handleCart} to={"#"}>
                                        Giỏ Hàng
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Đăng Ký</Link>
                                </li>
                                <li>
                                    {!isAuthenticated ? (
                                        <Link to={"/login"}>Đăng Nhập</Link>
                                    ) : (
                                        <LinkWithDropdown to="#" style={{ color: "#00BBA6", padding: "7px 10px " }}>
                                            <i
                                                className="fa fa-user-circle-o"
                                                style={{ color: "#00BBA6", marginRight: 2 }}
                                            />
                                            <span style={{ color: "#00BBA6", "::after": { display: "none" } }}>
                                                Tài khoản
                                            </span>
                                        </LinkWithDropdown>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*header top end*/}
            {/*header middel*/}
            <div className="header_middel">
                <div className="row align-items-center">
                    {/*logo start*/}
                    <div className="col-lg-3 col-md-3">
                        <div className="logo">
                            <Link to={"/"}>
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    {/*logo end*/}
                    <div className="col-lg-9 col-md-9">
                        <div className="header_right_info">
                            <div className="search_bar">
                                <form action="#">
                                    <input placeholder="Tìm Kiếm..." type="text" />
                                    <button type="submit">
                                        <i className="fa fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="shopping_cart">
                                <a href="#" onClick={handleCart}>
                                    <i className="fa fa-shopping-cart" /> 2SP - 238.000đ{" "}
                                    <i className="fa fa-angle-down" />
                                </a>
                                {/*mini cart*/}
                                {cartShow && (
                                    <div className="mini_cart">
                                        <div className="cart_item">
                                            <div className="cart_img">
                                                <a href="#">
                                                    <img src={Cart1} alt="" />
                                                </a>
                                            </div>
                                            <div className="cart_info">
                                                <a href="#">Đầm Trắng - Mẫu 01</a>
                                                <span className="quantity">PL: Trắng, Size M</span>
                                                <span className="quantity">SL: 1</span>
                                                <span className="cart_price">238.000đ</span>
                                                <span className="cart_price">119.000đ</span>
                                            </div>
                                            <div className="cart_remove">
                                                <a title="Remove this item" href="#">
                                                    <i className="fa fa-times-circle" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cart_button">
                                            <Link to={"/cart"}>Xem giỏ hàng</Link>
                                        </div>
                                    </div>
                                )}
                                {/*mini cart end*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*header middel end*/}
            <div className="header_bottom">
                <div className="row">
                    <div className="col-12">
                        <div className="main_menu_inner">
                            <div className="main_menu d-none d-lg-block">
                                <nav>
                                    <ul>
                                        <li className={location.pathname == "/" ? "active" : ""}>
                                            <Link to={"/"}>TRANG CHỦ</Link>
                                        </li>
                                        <li className={location.pathname == "/about-us" ? "active" : ""}>
                                            <Link to={"/about-us"}>GIỚI THIỆU</Link>
                                            <div className="mega_menu jewelry">
                                                <div className="mega_items jewelry">
                                                    <ul>
                                                        <li>
                                                            <a href="shop-list.html">shop list</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-fullwidth.html">shop Full Width Grid</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-fullwidth-list.html">shop Full Width list</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-sidebar.html">shop Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-sidebar-list.html">shop list Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-product.html">Product Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-product-sidebar.html">Product sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-product-video.html">
                                                                Product Details video
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="single-product-gallery.html">
                                                                Product Details Gallery
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={location.pathname == "/product" ? "active" : ""}>
                                            <Link to={"/product"}>SẢN PHẨM</Link>
                                            <div className="mega_menu">
                                                <div className="mega_top fix">
                                                    <div className="mega_items">
                                                        <h3>
                                                            <a href="#">Accessories</a>
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Cocktai</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">day</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Evening</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sundresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Belts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sweets</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega_items">
                                                        <h3>
                                                            <a href="#">HandBags</a>
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Hats and Gloves</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Lifestyle</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bras</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Scarves</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Small Leathers</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega_items">
                                                        <h3>
                                                            <a href="#">Tops</a>
                                                        </h3>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Evening</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Long Sleeved</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shrot Sleeved</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Tanks and Camis</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sleeveless</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sleeveless</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mega_bottom fix">
                                                    <div className="mega_thumb">
                                                        <a href="#">
                                                            <img src="assets\img\banner\banner1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="mega_thumb">
                                                        <a href="#">
                                                            <img src="assets\img\banner\banner2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={location.pathname == "/policy" ? "active" : ""}>
                                            <Link to={"/policy"}>QUY ĐỊNH THUÊ</Link>
                                        </li>
                                        <li className={location.pathname == "/contact" ? "active" : ""}>
                                            <Link to={"/contact"}>LIÊN HỆ</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
