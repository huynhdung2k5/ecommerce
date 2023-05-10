import Cart1 from "../assets/img/cart1.png";
import Pay1 from "../assets/img/pay1.png";
import Done1 from "../assets/img/done1.png";
import Pay2 from "../assets/img/pay2.png";
import Done2 from "../assets/img/done2.png";
import Product1 from "../assets/img/product/pr1.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate('/payment',{replace:true})
  }

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
              <img src={Pay1} alt="" />
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
        <form action="#">
          <div className="row">
            <div className="col-12">
              <div className="table_desc wishlist">
                <div className="cart_page table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product_remove" style={{ width: '600px' }}>
                          <input type="checkbox" className="item-checkbox" />{" "}
                          Sản phẩm
                        </th>
                        <th className="product_name">Đơn giá</th>
                        <th className="product-price">Số lượng</th>
                        <th className="product_quantity">Thành tiền</th>
                        <th className="product_total">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product_remove" style={{ width: '600px' }}>
                                                  <div className="info-card" style={{ width: "70%" , alignItems : 'center' }}>
                                                  <input type="checkbox" className="item-checkbox" />
                            <img src={Product1} className="img-cart" alt="" />
                            <div className="title-info" style={{ width : '300px' }}>
                              <h4>Đầm Trắng - Mẫu 01</h4>
                              <p>
                                <del>238.000đ</del>{" "}
                                <span
                                  style={{ color: "red", marginLeft: "10px" }}
                                >
                                  50%
                                </span>
                              </p>
                              <p
                                style={{ fontSize: "16px", fontWeight: "bold" }}
                              >
                                119.000đ
                              </p>
                              <p>Còn lại: 29</p>
                            </div>
                          </div>
                        </td>
                        <td className="product_thumb">
                        <del>238.000đ</del>  <b style={{ fontSize : '18px' }}>119.000đ</b>
                        </td>
                        <td className="product_name">
                        <div className="quantity-cart">
                            <div className="text-bold divide">
                                -
                            </div>
                            <input type="text" value={1} className="quantity-input" />
                            <div className="text-bold divide">
                                +
                            </div>
                          </div>
                        </td>
                        <td className="product-price">238.000đ</td>
                        <td className="product_total">
                          <a href="#">Xóa</a>
                        </td>
                                          </tr>
                                          <tr>
                        <td className="product_remove" style={{ width: '600px' }}>
                                                  <div className="info-card" style={{ width: "70%" , alignItems : 'center' }}>
                                                  <input type="checkbox" className="item-checkbox" />
                            <img src={Product1} className="img-cart" alt="" />
                            <div className="title-info" style={{ width : '300px' }}>
                              <h4>Đầm Trắng - Mẫu 01</h4>
                              <p>
                                <del>238.000đ</del>{" "}
                                <span
                                  style={{ color: "red", marginLeft: "10px" }}
                                >
                                  50%
                                </span>
                              </p>
                              <p
                                style={{ fontSize: "16px", fontWeight: "bold" }}
                              >
                                119.000đ
                              </p>
                              <p>Còn lại: 29</p>
                            </div>
                          </div>
                        </td>
                        <td className="product_thumb">
                        <del>238.000đ</del>  <b style={{ fontSize : '18px' }}>119.000đ</b>
                        </td>
                        <td className="product_name">
                        <div className="quantity-cart">
                            <div className="text-bold divide">
                                -
                            </div>
                            <input type="text" value={1} className="quantity-input" />
                            <div className="text-bold divide">
                                +
                            </div>
                          </div>
                        </td>
                        <td className="product-price">238.000đ</td>
                        <td className="product_total">
                          <a href="#">Xóa</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row sticker-nav">
                  <div className="check-all">
                      <input type="checkbox" className="item-checkbox" />
                      <b>Chọn tất cả (3)</b>
                  </div>
                  <div className="delete-all">
                  <b>Xóa Tất Cả</b>
                  </div>
                  <div className="total-de">
                  <b>Tổng thanh toán (2 sản phẩm)</b>: <span style={{ fontWeight :'bold', color :'red' , fontSize :'18px' }}>357.000đ</span>
                  </div>
                  <div className="bt-main" onClick={handlePayment}>
                  Đặt hàng
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
