import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Product1 from "../assets/img/product/pr1.png";
import "react-tabs/style/react-tabs.css";
import AllOrder from "../components/orderManagerment/AllOrder";
import Accepts from "../components/orderManagerment/Accepts";
import { Deliveries } from "../components/orderManagerment/Deliveries";
import { Delivered } from "../components/orderManagerment/Delivered";

export default function OrderUser() {
    const items = [
        {
            name: "Tất cả các đơn",
            content: <AllOrder />,
        },
        {
            name: "Chờ xác nhận",
            content: <Accepts />,
        },
        {
            name: "Vận chuyển",
            content: <Deliveries />,
        },
        {
            name: "Đã giao",
            content: <Delivered />,
        },
        {
            name: "Đã trả hàng",
            content: <Delivered />,
        },
        {
            name: "Đã huỷ",
            content: <Deliveries />,
        },
    ];
    const [selected, setSelected] = useState(0);

    const handleClick = (idx) => {
        setSelected(idx);
    };

    return (
        <div className="container col-md-7">
            <div className="pos_page_inner">
                {/* <div className="row"> */}
                <div className="content">
                    <div className="filter">
                        <ul className="list_nav nav nav-fill ">
                            {items.map((ele, idx) => (
                                <li key={idx} onClick={() => handleClick(idx)} className="nav-item page_item">
                                    <a
                                        href={`#tab${idx + 1}`}
                                        data-toggle="tab"
                                        className={`nav-link ${selected === idx ? "active" : ""}`}
                                    >
                                        {ele.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tab-content">
                        {items.map((ele, idx) => (
                            <div
                                key={idx}
                                className={`tab-pane ${selected === idx ? "active" : ""}`}
                                id={`tab${idx + 1}`}
                            >
                                {ele.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
