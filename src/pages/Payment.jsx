import Cart1 from "../assets/img/cart1.png";
import Pay1 from "../assets/img/pay1.png";
import Done1 from "../assets/img/done1.png";
import Pay2 from "../assets/img/pay2.png";
import Done2 from "../assets/img/done2.png";
import Product1 from "../assets/img/product/pr1.png";
import { useNavigate } from "react-router-dom";

const Payment = () => {

    const navigate = useNavigate();

  return (
    <div className="">
      <div className="breadcrumbs_area">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_content">
              <ul>
                <li>
                  <a href="index.html">Trang chủ</a>
                </li>
                <li>
                  <i className="fa fa-angle-right" />
                </li>
                <li>Giỏ Hàng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" pos_home_section shop_section shop_fullwidth"
        style={{ padding: "30px 100px" }}
      >
        <div className="time-line">
          <ul className="step">
            <li className="step-item">
              <img src={Cart1} alt="" />
              <div className="">
                <b>GIỎ HÀNG</b>
              </div>
            </li>
            <li className="step-item">
              <div className="line"></div>
            </li>
            <li className="step-item">
              <img src={Pay2} alt="" />
              <div className="">
                <b>THANH TOÁN</b>
              </div>
            </li>
            <li className="step-item">
              <div className="line"></div>
            </li>
            <li className="step-item">
              <img src={Pay1} alt="" />
              <div className="">
                <b>HOÀN TẤT</b>
              </div>
            </li>
            <li className="step-item">
              <div className="">
                <b>Tiếp tục mua sắm</b>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="shopping_cart_area">
        <div className="row mb-2">
          <div className="col-7">
            <div className="box-content" style={{ height : '100%' }}>
              <div className="address">
                <b>Địa Chỉ Nhận Hàng</b>
                <p>Thay đổi</p>
              </div>
              <div className="data-address">
                <b>Trần Thị Minh Uyên </b> | <b>0967177830</b>
                <p>
                  Địa chỉ: K02/12 Phan Hành Sơn, Phường Mỹ An, Quận Ngũ Hành
                  Sơn, Đà Nẵng
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="box-content">
              <div className="address">
                <b>Phương Thức thanh toán</b>
              </div>
              <div className="data-address">
                <div className="item-data">
                  <input type="checkbox" className="item-checkbox" />
                  <div>Thanh toán khi nhận hàng</div>
                </div>
                <div className="item-data">
                  <input type="checkbox" className="item-checkbox" />
                  <div>Chuyển khoản</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-7">
            <div className="table_desc wishlist" style={{ marginBottom : '0px' }}>
              <div className="cart_page table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th className="product_remove" style={{ width: "400px" }}>
                        Sản phẩm
                      </th>
                      <th className="product-price">Số lượng</th>
                      <th className="product_quantity">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product_remove" style={{ width: "400px" }}>
                        <div
                          className="info-card"
                          style={{ width: "70%", alignItems: "center" }}
                        >
                          <img src={Product1} className="img-cart" style={{ height :'100px' }} alt="" />
                          <div
                            className="title-info"
                            style={{ width: "300px" }}
                          >
                            <h4>Đầm Trắng - Mẫu 01</h4>
                            <p>
                              <del>238.000đ</del>{" "}
                              <span
                                style={{ color: "red", marginLeft: "10px" }}
                              >
                                50%
                              </span>
                            </p>
                            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                              119.000đ
                            </p>
                            <p>Còn lại: 29</p>
                          </div>
                        </div>
                      </td>
                   
                      <td className="product_name">
                        <b>2</b>
                      </td>
                      <td className="product-price">238.000đ</td>
                    </tr>
                    <tr>
                      <td className="product_remove" style={{ width: "400px" }}>
                        <div
                          className="info-card"
                          style={{ width: "70%", alignItems: "center" }}
                        >
                          <img src={Product1} className="img-cart" style={{ height :'100px' }} alt="" />
                          <div
                            className="title-info"
                            style={{ width: "300px" }}
                          >
                            <h4>Đầm Trắng - Mẫu 01</h4>
                            <p>
                              <del>238.000đ</del>{" "}
                              <span
                                style={{ color: "red", marginLeft: "10px" }}
                              >
                                50%
                              </span>
                            </p>
                            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                              119.000đ
                            </p>
                            <p>Còn lại: 29</p>
                          </div>
                        </div>
                      </td>
                      <td className="product_name">
                        <b>1</b>
                      </td>
                      <td className="product-price">238.000đ</td>
                    
                    </tr>
                  </tbody>
                </table>
              </div>
                      </div>
                      <div className="box-content" style={{ marginTop : '9px' }}>
                          <input type="text" placeholder="Ghi chú: " className="text-box" style={{ border : 'none' }}/>
                      </div>
          </div>
          <div className="col-5">
            <div className="box-content">
              <div className="address">
                <b>Mã giảm giá</b>
              </div>
              <div className="data-address input-discount">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="discount"
                />
                <div className="bt-main btn-discount">Áp dụng</div>
              </div>
            </div>
            <div className="box-content mt-3">
              <div className="address">
                <b>Đơn hàng</b>
              </div>
              <div
                className="data-address"
                style={{ borderBottom: "1px solid #dddddd" }}
              >
                <div className="text-line">
                  <p>Tổng tiền hàng:</p>
                  <p>357.000đ</p>
                </div>
                <div className="text-line">
                  <p>Phí vận chuyển:</p>
                  <p>15.000đ</p>
                </div>
                <div className="text-line">
                  <p>Khuyến mãi:</p>
                  <p>-10.000đ</p>
                </div>
              </div>
              <div className="text-line">
                <p>
                  <b>Tổng thanh toán:</b>
                </p>
                <p>
                  <b style={{ color: "red" }}>362.000đ</b>
                </p>
              </div>
              <div className="bt-main text-center" onClick={() => navigate('/done')}>Đặt hàng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
