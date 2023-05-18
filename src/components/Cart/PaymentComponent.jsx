export default function PaymentComponent({ steps, setSteps, idx, setSelected }) {
    const handleClick = () => {
        setSelected(idx + 1);
        steps[idx + 1].active = true;
        setSteps(steps);
    };
    return (
        <div className="row">
            <div className="pay mt-5">
                <div className="pay_left left col-8" style={{ padding: "0px 30px" }}>
                    <div className="border section_container">
                        <div className="address margin-2020">
                            <div className="title-content">
                                <p>Địa chỉ nhận hàng</p>

                                <a href="" className="change-info_txt">
                                    Thay đổi
                                </a>
                            </div>
                            <div className="content-txt">
                                <div className="dislay-flex mt-3 name-phone">
                                    <div className="name-customer padding-right-10">
                                        <p>Trần Thị Minh Huyền</p>
                                    </div>
                                    <div className="line-4"></div>
                                    <div className="phone-customer padding-010">
                                        <p>0967177830</p>
                                    </div>
                                </div>
                                <div className="txt-address">
                                    <p>Địa chỉ: K02/12 Phan Hoành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-detail mt-2">
                        <div className="table-wrapper">
                            <table className="cart mb-2">
                                <thead className="table-head bg-table">
                                    <tr>
                                        <th className="product">Sản Phẩm</th>
                                        <th className="quantity">Số Lượng</th>
                                        <th className="total_price" style={{ width: "150px" }}>
                                            Thành Tiền
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="mr-3">
                                    <tr>
                                        <td className="product">
                                            <div className="product-img">
                                                <img src="./assets/assets/img/product/pr2.png" alt="" />
                                            </div>
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
                                                </div>

                                                <div className="price-sale">
                                                    <p>119.000đ</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="quantity">
                                            <p>2</p>
                                        </td>
                                        <td className="into-money">
                                            <p>238.000đ</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product">
                                            <div className="product-img">
                                                <img src="./assets/assets/img/product/pr2.png" alt="" />
                                            </div>
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
                                                </div>

                                                <div className="price-sale">
                                                    <p>119.000đ</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="quantity">
                                            <p>2</p>
                                        </td>
                                        <td className="into-money">
                                            <p>238.000đ</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="border section_container mt-3">
                        <textarea
                            name="not"
                            id=""
                            cols="30"
                            rows="10"
                            style={{ width: " 100%", height: "100px" }}
                            placeholder="Ghi chú"
                        ></textarea>
                    </div>
                </div>

                {/* <!-- right --> */}
                <div className="pay-right right col-4" style={{ width: "50%" }}>
                    <div className="border section_container ">
                        <div style={{ margin: "10px 10px" }}>
                            <div className="title-content">
                                <p>Phương Thức Thanh Toán</p>
                            </div>
                            <div className="content-txt mt-3">
                                <div className="method">
                                    <input
                                        type="radio"
                                        id="name"
                                        name="contact"
                                        value="nam"
                                        className="method_1"
                                        checked
                                    />
                                    <label for="nam" className="form-input-radio">
                                        Thanh Toán Khi Nhận Hàng
                                    </label>
                                </div>

                                <div className="method">
                                    <input type="radio" id="name" name="contact" value="nam" className="method_1" />
                                    <label for="nam" className="form-input-radio">
                                        Chuyển Khoản
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border section_container mt-4">
                        <div style={{ margin: "10px 10px" }}>
                            <div className="title-content">
                                <p>Mã Giảm Giá</p>
                            </div>

                            <div className="form-group mt-3 margin-020">
                                <input type="text" className="border form-control" />
                            </div>
                            <div className="otp-option mt-3 margin-020">
                                <button type="button" className="btn btn-success">
                                    Áp Dụng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border section_container mt-4">
                        <div className="margin-1010">
                            <div className="title-content">
                                <p>Đơn Hàng</p>
                            </div>

                            <div className="all_bill mt-3">
                                <div className="info_bill">
                                    <div className="title_bill">
                                        <p>Tổng tiền hàng:</p>
                                        <p>Phí vận chuyển:</p>
                                        <p>Khuyến mãi:</p>
                                    </div>
                                    <div className="value_bill">
                                        <p>357.000đ</p>
                                        <p>15.000đ</p>
                                        <p>-10.000đ</p>
                                    </div>
                                </div>

                                <div className="sum_bill mt-5">
                                    <div className="title_sum_bill">
                                        <p>Tổng thanh toán:</p>
                                    </div>
                                    <div className="sum_value_bill">
                                        <p>362.000đ</p>
                                    </div>
                                    <button onClick={() => handleClick()} className="btn btn-success">
                                        Thanh toán
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
