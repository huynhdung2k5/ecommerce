import Cart1 from "../assets/img/cart1.png";
import Pay1 from "../assets/img/pay1.png";
import Done1 from "../assets/img/done1.png";
import Pay2 from "../assets/img/pay2.png";
import Done2 from "../assets/img/done2.png";
import Product1 from "../assets/img/product/pr1.png";
import { useNavigate,Link } from "react-router-dom";
import { useAuthContext } from "../auth/useAuthContext";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/img/logo/logobeau.png";


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

    return (
        <div className="">
            <div className="bs-stepper">
                <div className="bs-stepper-header" role="tablist">
                <div className="logo">
                                <Link to={"/"}>
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
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
                                    style={{height:120}}
                                >
                                    <span
                                        className="bs-stepper-circle"
                                        style={{borderRadius: "50%", backgroundColor: step.active ? "#00bba6" : "", height: 67, width: 67, fontSize: 35 }}
                                    >
                                        {idx === 0 && <i className="fa-solid fa-cart-shopping"></i>}
                                        {idx === 1 && <i class="fa-sharp fa-solid fa-cart-plus"></i>}
                                        {idx === 2 && <i class="fa-solid fa-check"></i>}
                                    </span>
                                    <span style={{ color: step.active ? "#333333" : "",fontStyle: "normal",fontWeight: 700,fontSize: 16 }} className="bs-stepper-label">
                                        {step.title}
                                    </span>
                                </button>
                            </div>
                            {idx !== 2 && <div className="line"></div>}
                            
                        </React.Fragment>
                    ))}
                    {selected === 2 && <Link to="/product" style={{
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: 16,
                        paddingRight: 20
                    }}>Tiếp tục mua sắm {">"}</Link>}
                </div>
                <div className="bs-stepper-content p-0">
                    <div
                        key="cart"
                        id="cart"
                        className={`content ${selected === 0 && "active"}`}
                        role="tabpanel"
                        aria-labelledby="cart"
                    >
                        <CartComponent steps={steps} setSelected={setSelected} setSteps={setSteps} idx={selected} />
                    </div>
                    <div
                        key="payment"
                        id="payment"
                        className={`content ${selected === 1 && "active"}`}
                        role="tabpanel"
                        aria-labelledby="payment"
                    >
                        <PaymentComponent steps={steps} setSelected={setSelected} setSteps={setSteps} idx={selected} />
                    </div>
                    <div
                        key="compeleted"
                        id="compeleted"
                        className={`content ${selected === 2 && "active"}`}
                        role="tabpanel"
                        aria-labelledby="compeleted"
                    >
                        <Completed />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
