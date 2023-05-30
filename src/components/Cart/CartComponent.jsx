import React from "react";
import product1 from "../../assets/img/product/pr11.png";
import product2 from "../../assets/img/product/pr10.png";
import product3 from "../../assets/img/product/pr9.png";
import { useEffect, useState } from "react";
export default function CartComponent({ steps, setSteps, idx, setSelected }) {
    const items = [
        {
            name: "Đầm trắng - mẫu 01",
            image: product1,
            old_price: 238000,
            new_price: 119000,
            quantity: 2,
        },
        {
            name: "Đầm trắng - mẫu 02",
            image: product2,
            old_price: 238000,
            new_price: 119000,
            quantity: 1,
        },
        {
            name: "Đầm trắng - mẫu 03",
            image: product3,
            old_price: 238000,
            new_price: 119000,
            quantity: 1,
        },
    ];

    const [itemsData, setItemsData] = useState(items);

    const increaseQuantity = (idx) => {
        const updatedItems = [...itemsData];
        updatedItems[idx].quantity++;
        setItemsData(updatedItems);
        console.log(updatedItems);
    };

    const decreaseQuantity = (idx) => {
        const updatedItems = [...itemsData];
        if (updatedItems[idx].quantity > 0) {
            updatedItems[idx].quantity--;
        }
        setItemsData(updatedItems);
        console.log(updatedItems);
    };

    const handleClick = () => {
        setSelected(idx + 1);
        steps[idx + 1].active = true;
        setSteps(steps);
    };
    return (
        <React.Fragment>
            <div className="container">
                <table className="table border">
                    <thead>
                        <tr>
                            <th className="col-md-1"></th>
                            <th className="product">Sản Phẩm</th>
                            <th className="unit-price">Đơn giá</th>
                            <th className="quantity">Số lượng</th>
                            <th className="total_price">Thành tiền</th>
                            <th className="operation">Thao tác</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {itemsData.map((item, idx) => (
                            <tr key={idx}>
                                <td className="align-middle text-center">
                                    <div style={{ height: "100%" }} className=" container d-flex justify-content-center">
                                        <input style={{ height: 20 }} type="checkbox" className=" check_cart__input" />
                                    </div>
                                </td>
                                <td className="d-flex">
                                    <div className="product-img">
                                        <img width={120} src={item.image} alt="" />
                                    </div>
                                    <div className="pl-2">
                                        <div className="text-title">
                                            <p style={{ color: "#333333", fontWeight: 600 }}>{item.name}</p>
                                        </div>
                                        <div className="text-type-size">
                                            <p>Phân loại: Trắng, Size M</p>
                                        </div>
                                        <div className="product-price">
                                            <div className="sale">
                                                <p style={{ color: "#E74B32" }}>Giảm giá 50%</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="d-flex">
                                        <div className="cost-price">
                                            <p style={{ textDecoration: "line-through" }}>
                                                {item.old_price.toLocaleString("vi-VN") + "đ"}
                                            </p>
                                        </div>
                                        <div className="pl-2">
                                            <p style={{ fontWeight: 600, color: "#333333" }}>
                                                {item.new_price.toLocaleString("vi-VN") + "đ"}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="d-flex" style={{ gap: 3 }}>
                                        <button
                                            onclick={() => decreaseQuantity(idx)}
                                            className="btn"
                                            style={{ backgroundColor: "#ffffff", border: "1px solid #EDEDED" }}
                                        >
                                            <i className="fa-sharp fa-solid fa-minus"></i>
                                        </button>
                                        <input
                                            style={{ padding: 2, height: 31.48, backgroundColor: "#ffffff" }}
                                            // type="number"
                                            className="col-2 align-center"
                                            min="0"
                                            max="999"
                                            onInput="null"
                                            value={item.quantity}
                                        />
                                        <button
                                            onClick={() => increaseQuantity(idx)}
                                            style={{ backgroundColor: "#ffffff", border: "1px solid #EDEDED" }}
                                            className="btn"
                                        >
                                            <i className="fa-sharp fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <p style={{ fontSize: 18, color: "#00BBA6",fontStyle: "normal",fontWeight: 600 }}>
                                        {(item.new_price * item.quantity).toLocaleString("vi-VN") + "đ"}
                                    </p>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="option-crud__cart" style={{ marginTop: -20 }}>
                                        <button className="btn btn-link" style={{ color: "#333333" }}>
                                            Xoá
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div
            className=" p-3 d-flex align-items-center justify-content-between"
            style={{ textAlign: "center", boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)" }}
        >
            {/* <div className="col-md-2 "> */}
            <input style={{ height: 20 }} className="col-1" type="checkbox" name="check_all" />
            {/* </div> */}
    
            <p className="mb-0">
                Chọn Tất Cả <span>(3)</span>
            </p>
    
            <p className="mb-0">Xóa Tất Cả</p>
    
            <p className="mb-0">
                Tổng Thanh Toán <span>(2 Sản Phẩm):&nbsp;</span>
            </p>
    
            <p className="mb-0" style={{ fontSize: 22, fontWeight: 700, color: "#E74B32" }}>
                357.000đ
            </p>
    
            <button onClick={() => handleClick()} className="btn btn-success col-md-3">
                Đặt Hàng
            </button>
        </div>
        </React.Fragment>
    );
}
