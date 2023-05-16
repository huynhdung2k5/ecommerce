import React from "react";
import product1 from "../assets/img/product/pr1.png";
export default function FavoriteProduct() {
    return (
        <>
            <div className="container col-md-8">
                <div className="p-3 item border">
                    <div className="content_text d-flex justify-content-between">
                        <div className="d-flex">
                            <img width={120} src={product1} alt="" />

                            <div className="info-product">
                                <div className="text-title">
                                    <p>Đầm trắng - Mẫu 01</p>
                                </div>
                                <div className="text-type-size">
                                    <p>Phân loại: Trắng, Size M</p>
                                </div>
                                <div className="product-price">
                                    <div className="cost-price old_price">
                                        <p>238.000đ</p>
                                    </div>
                                    <div className="sale">
                                        <p>-50%</p>
                                    </div>
                                </div>
                                <div className="price-sale">
                                    <p>119.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className=" pr-3 row flex-column justify-content-between align-items-end">
                            <input type="button" className="text-right p-0 btn btn-link col-md-4" value="Xoá" />

                            <div className="option-btn right">
                                <button
                                    className="btn btn-success"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#00BBA6",
                                    }}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3 item border">
                    <div className="content_text d-flex justify-content-between">
                        <div className="d-flex">
                            <img width={120} src={product1} alt="" />

                            <div className="info-product">
                                <div className="text-title">
                                    <p>Đầm trắng - Mẫu 01</p>
                                </div>
                                <div className="text-type-size">
                                    <p>Phân loại: Trắng, Size M</p>
                                </div>
                                <div className="product-price">
                                    <div className="cost-price old_price">
                                        <p>238.000đ</p>
                                    </div>
                                    <div className="sale">
                                        <p>-50%</p>
                                    </div>
                                </div>
                                <div className="price-sale">
                                    <p>119.000đ</p>
                                </div>
                            </div>
                        </div>

                        <div className=" pr-3 row flex-column justify-content-between align-items-end">
                            <input type="button" className="text-right p-0 btn btn-link col-md-4" value="Xoá" />

                            <div className="option-btn right">
                                <button
                                    className="btn btn-success"
                                    style={{
                                        border: "none",
                                        backgroundColor: "#00BBA6",
                                    }}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
