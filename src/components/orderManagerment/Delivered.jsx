import Product1 from "../../assets/img/product/pr1.png";

export function Delivered() {
    return (
        <>
            <div className="search-container mt-2">
                <div className="input-group">
                    <div
                        className="input-group-prepend"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px 0px 6px 12px",
                        }}
                    >
                        <i style={{ fontSize: 18 }} className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="tìm đơn hàng theo 'Mã đơn hàng' hoặc 'Tên sản phẩm'"
                    />
                </div>
            </div>

            <div className="container-successful mt-2">
                <div className="icon-car">
                    {/* <span> */}
                    <i className="fa-solid fa-car-side"></i>
                    {/* </span> */}
                </div>
                <div className="text-successful">
                    <p className="text">Giao hàng và trả hàng thành công</p>
                </div>
            </div>

            <div className="container-product">
                <div className="content">
                    <div className="product-item" style={{ padding: 10, borderBottom: "1px solid #DDDDDD" }}>
                        <div className="product-detail">
                            <div className="product-left">
                                <div className="product-img">
                                    <img src={Product1} alt="product img1" />
                                </div>
                                <div className="info-product">
                                    <div className="text-title">
                                        <p>Đầm trắng - Mẫu 01</p>
                                    </div>
                                    <div className="text-type-size">
                                        <p>Phân loại: Trắng, Size M</p>
                                    </div>
                                    <div className="text-number-product">
                                        <p>Số lượng: 1</p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-right product-price">
                                <div className="old_price">
                                    <p>238.000đ</p>
                                </div>
                                <div className="price">
                                    <p>115.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-item" style={{ padding: 10, borderBottom: "1px solid #DDDDDD" }}>
                        <div className="product-detail">
                            <div className="product-left">
                                <div className="product-img">
                                    <img src={Product1} alt="product img1" />
                                </div>
                                <div className="info-product">
                                    <div className="text-title">
                                        <p>Đầm trắng - Mẫu 01</p>
                                    </div>
                                    <div className="text-type-size">
                                        <p>Phân loại: Trắng, Size M</p>
                                    </div>
                                    <div className="text-number-product">
                                        <p>Số lượng: 1</p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-right product-price">
                                <div className="old_price">
                                    <p>238.000đ</p>
                                </div>
                                <div className="price">
                                    <p>115.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-options">
                        <div className="common-option">
                            <div className="order-total">
                                <div className="order-total-title">
                                    <label>Tổng cộng:</label>
                                </div>
                                <div className="order-total-price">
                                    <span className="vlaue-summary">300.000đ</span>
                                </div>
                            </div>
                            <div className="btn-option">
                                <button
                                    type="submit"
                                    className="btn btn-white"
                                    style={{ alignItems: "center", display: "flex" }}
                                >
                                    <a href="">Xem chi tiết</a>
                                </button>
                                <button
                                    disabled="disabled"
                                    className="btn btn-outline-success"
                                    style={{ alignItems: "center", display: "flex" }}
                                >
                                    Đánh giá
                                </button>
                                <button
                                    disabled="disabled"
                                    className="btn btn-outline-success"
                                    style={{ alignItems: "center", display: "flex" }}
                                >
                                    Thuê lại
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
