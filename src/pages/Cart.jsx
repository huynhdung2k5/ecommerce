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
    // const { isAuthenticated } = useAuthContext();

    const navigate = useNavigate();
    const handlePayment = () => {
        navigate("/payment", { replace: true });
    };



    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate("/");
    //     }
    // }, [isAuthenticated]);

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

    // const handleClickStepper = (step, idx) => {
    //     if(steps[idx - 1].active){
    //         const data = steps.find((item) => item === step);
    //         data.active = !data.active;
    //         steps.splice(idx,1,data);
    //         console.log(steps);
    //         setSteps(steps.splice(idx,1,data));
    //     }
    // };

    return (
        <div className="">
          
            <div className="bs-stepper" >
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
                                    
                                >
                                    <span
                                        className="bs-stepper-circle"
                                        style={{ backgroundColor: step.active ? "#00bba6" : "" }}
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </span>
                                    <span style={{ color: step.active ? "#333333" : "" }} className="bs-stepper-label">
                                        {step.title}
                                    </span>
                                </button>
                            </div>
                            {idx !== 2 && <div className="line"></div>}
                        </React.Fragment>
                    ))}
                </div>
                <div className="bs-stepper-content pb-0">
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
