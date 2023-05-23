import Banner from "../assets/img/slider/slide_4.png";
import Star from "../assets/img/star.png";
import StarBlack from "../assets/img/star-black.png";
import { Link } from "react-router-dom";
import SpanNew from "../assets/img/cart/span-new.png";

// rating
import { Rating } from "react-simple-star-rating";

import { dataProduct } from "../data/product";

const Product = () => {
    const handleDetail = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
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
                                    <li>Tất Cả Trang Phục</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*breadcrumbs area end*/}
                {/*pos home section*/}
                <div className=" pos_home_section shop_section shop_fullwidth">
                    <div className="row">
                        <div className="col-9" style={{ margin: "0 auto" }}>
                            <div className="single_slider">
                                <div className="slider_content">
                                    <div className="slider_content_inner" style={{ textAlign: "center" }}>
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
                                            <select
                                                className="select-default"
                                                name="orderby"
                                                id="short"
                                                style={{
                                                    backgroundColor: "#ffffff",
                                                    border: "1px solid #DDDDDD",
                                                }}
                                            >
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
                                        <select
                                            name="orderby"
                                            id="short"
                                            style={{ backgroundColor: "#ffffff", border: "1px solid #DDDDDD" }}
                                        >
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
                            <div className="tab-pane fade show active" id="large" role="tabpanel">
                                <div className="row">
                                    {dataProduct?.map((item, idx) => (
                                        <div key={idx} className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link to={`/detail-product/${item.id}`} onClick={handleDetail}>
                                                        <img src={dataProduct[idx].img} alt="" />
                                                    </Link>
                                                    <div className="img_icone">
                                                        <img src={SpanNew} alt="" />
                                                    </div>
                                                    <div className="product_action">
                                                        <Link to={`/detail-product/${item.id}`} onClick={handleDetail}>
                                                            <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product_content pt-2">
                                                    <h3 className="product_title">
                                                        <a href="">{dataProduct[idx].name}</a>
                                                    </h3>
                                                    <p
                                                        className="old-price"
                                                        style={{ textDecoration: "line-through", display: "inline" }}
                                                    >
                                                        {dataProduct[idx].oldPrice + " - 50$"}
                                                    </p>
                                                    <br />
                                                    <span className="" style={{ fontSize: 18, fontWeight: 700 }}>
                                                        {dataProduct[idx].price}
                                                    </span>

                                                    <div className="d-flex" style={{ gap: 10 }}>
                                                        <Rating
                                                            size={15}
                                                            initialValue={4}
                                                            fillColor="#00BBA6"
                                                            className="p-0 m-0"
                                                        />
                                                        <span>Đã thuê: 76</span>
                                                    </div>
                                                </div>
                                                <div className="product_info">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title=" Thêm vào danh sách yêu thích ">
                                                                Thêm vào danh sách yêu thích
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*shop tab product end*/}
                    {/*pagination style start*/}
                    <div
                        className="pagination_style shop_page"
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <div className="page_number">
                            <span>Pages: </span>
                            <ul>
                                <li>«</li>
                                <li className="current_number">1</li>
                                <li>
                                    <a className="p-3" href="#">
                                        2
                                    </a>
                                    <a className="p-3" href="#">
                                        3
                                    </a>
                                    <a className="p-3" href="#">
                                        4
                                    </a>
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
