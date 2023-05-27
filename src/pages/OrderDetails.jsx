import { useEffect, useState } from "react";
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
                        <td style={{ textAlign: "center",fontStyle: "normal",
fontWeight: 600,
fontSize: 18 }}>2</td>
                        <td style={{ textAlign: "center", color: "#00BBA6",fontStyle: "normal",
fontWeight: 600,
fontSize: 18 }}>238.000đ</td>
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
                                        <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 18, color: "#00BBA6" }}>199.000đ</p>
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
                        <td style={{ textAlign: "center",fontStyle: "normal",
fontWeight: 600,
fontSize: 18 }}>1</td>
                        <td style={{ textAlign: "center", color: "#00BBA6",fontStyle: "normal",
fontWeight: 600,
fontSize: 18, }}>119.000đ</td>
                    </tr>
                </tbody>
            </table>

            <div className="container d-flex justify-content-end mb-3" style={{ gap: 20 }}>
                <div className="col-col-md-5 d-flex flex-column gap-3">
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Tổng tiền hàng:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Phí vận chuyển:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Mã giảm giá: </span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Tổng thanh toán:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Phương thức thanh toán:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Ngày bắt đầu thuê:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Ngày trả hàng:</span>
                </div>
                <div className=" col-col-md-5 d-flex flex-column gap-3 float-right">
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        537.000đ
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        15.000đ
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        -10.000đ
                    </span>
                    <br />
                    <span
                        className="align-self-end"
                        style={{ color: "#E74B32", fontSize: 18, float: "right",fontStyle: "normal", fontWeight: 700, }}
                    >
                        362.000đ
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        Thanh toán khi nhận hàng
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        22/03/2023
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        25/03/2023
                    </span>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <button
                    onClick={(e) => handleExit(e)}
                    className="btn btn-lg btn-link"
                    style={{ alignItems: "center", color: "#018576", fontSize: 16, fontWeight: 600 }}
                >
                    <i style={{ color: "#018576" }} className="fa-solid fa-chevron-left mr-1"></i>
                    Quay lại
                </button>
                <div className="btn-option d-flex" style={{ float: "right", gap: 10 }}>
                    <button
                        className="btn btn-lg btn-light"
                        style={{ alignItems: "center", fontSize: 16, fontWeight: 700,backgroundColor:"transparent", border: "0.3px solid #333333", cursor:"pointer" }}
                    >
                        Liên hệ
                    </button>
                    <button
                        className="btn btn-lg btn-light"
                        style={{ alignItems: "center", fontSize: 16, fontWeight: 700,backgroundColor:"transparent", border: "0.3px solid #333333", cursor:"pointer"  }}
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
                        <div className="modal-header text-center" style={{ display: "block" }}>
                            <h5 className="modal-title" id="exampleModalLabel">
                                LÝ DO HUỶ
                            </h5>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="form-check" style={{ padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 10 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item1"
                                    />
                                    <label style={{ padding: 0 }} className="form-check-label" for="item1">
                                        Tôi muốn cập nhật địa chỉ, số điện thoại
                                    </label>
                                </div>
                                <div className="form-check" style={{ padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 10 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item2"
                                    />
                                    <label style={{ padding: 0 }} className="form-check-label" for="item2">
                                        Tôi muốn thay đổi/thêm mã giảm giá
                                    </label>
                                </div>
                                <div className="form-check" style={{ padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 10 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item3"
                                    />
                                    <label style={{ padding: 0 }} className="form-check-label" for="item3">
                                        {`Tôi muốn thay đổi sản phẩm (size, màu sắc, số lượng)`}
                                    </label>
                                </div>
                                <div className="form-check" style={{ padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 10 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item4"
                                    />
                                    <label style={{ padding: 0 }} className="form-check-label" for="item4">
                                        Tôi muốn thay đổi hình thức thanh toán
                                    </label>
                                </div>
                                <div className="form-check" style={{ padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 10 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item5"
                                    />
                                    <label style={{ padding: 0 }} className="form-check-label" for="item5">
                                        Tôi không có nhu cầu thuê nữa
                                    </label>
                                </div>
                                <div className="form-check" style={{ padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 10 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item6"
                                    />
                                    <label style={{ padding: 0 }} className="form-check-label" for="item6">
                                        Tôi không tìm thấy lý do phù hợp hơn
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button
                                style={{ backgroundColor: "#00BBA680", color: "#ffffff" }}
                                type="button"
                                className="btn"
                            >
                                Huỷ đơn hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
