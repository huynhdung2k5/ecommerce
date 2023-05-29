import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { dataProduct } from "../data/product";
import { Link } from "react-router-dom";
import Star from "../assets/img/star.png";
import StarBlack from "../assets/img/star-black.png";
// rating
import { Rating } from "react-simple-star-rating";

import SpanNew from "../assets/img/cart/span-new.png";
import Slider from "react-slick";

const DetailProduct = () => {
    const [product, setProduct] = useState({});

    const { id } = useParams();
    const sliderRef = useRef(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
    };

    useEffect(() => {
        if (id) {
            const res = dataProduct.find((item) => item.id == id);

            if (res) {
                setProduct(res);
            }
        }

        window.scrollTo({
            top: 0,
        });
    }, [id]);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

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
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li style={{ color: "#333333" }}>
                                        <i className="fa fa-angle-right" />
                                    </li>
                                    <li>
                                        <Link to="/product">Trang phục</Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-angle-right" />
                                    </li>
                                    <li>{product.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*breadcrumbs area end*/}
                {/*product wrapper start*/}
                <div className="product_details">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="product_tab fix">
                                <div className="product_tab_button">
                                    <ul className="nav" role="tablist">
                                        <li>
                                            <a
                                                className="active"
                                                data-toggle="tab"
                                                href="#p_tab1"
                                                role="tab"
                                                aria-controls="p_tab1"
                                                aria-selected="false"
                                            >
                                                <img src={product.img} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                data-toggle="tab"
                                                href="#p_tab2"
                                                role="tab"
                                                aria-controls="p_tab2"
                                                aria-selected="false"
                                            >
                                                <img src={product.img} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                data-toggle="tab"
                                                href="#p_tab3"
                                                role="tab"
                                                aria-controls="p_tab3"
                                                aria-selected="false"
                                            >
                                                <img src={product.img} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content produc_tab_c">
                                    <div className="tab-pane fade show active" id="p_tab1" role="tabpanel">
                                        <div className="modal_img">
                                            <a href="#">
                                                <img src={product.img} alt="" />
                                            </a>
                                            <div className="img_icone">
                                                <img src={product.img} alt="" />
                                            </div>
                                            <div className="view_img">
                                      
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="p_tab2" role="tabpanel">
                                        <div className="modal_img">
                                            <a href="#">
                                                <img src={product.img} alt="" />
                                            </a>
                                            <div className="img_icone">
                                                <img src={product.img} alt="" />
                                            </div>
                                            <div className="view_img">
                                                {/* <a
                          className="large_view"
                          href={product.img}
                        >
                          <i className="fa fa-search-plus" />
                        </a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="p_tab3" role="tabpanel">
                                        <div className="modal_img">
                                            <a href="#">
                                                <img src={product.img} alt="" />
                                            </a>
                                            <div className="img_icone">
                                                <img src={product.status} alt="" />
                                            </div>
                                            <div className="view_img">
                                                {/* <a
                          className="large_view"
                          href={product.listImg[1]}
                        >
                          {" "}
                          <i className="fa fa-search-plus" />
                        </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="product_d_right">
                                <h1>{product.name}</h1>
                                <div className="product_ratting mb-10">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                        </li>
                                        <li className="ml-3">
                                            <a className="star_total_text" href="#">
                                                Còn lại: 29 | Đã thuê: 76{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content_price mb-15">
                                    <span>{product.price}</span>
                                    <span className="old-price">{product.oldPrice}</span>
                                    <span style={{ fontWeight: 500, fontSize: 18 }}>- 50%</span>
                                </div>
                                <div className="box_quantity mb-20">
                                    <form action="#">
                                        <label>Số lượng</label>
                                        <input min={0} max={100} defaultValue={1} type="number" />
                                    </form>

                                    <a href="#" title="add to wishlist">
                                        <i className="fa fa-heart" aria-hidden="true" />
                                    </a>
                                </div>
                                <div className="product_d_size mb-20">
                                    <label htmlFor="group_1">size</label>
                                    <select className="detail_prod_size" name="size" id="group_1">
                                        <option value={1}>S</option>
                                        <option value={2}>M</option>
                                        <option value={3}>L</option>
                                    </select>
                                </div>
                                <div className="sidebar_widget color">
                                    <h2>Choose Color</h2>
                                    <div className="widget_color">
                                        <ul>
                                            <li>
                                                <a href="#" />
                                            </li>
                                            <li>
                                                <a href="#" />
                                            </li>
                                            <li>
                                                {" "}
                                                <a href="#" />
                                            </li>
                                            <li>
                                                <a href="#" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_desc">
                                    <p>
                                        Áo dài trắng chất vải lụa tằm may dáng áo dài truyền thống 4 tà đẹp. Thiết kế
                                        may sẵn 2 tà rộng với 1 tà trước và 1 tà sau dày dặn không lo bị xuyên thấu khi
                                        mặc, kiểu thiết kế cổ cao 2cm ôm eo tạo dáng thanh lịch, hiện đại, thướt tha.
                                    </p>
                                </div>
                                <div className="list-button">
                                    <button type="submit" className="main">
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>

                                <div className="wishlist-share">
                                    <h4>Chia sẻ:</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-rss" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-vimeo" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-tumblr" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-pinterest" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_d_info">
                <div className="row">
                    <div className="col-12">
                        <div className="product_d_inner">
                            <div className="product_info_button">
                                <ul className="nav" role="tablist">
                                    <li>
                                        <a
                                            className="active"
                                            data-toggle="tab"
                                            href="#info"
                                            role="tab"
                                            aria-controls="info"
                                            aria-selected="false"
                                        >
                                            mô tả
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-toggle="tab"
                                            href="#sheet"
                                            role="tab"
                                            aria-controls="sheet"
                                            aria-selected="false"
                                        >
                                            chi tiết
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-toggle="tab"
                                            href="#reviews"
                                            role="tab"
                                            aria-controls="reviews"
                                            aria-selected="false"
                                        >
                                            đánh giá
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="info" role="tabpanel">
                                    <div className="product_info_content">
                                        <p>
                                            - Áo dài trắng 4 tà may sẵn bởi vải lụa chiffon màu trắng. - Vải chiffon là
                                            loại vải mỏng nhẹ, thoáng mát, co giãn tốt và rất thoáng mát khi mặc. -
                                            Thiết kế may sẵn 4 tà rộng với 2 tà trước và 2 tà sau dày dặn không lo bị
                                            xuyên thấu khi mặc, kiểu thiết kế cổ cao 2cm ôm eo tạo dáng thanh lịch, hiện
                                            đại, thướt tha.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sheet" role="tabpanel">
                                    <div className="product_d_table">
                                        <form action="#">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="first_child">Xuất xứ</td>
                                                        <td>Việt Nam</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="first_child">Thương hiệu</td>
                                                        <td>UME</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="first_child">Chất liệu</td>
                                                        <td>Vải lụa</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                    <div className="product_info_content">
                                        <p>
                                            Áo dài trắng chất vải lụa tằm may dáng áo dài truyền thống 4 tà đẹp. Thiết
                                            kế may sẵn 2 tà rộng với 1 tà trước và 1 tà sau dày dặn không lo bị xuyên
                                            thấu khi mặc, kiểu thiết kế cổ cao 2cm ôm eo tạo dáng thanh lịch, hiện đại,
                                            thướt tha. Thiết kế may sẵn 4 tà rộng với 2 tà trước và 2 tà sau dày dặn
                                            không lo bị xuyên thấu khi mặc, kiểu thiết kế cổ cao 2cm ôm eo tạo dáng
                                            thanh lịch, hiện đại, thướt tha.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <div className="product_info_inner">
                                        <div className=" mb-10">
                                            <Rating
                                                size={15}
                                                initialValue={4}
                                                fillColor="#00BBA6"
                                                className="p-0 m-0"
                                            />
                                            <br />
                                            <p style={{ fontWeight: 700, fontSize: 15 }}>Hàng chuẩn mô tả</p>
                                            <p style={{ fontWeight: 500, fontSize: 15 }}>09/07/2018</p>
                                            <p>
                                                Áo đẹp và chất lượng lắm bà con ơi! Mình sẽ ủng hộ shop này dài dài.
                                                Thuê trúng đợt shop ưu đãi giảm giá, vải chất lượng đã vậy còn được giảm
                                                giá nữa chứ, thích quá thích. Không phải tự dưng mà tuy khen shop này
                                                đâu nhé. Đồ gì đâu mà vừa chất lượng lại vừa có giá vô cùng rẻ nữa chứ.
                                                Lần đầu tiên thuê đồ online nên là hơi lo lo, cứ sợ bị lừa. Nhưng đỡ cái
                                                là shop này hỗ trợ cho mình rất tận tình luôn nên cũng yên tâm được phần
                                                nào.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product_review_form">
                                        <h2>THÊM ĐÁNH GIÁ </h2>
                                        <div className="d-flex align-items-center" style={{ gap: 10 }}>
                                            <p style={{ marginBottom: 0, fontWeight: 500, fontSize: 16 }}>
                                                Đánh giá sản phẩm
                                            </p>
                                            <Rating
                                                size={25}
                                                initialValue={0}
                                                fillColor="#00BBA6"
                                                className="p-0 m-0"
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="review_comment"
                                                    style={{ fontWeight: 500, fontSize: 16 }}
                                                >
                                                    Tiêu đề đánh giá
                                                </label>
                                                <textarea
                                                    placeholder="Nhập tiêu đề nhận xét của bạn tại đây (tối đa 50 ký tự)"
                                                    style={{ height: 50 }}
                                                    name="comment"
                                                    id="review_comment"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="review_comment"
                                                    style={{ fontWeight: 500, fontSize: 16 }}
                                                >
                                                    Viết đánh giá của bạn
                                                </label>
                                                <textarea
                                                    placeholder="Viết đánh giá của bạn tại đây. Nội dung đánh giá phải ít nhất 20 ký tự."
                                                    style={{ height: 69 }}
                                                    name="comment"
                                                    id="review_comment"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-success btn_rating"
                                            style={{ backgroundColor: "#009483", marginTop: 5 }}
                                        >
                                            Gửi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="new_product_area product_page">
                <div className="row">
                    <div className="col-12">
                    <div className="block_title d-flex justify-content-between align-items-center">
                                <h3>Sản phẩm tương tự</h3>
                                <div className="d-flex mb-3" style={{ textAlign: "center", gap: 8 }}>
                                    <button
                                        className="btn btn-sm"
                                        onClick={previous}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "#CCCCCC",
                                            color: "#FFFFFF",
                                            padding: "0px 10px",
                                            fontSize: 10,
                                            height: 22,
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <i class="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm"
                                        onClick={next}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "#CCCCCC",
                                            color: "#FFFFFF",
                                            padding: "0px 10px",
                                            fontSize: 10,
                                            height: 22,
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
                <Slider ref={sliderRef} {...settings}>
                        {dataProduct.map((product, idx) => (
                            <div key={idx} className="col-12">
                                <div key={idx} className="single_product">
                                    <div className="product_thumb">
                                        <Link to={`/detail-product/${product.id}`}>
                                            <img src={product.img} alt="" />
                                        </Link>
                                        <div className="img_icone">
                                            <img src={SpanNew} alt="" />
                                        </div>
                                        <div className="product_action">
                                            <Link to={`/detail-product/${product.id}`}>
                                                <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product_content pt-2">
                                        <h3 className="product_title">
                                            <a href="">{product.name}</a>
                                        </h3>
                                        <p
                                            className="old-price"
                                            style={{ textDecoration: "line-through", display: "inline" }}
                                        >
                                            {product.oldPrice}
                                        </p>
                                        <p
                                                style={{
                                                    display: "inline",
                                                    marginBottom: 0,
                                                    fontWeight: 400,
                                                    fontSize: 14,
                                                }}
                                            >
                                                - 50%
                                            </p>
                                        <br />
                                        <span className="" style={{ fontSize: 18, fontWeight: 700 }}>
                                            {product.price}
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
                    </Slider>
            </div>
        </>
    );
};

export default DetailProduct;
