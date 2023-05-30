import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { dataProduct } from "../../data/product";

export default function PaymentComponent({ steps, setSteps, idx, setSelected }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleClick = () => {
        setSelected(idx + 1);
        steps[idx + 1].active = true;
        setSteps(steps);
    };

    const handlePrevious = () => {
        setSelected(idx - 1);
        steps[idx].active = false;
        setSteps(steps);
    }
    return (
        <div className="row p-3">
            <div className="pay mt-5" style={{ width: "100%", padding: 10 }}>
                <div className="pay_left left col-8 p-0">
                    <div className="border section_container">
                        <div className="address m-3">
                            <div className="title-content d-flex justify-content-between">
                                <p
                                    style={{
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: 20,
                                    }}
                                >
                                    Địa chỉ nhận hàng
                                </p>

                                <a
                                    className="btn btn-text"
                                    style={{
                                        border: "none",
                                        backgroundColor: "transparent",
                                        cursor: "pointer",
                                        color: "#00BBA6",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: 18,
                                    }}
                                >
                                    Thay đổi
                                </a>
                            </div>
                            <div className="content-txt">
                                <div className="dislay-flex mt-3 name-phone">
                                    <div className="name-customer padding-right-10">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 700,
                                                fontSize: 18,
                                            }}
                                        >
                                            Trần Thị Minh Uyên | 0967177830
                                        </p>
                                    </div>
                                </div>
                                <div className="txt-address">
                                    <p
                                        style={{
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            fontSize: 18,
                                        }}
                                    >
                                        Địa chỉ: K02/12 Phan Hoành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-detail mt-2">
                        <div className="table-wrapper">
                            <table className="cart mb-2" style={{ width: "100%" }}>
                                <thead className="table-head bg-table">
                                    <tr>
                                        <th className="product">Sản Phẩm</th>
                                        <th className="quantity">Số Lượng</th>
                                        <th>Thành Tiền</th>
                                    </tr>
                                </thead>

                                <tbody className="mr-3">
                                    {Array.from({ length: 2 }).map((_, idx) => (
                                        <tr key={idx}>
                                            <td className="product">
                                                <div className="product-img">
                                                    <img src={dataProduct[idx].img} alt="" />
                                                </div>
                                                <div className="info-product">
                                                    <div className="text-title">
                                                        <p
                                                            style={{
                                                                fontStyle: "normal",
                                                                fontWeight: 600,
                                                                fontSize: 16,
                                                            }}
                                                        >
                                                            {dataProduct[idx].name}
                                                        </p>
                                                    </div>
                                                    <div className="text-type-size">
                                                        <p
                                                            style={{
                                                                fontStyle: "normal",
                                                                fontWeight: 500,
                                                                fontSize: 15,
                                                            }}
                                                        >
                                                            Phân loại: Trắng, Size M
                                                        </p>
                                                    </div>
                                                    <div className="product-price">
                                                        <div className="cost-price old_price">
                                                            <p
                                                                style={{
                                                                    fontStyle: "normal",
                                                                    fontWeight: 500,
                                                                    fontSize: 16,
                                                                    textDecoration: "line-through",
                                                                }}
                                                            >
                                                                {dataProduct[idx].oldPrice}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="price-sale">
                                                        <p
                                                            style={{
                                                                fontStyle: "normal",
                                                                fontWeight: 600,
                                                                fontSize: 18,
                                                            }}
                                                        >
                                                            {dataProduct[idx].price}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="quantity">
                                                <p
                                                    style={{
                                                        fontStyle: "normal",
                                                        fontWeight: 600,
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    {idx === 0 ? 2 : 1}
                                                </p>
                                            </td>
                                            <td className="into-money">
                                                <p
                                                    style={{
                                                        fontStyle: "normal",
                                                        fontWeight: 600,
                                                        fontSize: 18,
                                                        color: "#00BBA6",
                                                    }}
                                                >
                                                    238.000đ
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex" style={{ gap: 3 }}>
                        <div className="col-6 pl-0">
                            <p
                                style={{
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                Ngày bắt đầu thuê
                            </p>
                            <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="col-6 pr-1">
                            <p
                                style={{
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                Ngày trả hàng
                            </p>
                            <DatePicker showIcon selected={endDate} onChange={(date) => setEndDate(date)} />
                        </div>
                    </div>
                    <div className="border section_container mt-3">
                        <textarea
                            name="not"
                            id=""
                            cols="30"
                            rows="10"
                            style={{
                                width: " 100%",
                                height: "100px",
                                backgroundColor: "transparent",
                                fontSize: 20,
                                fontWeight: 500,
                            }}
                            placeholder="Ghi chú"
                        ></textarea>
                    </div>
                </div>

                {/* <!-- right --> */}
                <div className="pay-right right col-4">
                    <div className="border section_container ">
                        <div>
                            <div className="title-content p-3" style={{ borderBottom: "1px solid #e5e5e5" }}>
                                <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Phương Thức Thanh Toán</p>
                            </div>
                            <div className="content-txt p-3">
                                <form>
                                    <div className="d-flex align-items-center" style={{ gap: 10 }}>
                                        <input
                                            className="test"
                                            type="checkbox"
                                            value=""
                                            defaultChecked
                                            id="check1"
                                            style={{ height: 15, width: 15 }}
                                        />
                                        <label
                                            className="m-0"
                                            for="check1"
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Thanh toán khi nhận hàng
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center" style={{ gap: 10 }}>
                                        <input type="checkbox" value="" id="check2" style={{ height: 15, width: 15 }} />
                                        <label
                                            className="m-0"
                                            for="check2"
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Chuyển khoản
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="border p-3 section_container mt-4">
                        <div>
                            <div className="title-content">
                                <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Mã Giảm Giá</p>
                            </div>

                            <div className="form-group mt-3 margin-020">
                                <input placeholder="Nhập mã giảm giá" type="text" className="border form-control" />
                            </div>
                            <div className="otp-option mt-3 margin-020">
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        width: 168,
                                        height: 40,
                                        backgroundColor: "#00BBA6",
                                        cursor: "pointer",
                                        color: "#ffffff",
                                        fontWeight: 700,
                                        fontStyle: "normal",
                                        fontSize: 18,
                                    }}
                                >
                                    Áp Dụng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border section_container mt-4">
                        <div className="p-3">
                            <div className="title-content">
                                <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Đơn Hàng</p>
                            </div>

                            <div className="all_bill mt-3">
                                <div className="d-flex justify-content-between">
                                    <div className="title_bill">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Tổng tiền hàng:
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Phí vận chuyển:
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Khuyến mãi:
                                        </p>
                                    </div>
                                    <div className="value_bill">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            357.000đ
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            15.000đ
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            -10.000đ
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mt-5">
                                    <div className="title_sum_bill">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                fontSize: 16,
                                            }}
                                        >
                                            Tổng thanh toán:
                                        </p>
                                    </div>
                                    <div className="sum_value_bill">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 700,
                                                fontSize: 20,
                                                color: "#E74B32",
                                            }}
                                        >
                                            362.000đ
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleClick()}
                                    className="btn"
                                    style={{ backgroundColor: "#00BBA6", color: "#ffffff", width: "100%" }}
                                >
                                    Đặt hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-start">
                <button className="btn" onClick={()=> handlePrevious()} style={{border:"none", backgroundColor:"transparent", color: "#00BBA6", cursor: "pointer", fontStyle: "normal", fontWeight:"bold", fontSize: 18}}>{"<<"} Quay lại</button>
            </div>
        </div>
    );
}
