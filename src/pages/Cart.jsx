import Cart1 from "../assets/img/cart1.png";
import Pay1 from "../assets/img/pay1.png";
import Done1 from "../assets/img/done1.png";
import Pay2 from "../assets/img/pay2.png";
import Done2 from "../assets/img/done2.png";
import Product1 from "../assets/img/product/pr1.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth/useAuthContext";
import React, { useEffect, useRef, useState } from "react";

//Components
import CartComponent from "../components/Cart/CartComponent";
import PaymentComponent from "../components/Cart/PaymentComponent";
import Completed from "../components/Cart/Completed";

const Cart = () => {
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const handlePayment = () => {
        navigate("/payment", { replace: true });
    };

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    // stepper
    const items = [
        {
            title: "Giỏ hàng",
            id: "cart",
            content: <CartComponent />,
            active: true,
        },
        {
            title: "Thanh toán",
            id: "payment",
            content: <PaymentComponent />,
            active: false,
        },
        {
            title: "Hoàn tất",
            id: "compeleted",
            content: <Completed />,
            active: false,
        },
    ];
    const [selected, setSelected] = useState(0);
    const [steps, setSteps] = useState(items);

    const handleClickStepper = (step, idx) => {
        setSelected(idx);

        if (idx > 0 && items[idx - 1].active) {
            if (!step.active) {
                step.active = !step.active;
                steps.splice(idx, 1, step);
                console.log("test: ", steps);

                setSteps(steps);
            } else {
                const data = steps.find((_, index) => index === idx + 1);
                data.active = false;
                steps.splice(idx + 1, 1, data);
            }
        }
    };

    return (
        <div className="">
            <div className="breadcrumbs_area">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="index.html">Trang chủ</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>Giỏ Hàng</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bs-stepper">
                <div className="bs-stepper-header" role="tablist">
                    {steps.map((step, idx) => (
                        <React.Fragment key={step.id}>
                            <div className={step.active ? "step active" : "step"} data-target={`#${step.id}`}>
                                <button
                                    onClick={() => handleClickStepper(step, idx)}
                                    type="button"
                                    className="step-trigger"
                                    role="tab"
                                    aria-controls={step.id}
                                    id={step.id}
                                >
                                    <span
                                        className="bs-stepper-circle"
                                        style={{ backgroundColor: step.active ? "#00bba6" : "" }}
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </span>
                                    <span style={{ color: step.active ? "#00bba6" : "" }} className="bs-stepper-label">
                                        {step.title}
                                    </span>
                                </button>
                            </div>
                            {idx !== 2 && <div className="line"></div>}
                        </React.Fragment>
                    ))}
                </div>
                <div className="bs-stepper-content pb-0">
                    {steps.map((step, idx) => (
                        <div
                            key={step.id}
                            id={step.id}
                            className={`content ${selected === idx && "active"}`}
                            role="tabpanel"
                            aria-labelledby={step.id}
                        >
                            {step.content}
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className=" pos_home_section shop_section shop_fullwidth" style={{ padding: "30px 100px" }}>
                <div className="time-line">
                    <ul className="step">
                        <li className="step-item">
                            <img src={Cart1} alt="" />
                            <div className="">
                                <b>GIỎ HÀNG</b>
                            </div>
                        </li>
                        <li className="step-item">
                            <div className="line"></div>
                        </li>
                        <li className="step-item">
                            <img src={Pay1} alt="" />
                            <div className="">
                                <b>THANH TOÁN</b>
                            </div>
                        </li>
                        <li className="step-item">
                            <div className="line"></div>
                        </li>
                        <li className="step-item">
                            <img src={Pay1} alt="" />
                            <div className="">
                                <b>HOÀN TẤT</b>
                            </div>
                        </li>
                        <li className="step-item">
                            <div className="">
                                <b>Tiếp tục mua sắm</b>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}

            {/* <div className="shopping_cart_area">
                <form action="#">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc wishlist">
                                <div className="cart_page table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product_remove" style={{ width: "600px" }}>
                                                    <input type="checkbox" className="item-checkbox" /> Sản phẩm
                                                </th>
                                                <th className="product_name">Đơn giá</th>
                                                <th className="product-price">Số lượng</th>
                                                <th className="product_quantity">Thành tiền</th>
                                                <th className="product_total">Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product_remove" style={{ width: "600px" }}>
                                                    <div
                                                        className="info-card"
                                                        style={{ width: "70%", alignItems: "center" }}
                                                    >
                                                        <input type="checkbox" className="item-checkbox" />
                                                        <img src={Product1} className="img-cart" alt="" />
                                                        <div className="title-info" style={{ width: "300px" }}>
                                                            <h4>Đầm Trắng - Mẫu 01</h4>
                                                            <p>
                                                                <del>238.000đ</del>{" "}
                                                                <span style={{ color: "red", marginLeft: "10px" }}>
                                                                    50%
                                                                </span>
                                                            </p>
                                                            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                                                                119.000đ
                                                            </p>
                                                            <p>Còn lại: 29</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product_thumb">
                                                    <del>238.000đ</del> <b style={{ fontSize: "18px" }}>119.000đ</b>
                                                </td>
                                                <td className="product_name">
                                                    <div className="quantity-cart">
                                                        <div className="text-bold divide">-</div>
                                                        <input type="text" value={1} className="quantity-input" />
                                                        <div className="text-bold divide">+</div>
                                                    </div>
                                                </td>
                                                <td className="product-price">238.000đ</td>
                                                <td className="product_total">
                                                    <a href="#">Xóa</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product_remove" style={{ width: "600px" }}>
                                                    <div
                                                        className="info-card"
                                                        style={{ width: "70%", alignItems: "center" }}
                                                    >
                                                        <input type="checkbox" className="item-checkbox" />
                                                        <img src={Product1} className="img-cart" alt="" />
                                                        <div className="title-info" style={{ width: "300px" }}>
                                                            <h4>Đầm Trắng - Mẫu 01</h4>
                                                            <p>
                                                                <del>238.000đ</del>{" "}
                                                                <span style={{ color: "red", marginLeft: "10px" }}>
                                                                    50%
                                                                </span>
                                                            </p>
                                                            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                                                                119.000đ
                                                            </p>
                                                            <p>Còn lại: 29</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product_thumb">
                                                    <del>238.000đ</del> <b style={{ fontSize: "18px" }}>119.000đ</b>
                                                </td>
                                                <td className="product_name">
                                                    <div className="quantity-cart">
                                                        <div className="text-bold divide">-</div>
                                                        <input type="text" value={1} className="quantity-input" />
                                                        <div className="text-bold divide">+</div>
                                                    </div>
                                                </td>
                                                <td className="product-price">238.000đ</td>
                                                <td className="product_total">
                                                    <a href="#">Xóa</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row sticker-nav">
                    <div className="check-all">
                        <input type="checkbox" className="item-checkbox" />
                        <b>Chọn tất cả (3)</b>
                    </div>
                    <div className="delete-all">
                        <b>Xóa Tất Cả</b>
                    </div>
                    <div className="total-de">
                        <b>Tổng thanh toán (2 sản phẩm)</b>:{" "}
                        <span style={{ fontWeight: "bold", color: "red", fontSize: "18px" }}>357.000đ</span>
                    </div>
                    <div className="bt-main" onClick={handlePayment}>
                        Đặt hàng
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Cart;
