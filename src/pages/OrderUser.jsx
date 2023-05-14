import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Product1 from "../assets/img/product/pr1.png";
import "react-tabs/style/react-tabs.css";
import AllOrder from "../components/orderManagerment/AllOrder";
// export default function OrderUser() {
//     // Khởi tạo state cho activeTab và setActiveTab
//     const items = ["Tất cả các đơn", "Chờ xác nhận", "Vận chuyển", "Đã giao", "Đã trả hàng", "Đã huỷ"];
//     const [selected, setSelected] = useState(0);

//     const handleChangeTab = (index) => {
//         localStorage.setItem("selected", selected);
//         setSelected(index);
//     };
//     return (
//         <>
//             <div className="d-flex flex-column">
//                 <ul className="nav nav-tabs">
//                     <li className="nav-item">
//                         <a className="nav-link active" data-toggle="tab" href="#tab1">
//                             Tab 1
//                         </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" data-toggle="tab" href="#tab2">
//                             Tab 2
//                         </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" data-toggle="tab" href="#tab3">
//                             Tab 3
//                         </a>
//                     </li>
//                 </ul>
//                 <div className="tab-content">
//                     <div className="tab-pane active" id="tab1">
//                         Nội dung tab 1
//                     </div>
//                     <div className="tab-pane" id="tab2">
//                         Nội dung tab 2
//                     </div>
//                     <div className="tab-pane" id="tab3">
//                         Nội dung tab 3
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

export default function OrderUser() {
    // const items = ["Tất cả các đơn", "Chờ xác nhận", "Vận chuyển", "Đã giao", "Đã trả hàng", "Đã huỷ"];
    const items = [
        {
            name: "Tất cả các đơn",
            content: <AllOrder />,
        },
        {
            name: "Chờ xác nhận",
            content: "Chờ xác nhận",
        },
        {
            name: "Vận chuyển",
            content: "Vận chuyển",
        },
        {
            name: "Đã giao",
            content: "Đã giao",
        },
        {
            name: "Đã trả hàng",
            content: "Đã trả hàng",
        },
        {
            name: "Đã huỷ",
            content: "Đã huỷ",
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
