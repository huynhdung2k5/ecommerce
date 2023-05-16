import { useState } from "react";
import Product1 from "../assets/img/product/pr1.png";
import { useNavigate } from "react-router-dom";

export default function OrderDetail() {
    const navigate = useNavigate();

    const handleExit = (e) => {
        e.preventDefault();
        navigate("/user/order");
    };

    return (
        <div className="container col-md-8">
            <div className="container border mb-2 p-2">
                <span style={{ fontWeight: "bold" }}>Chi tiết đơn hàng #DH003</span> -{" "}
                <span style={{ fontWeight: "bold", color: "#018576" }}>Đang xử lý</span>
            </div>
            <div className="d-flex justify-content-between mb-2" style={{ gap: 10 }}>
                <div className="p-2 border" style={{ width: "49%" }}>
                    <span style={{ fontSize: 16, fontWeight: "bold" }}>Địa chỉ nhận hàng</span>
                    <br />
                    <span>Trần Thị Minh Uyên</span>
                    <br />
                    <span>Địa chỉ: K02/12 Phan Hành Sơn, Phường Mỹ An, Quận Ngũ hành Sơn, Đà Nẵng.</span>
                    <br />
                    <span>Điện thoại: 0967177830</span>
                </div>
                <div className="p-2 border" style={{ width: "49%" }}>
                    <span style={{ fontSize: 16, fontWeight: "bold" }}>Địa chỉ nhận hàng</span>
                    <br />
                    <span>Trần Thị Minh Uyên</span>
                    <br />
                    <span>Địa chỉ: K02/12 Phan Hành Sơn, Phường Mỹ An, Quận Ngũ hành Sơn, Đà Nẵng.</span>
                    <br />
                    <span>Điện thoại: 0967177830</span>
                </div>
            </div>
            <table className="table">
                <thead style={{ backgroundColor: "#DDDDDD" }}>
                    <tr>
                        <th scope="col">Sản phẩm</th>
                        <th style={{ textAlign: "center" }} scope="col">
                            Đơn giá
                        </th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: "1px solid #DDDDDD" }}>
                        <td>
                            <div className="product-detail" style={{ display: "flex" }}>
                                <div className="product-img">
                                    <img style={{ width: 120 }} src={Product1} alt="product img1" />
                                </div>
                                <div className="info-product p-2">
                                    <div className="text-title">
                                        <p style={{ fontWeight: 600, marginBottom: 0 }}>Đầm trắng - Mẫu 01</p>
                                    </div>
                                    <div className="text-type-size">
                                        <p>Phân loại: Trắng, Size M</p>
                                    </div>
                                    <div className="old_price d-flex">
                                        <p
                                            className="mr-1"
                                            style={{ textDecorationLine: "line-through", marginBottom: 0 }}
                                        >
                                            238.000đ{" "}
                                        </p>
                                        <p style={{ marginBottom: 0, color: "red" }}> - 50%</p>
                                    </div>
                                    <div className="price">
                                        <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 18 }}>199.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="mr-1" style={{ textDecorationLine: "line-through", marginBottom: 0 }}>
                                238.000đ{" "}
                            </p>
                            <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 18 }}>199.000đ</p>
                        </td>
                        <td style={{ textAlign: "center" }}>2</td>
                        <td style={{ textAlign: "center" }}>20</td>
                    </tr>
                    <tr style={{ border: "1px solid #DDDDDD" }}>
                        <td>
                            <div className="product-detail" style={{ display: "flex" }}>
                                <div className="product-img">
                                    <img style={{ width: 120 }} src={Product1} alt="product img1" />
                                </div>
                                <div className="info-product p-2">
                                    <div className="text-title">
                                        <p style={{ fontWeight: 600, marginBottom: 0 }}>Đầm trắng - Mẫu 01</p>
                                    </div>
                                    <div className="text-type-size">
                                        <p>Phân loại: Trắng, Size M</p>
                                    </div>
                                    <div className="old_price d-flex">
                                        <p
                                            className="mr-1"
                                            style={{ textDecorationLine: "line-through", marginBottom: 0 }}
                                        >
                                            238.000đ{" "}
                                        </p>
                                        <p style={{ marginBottom: 0, color: "red" }}> - 50%</p>
                                    </div>
                                    <div className="price">
                                        <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 18 }}>199.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="mr-1" style={{ textDecorationLine: "line-through", marginBottom: 0 }}>
                                238.000đ{" "}
                            </p>
                            <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 18 }}>199.000đ</p>
                        </td>
                        <td style={{ textAlign: "center" }}>2</td>
                        <td style={{ textAlign: "center" }}>20</td>
                    </tr>
                </tbody>
            </table>

            <div className="container d-flex justify-content-end" style={{ gap: 5 }}>
                <div className="col-col-md-5">
                    <span style={{ fontSize: 18, fontFamily: "Quicksand" }}>Tổng tiền hàng:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand" }}>Phí vận chuyển:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand" }}>Mã giảm giá: </span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand" }}>Tổng thanh toán:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand" }}>Phương thức thanh toán:</span>
                </div>
                <div className=" col-col-md-5 " style={{ paddingTop: 7 }}>
                    <span style={{ fontSize: 18, fontFamily: "Quicksand", float: "right" }}>537.000đ</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand", float: "right" }}>15.000đ</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand", float: "right" }}>-10.000đ</span>
                    <br />
                    <span style={{ color: "#E74B32", fontWeight: "bold", fontSize: 18, float: "right" }}>362.000đ</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand", float: "right" }}>
                        Thanh toán khi nhận hàng
                    </span>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <button
                    onClick={(e) => handleExit(e)}
                    className="btn btn-lg btn-link"
                    style={{ alignItems: "center", color: "#018576", fontWeight: 600 }}
                >
                    <i style={{ color: "#018576" }} className="fa-solid fa-chevron-left mr-1"></i>
                    Quay lại
                </button>
                <div className="btn-option d-flex" style={{ float: "right", gap: 10 }}>
                    <button className="btn btn-lg btn-light" style={{ alignItems: "center" }}>
                        Liên hệ
                    </button>
                    <button
                        className="btn btn-lg btn-light"
                        style={{ alignItems: "center" }}
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Xác nhận huỷ
                    </button>
                </div>
            </div>

            {/** MODAL */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Lựa chọn:</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="option"
                                        id="option1"
                                        value="option1"
                                    />
                                    <label className="form-check-label" for="option1">
                                        Lựa chọn 1
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="option"
                                        id="option2"
                                        value="option2"
                                    />
                                    <label className="form-check-label" for="option2">
                                        Lựa chọn 2
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="option"
                                        id="option3"
                                        value="option3"
                                    />
                                    <label className="form-check-label" for="option3">
                                        Lựa chọn 3
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="option"
                                        id="option4"
                                        value="option4"
                                    />
                                    <label className="form-check-label" for="option4">
                                        Lựa chọn 4
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="option"
                                        id="option5"
                                        value="option5"
                                    />
                                    <label className="form-check-label" for="option5">
                                        Lựa chọn 5
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="option"
                                        id="option6"
                                        value="option6"
                                    />
                                    <label className="form-check-label" for="option6">
                                        Lựa chọn 6
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
