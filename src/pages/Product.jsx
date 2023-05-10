import Banner from "../assets/img/slider/slide_4.png";
import Star from "../assets/img/star.png";
import StarBlack from "../assets/img/star-black.png";
import { Link } from "react-router-dom";

import { dataProduct } from "../data/product";

const Product = () => {
  return (
    <>
      <div>
        <div className="breadcrumbs_area">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <ul>
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                  </li>
                  <li>shop fullwidth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumbs area end*/}
        {/*pos home section*/}
        <div className=" pos_home_section shop_section shop_fullwidth">
          <div className="row">
            <div className="col-12">
              <div className="single_slider">
                <div className="slider_content">
                  <div
                    className="slider_content_inner"
                    style={{ textAlign: "center" }}
                  >
                    <h1>Beauty Outfits</h1>
                    <p>Thời trang cho mọi người - mặc là đẹp.</p>
                  </div>
                </div>
              </div>
              {/*banner slider start*/}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/*shop toolbar start*/}
              <div className="shop_toolbar mb-35">
                <div className="list_button">
                  <div className="select_option">
                    <form action="#">
                      <label>Giới tính</label>
                      <select name="orderby" id="short">
                        <option selected value={1}>
                          Mặc định
                        </option>
                        <option value={1}>Giá cao đến thấp</option>
                        <option value={1}>Giá thấp đến cao</option>
                        <option value={1}>% Giảm</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="page_amount">
                  <p>
                    <b>102 sản phẩm</b>
                  </p>
                </div>
                <div className="select_option">
                  <form action="#">
                    <label>Sắp xếp theo</label>
                    <select name="orderby" id="short">
                      <option selected value={1}>
                        Mặc định
                      </option>
                      <option value={1}>Nam</option>
                      <option value={1}>Nữ</option>
                    </select>
                  </form>
                </div>
              </div>
              {/*shop toolbar end*/}
            </div>
          </div>
          {/*shop tab product*/}
          <div className="shop_tab_product shop_fullwidth">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="large"
                role="tabpanel"
              >
                <div className="row">
                                  {
                                      dataProduct?.map((item) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                        <div className="single_product">
                                          <div className="product_thumb">
                                            <Link to={`/detail-product/${item.id}`}>
                                              <img src={item.img} alt="" />
                                            </Link>
                                            <div className="img_icone">
                                              <img src={item.status} alt="" />
                                            </div>
                                            <div className="product_action">
                                            <Link to={`/detail-product/${item.id}`}>
                                                {" "}
                                                <i className="fa fa-shopping-cart" />
                                                Thêm vào giỏ hàng
                                                </Link>
                                            </div>
                                          </div>
                                          <div
                                            className="product_content"
                                            style={{ textAlign: "left" }}
                                          >
                                            <h3 className="product_title">
                                                          <Link to={'/'}>{item.name}</Link>
                                            </h3>
                                            <span
                                              className="product_price"
                                              style={{ fontSize: "14px", fontWeight: "lighter" }}
                                            >
                                                          <del>{item.oldPrice}</del>
                                            </span>
                                                      <span className="product_price">{item.price}</span>
                                            <div className="star">
                                              <img src={Star} alt="" />
                                              <img src={Star} alt="" />
                                              <img src={Star} alt="" />
                                              <img src={Star} alt="" />
                                                <img src={StarBlack} alt="" />
                                                                      
                                                                    
                                                                  </div>
                                                                  <p style={{ display : 'inline' }}>Đã thuê: 76</p>
                                          </div>
                                        </div>
                                      </div>
                                      ))
                  }
                </div>
              </div>
            </div>
          </div>
          {/*shop tab product end*/}
          {/*pagination style start*/}
          <div className="pagination_style shop_page" style={{ display: 'flex', justifyContent : 'center' , alignItems : 'center' }}>
          <div className="page_number">
              <span>Pages: </span>
              <ul>
                <li>«</li>
                <li className="current_number">1</li>
                <li>
                  <a className="p-3" href="#">2</a>
                  <a className="p-3" href="#">3</a>
                  <a className="p-3" href="#">4</a>
                </li>
                <li>»</li>
              </ul>
            </div>
          </div>
          {/*pagination style end*/}
        </div>
      </div>
    </>
  );
};

export default Product;
