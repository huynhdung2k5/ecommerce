import User from "../assets/img/user 1.png";
import Product1 from "../assets/img/product/pr1.png";

const Account = () => {
  return (
    <div>
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
                <li>Thông tin tài khoản</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*breadcrumbs area end*/}
      {/* Start Maincontent  */}
      <section className="main_content_area">
        <div className="account_dashboard">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              {/* Nav tabs */}
              <div className="dashboard_tab_button">
                <ul role="tablist" className="nav flex-column dashboard-list">
                  <li>
                    <a
                      href="#dashboard"
                      data-toggle="tab"
                      className="nav-link active"
                    >
                      Thông tin Tài Khoản
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#orders" data-toggle="tab" className="nav-link">
                      Quản lý đơn hàng
                    </a>
                  </li>
                  <li>
                    <a href="#address" data-toggle="tab" className="nav-link">
                      Địa chỉ
                    </a>
                  </li>
                  <li>
                    <a href="#downloads" data-toggle="tab" className="nav-link">
                      sản phẩm yêu Thích
                    </a>
                  </li>
                  <li>
                    <a
                      href="#change-pass"
                      data-toggle="tab"
                      className="nav-link"
                    >
                      Đổi mật khẩu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9">
              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane fade" id="hi">
                  <h3>Dashboard </h3>
                  <p>
                    From your account dashboard. you can easily check &amp; view
                    your <a href="#">recent orders</a>, manage your{" "}
                    <a href="#">shipping and billing addresses</a> and{" "}
                    <a href="#">Edit your password and account details.</a>
                  </p>
                </div>
                <div className="tab-pane fade" id="orders">
                  <ul
                    role="tablist"
                    className="nav flex-row dashboard-list"
                    style={{ border: "1px solid gray" }}
                  >
                    <li className="active-account">
                      <a href="#" data-toggle="tab" className="nav-link active">
                        Tất cả đơn
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-toggle="tab" className="nav-link">
                        Chờ thanh toán
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tab" className="nav-link">
                        Vận chuyển
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tab" className="nav-link">
                        Đã giao
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tab" className="nav-link">
                        Đã trả hàng
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tab" className="nav-link">
                        Đã hủy
                      </a>
                    </li>
                  </ul>
                  <div className="input-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                      type="text"
                      placeholder="Tìm đơn hàng theo “Mã đơn hàng” hoặc “Tên sản phẩm”"
                    />
                  </div>
                  <div className="box-order">
                    <div className="status-order">
                      <i className="fa-sharp fa-solid fa-truck-fast"></i>
                      <div className="ml-3">
                        <b>Giao hàng và trả hàng thành công</b>
                      </div>
                    </div>

                    <div className="card-order">
                      <div className="info-card">
                        <img src={Product1} alt="" />
                        <div className="title-info">
                          <h4>Đầm Trắng - Mẫu 01</h4>
                          <p>Phân loại: Trắng, Size M</p>
                          <p>Số lượng: 1</p>
                        </div>
                      </div>
                      <div className="money">
                        <span className="old">
                          <del>238.000đ</del>
                        </span>
                        <b>
                          <span>119.000đ</span>
                        </b>
                      </div>
                      <hr />
                    </div>
                    <div className="card-order">
                      <div className="info-card">
                        <img src={Product1} alt="" />
                        <div className="title-info">
                          <h4>Đầm Trắng - Mẫu 01</h4>
                          <p>Phân loại: Trắng, Size M</p>
                          <p>Số lượng: 1</p>
                        </div>
                      </div>
                      <div className="money">
                        <span className="old">
                          <del>238.000đ</del>
                        </span>
                        <b>
                          <span>119.000đ</span>
                        </b>
                      </div>
                      <hr />
                    </div>
                    <hr />
                    <div className="box-total">
                      <div className="data">
                        <p>
                          Tổng tiền: <span className="price">238.000đ</span>
                        </p>
                        <div
                          className="bt-main"
                          style={{ textAlign: "center" }}
                        >
                          Thuê lại
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="downloads">
                                  <div className="box-order">
                                  <div className="card-order wish-list">
                      <div className="info-card" style={ { width : '70%'}}>
                        <img src={Product1} alt="" />
                        <div className="title-info">
                          <h4>Đầm Trắng - Mẫu 01</h4>
                                                  <p><del>238.000đ</del> <span style={{ color : 'red' , marginLeft : '10px' }}>50%</span></p>
                                                  <p style={{ fontSize : '16px' , fontWeight : 'bold' }}>119.000đ</p>
                          <p>Còn lại: 29</p>
                        </div>
                      </div>
                      <div className="action" style={{ float : 'right' }}><b><span style={{ marginLeft: '20px' }}>Xóa</span></b>
                                          
                                          <div className="bt-main">
                                          Thêm vào Giỏ hàng
                                      </div>
                                          </div>
                      <hr /> 
                                      </div>
                                      <div className="card-order wish-list">
                      <div className="info-card" style={ { width : '70%'}}>
                        <img src={Product1} alt="" />
                        <div className="title-info">
                          <h4>Đầm Trắng - Mẫu 01</h4>
                                                  <p><del>238.000đ</del> <span style={{ color : 'red' , marginLeft : '10px' }}>50%</span></p>
                                                  <p style={{ fontSize : '16px' , fontWeight : 'bold' }}>119.000đ</p>
                          <p>Còn lại: 29</p>
                        </div>
                      </div>
                      <div className="action" style={{ float : 'right' }}><b><span style={{ marginLeft: '20px' }}>Xóa</span></b>
                                          
                                          <div className="bt-main">
                                          Thêm vào Giỏ hàng
                                      </div>
                                          </div>
                      <hr /> 
                    </div>
                  </div>
                                  
                                  
                              </div>
                              
                              <div className="tab-pane fade" id="change-pass">
                                  
                              <div className="login">
                        <div className="login_form_container">
                          <div className="account_login_form" style={{ width : '50%', margin : '0 auto' }}>
                            <form action="#">
                              <br />
                              <label><b>Mật khẩu hiện tại</b></label>
                              <input
                                type="password"
                                name="first-name"
                                                  />
                                                  <p style={{ float : 'right' }}><b>Quên mật khẩu?</b></p>
                              
                              <label><b>Mật khẩu mới</b></label>
                              <input
                                type="password"
                                name="first-name"
                              />
                            
                            <label><b>Xác nhận mật khẩu</b></label>
                              <input
                                type="password"
                                name="first-name"
                              />
                            
                                                  <div
                                className="bt-main"
                                style={{ width: "fit-content", margin : '0 auto' }}
                              >
                                Xác nhận
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                              </div>
                <div className="tab-pane" id="address">
                  <div className="input-search text-center">
                    <p style={{ margin: "10px auto" }}>
                      <i className="fa-solid fa-plus"></i>{" "}
                      <span className="premium">Thêm địa chỉ mới</span>
                    </p>
                  </div>
                  <div className="box-address_main">
                                      <div className="box-address">
                                      <div className="info-data">
                      <h6>Trần Thị Minh Uyên</h6>
                      <p>
                        Địa chỉ: K02/12 Phan Hành Sơn, Phường Mỹ An, Quận Ngũ
                        Hành Sơn, Đà Nẵng
                      </p>
                      <p>Điện thoại: 0967177830</p>
                      <div className="btn-outline">Địa chỉ mặc định</div>
                    </div>
                    <div className="action"><b>Chỉnh sửa</b></div>
                                      </div>
                                      <div className="box-address">
                                      <div className="info-data">
                      <h6>Trần Thị Minh Uyên</h6>
                      <p>
                        Địa chỉ: K02/12 Phan Hành Sơn, Phường Mỹ An, Quận Ngũ
                        Hành Sơn, Đà Nẵng
                      </p>
                      <p>Điện thoại: 0967177830</p>
                      <div className="btn-outline">Địa chỉ mặc định</div>
                    </div>
                                          <div className="action"><b><span>Chỉnh sửa</span> <span style={{ marginLeft: '20px' }}>Xóa</span></b>
                                          
                                          <div className="btn-out">
                                      Đặt làm địa chỉ mặc định
                                      </div>
                                          </div>
                                      </div>
                                     
                  </div>
                </div>
                <div className="tab-pane fade  show active" id="dashboard">
                  <div className="row item-main">
                    <div className="col-4 item-user">
                      <label htmlFor="file">
                        <img src={User} alt="" />
                      </label>
                      <input type="file" id="file" hidden />
                      <div className="">
                        <button className="bt-main">Chọn ảnh</button>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="login">
                        <div className="login_form_container">
                          <div className="account_login_form">
                            <form action="#">
                              <br />
                              <label>Nhập họ và tên</label>
                              <input
                                type="text"
                                name="first-name"
                                value={"Trần Thị Minh Uyên"}
                              />
                              <div
                                className="item-main"
                                style={{ justifyContent: "space-between" }}
                              >
                                <div
                                  className="form-groupp"
                                  style={{ marginRight: "0px" }}
                                >
                                  <label>Số điện thoại</label>
                                  <input
                                    type="text"
                                    name="last-name"
                                    value={"0967177830"}
                                  />
                                </div>
                                <div
                                  className="form-groupp"
                                  style={{ marginLeft: "0px" }}
                                >
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    name="last-name"
                                    value={"uyentran99899@gmail.com"}
                                  />
                                </div>
                              </div>
                              <label>Birthdate</label>
                              <input
                                type="date"
                                placeholder="MM/DD/YYYY"
                                defaultValue
                                name="birthday"
                              />

                              <br />
                              <b>
                                <label>Giới tính</label>
                              </b>
                              <div className="input-radio">
                                <span className="custom-radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    name="id_gender"
                                    checked
                                  />{" "}
                                  Nam
                                </span>
                                <span className="custom-radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    name="id_gender"
                                  />{" "}
                                  Nữ
                                </span>
                                <span className="custom-radio">
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    name="id_gender"
                                  />{" "}
                                  Khác
                                </span>
                              </div>
                              <div
                                className="bt-main"
                                style={{ width: "fit-content", float: "right" }}
                              >
                                Lưu chỉnh sửa
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
