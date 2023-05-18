import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dataProduct } from "../data/product";
import { Link } from "react-router-dom";
import Star from "../assets/img/star.png";
import StarBlack from "../assets/img/star-black.png";

const DetailProduct = () => {
    const [product, setProduct] = useState({});

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const res = dataProduct.find((item) => item.id == id);

            if (res) {
                setProduct(res);
            }
        }
    }, [id]);

    return (
        <>
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
                                    <li>Trang phục</li>
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
                                                {/* <a
                          className="large_view"
                          href={product.img}
                        >
                          <i className="fa fa-search-plus" />
                        </a> */}
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
                                        <li>
                                            <a href="#">Còn lại: 29 | Đã thuê: 76 </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content_price mb-15">
                                    <span>{product.price}</span>
                                    <span className="old-price">{product.oldPrice}</span>
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
                                    <select name="size" id="group_1" style={{ width: "fit-content" }}>
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati modi culpa
                                        voluptates illo, quos magni totam inventore delectus perspiciatis
                                        necessitatibus, iure rerum! Deleniti nobis voluptatibus minus, iusto ullam quae
                                        esse..
                                    </p>
                                </div>
                                <div className="list-button">
                                    <button type="submit" className="main">
                                        Thêm vào giỏ hàng
                                    </button>
                                    <button className="item" type="submit">
                                        Thuê Ngay
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
                                                        <td className="first_child">Compositions</td>
                                                        <td>Polyester</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="first_child">Styles</td>
                                                        <td>Girly</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="first_child">Properties</td>
                                                        <td>Short Dress</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                    <div className="product_info_content">
                                        <p>
                                            Fashion has been creating well-designed collections since 2010. The brand
                                            offers feminine designs delivering stylish separates and statement dresses
                                            which have since evolved into a full ready-to-wear collection in which every
                                            item is a vital part of a woman's wardrobe. The result? Cool, easy, chic
                                            looks with youthful elegance and unmistakable signature style. All the
                                            beautiful pieces are made in Italy and manufactured with the greatest
                                            attention. Now Fashion extends to a range of accessories including shoes,
                                            hats, belts and more!
                                        </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <div className="product_info_content">
                                        <p>
                                            Fashion has been creating well-designed collections since 2010. The brand
                                            offers feminine designs delivering stylish separates and statement dresses
                                            which have since evolved into a full ready-to-wear collection in which every
                                            item is a vital part of a woman's wardrobe. The result? Cool, easy, chic
                                            looks with youthful elegance and unmistakable signature style. All the
                                            beautiful pieces are made in Italy and manufactured with the greatest
                                            attention. Now Fashion extends to a range of accessories including shoes,
                                            hats, belts and more!
                                        </p>
                                    </div>
                                    <div className="product_info_inner">
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
                                            </ul>
                                            <strong>Posthemes</strong>
                                            <p>09/07/2018</p>
                                        </div>
                                        <div className="product_demo">
                                            <strong>demo</strong>
                                            <p>That's OK!</p>
                                        </div>
                                    </div>
                                    <div className="product_review_form">
                                        <form action="#">
                                            <h2>Add a review </h2>
                                            <p>Your email address will not be published. Required fields are marked </p>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="review_comment">Your review </label>
                                                    <textarea name="comment" id="review_comment" defaultValue={""} />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <label htmlFor="author">Name</label>
                                                    <input id="author" type="text" />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <label htmlFor="email">Email </label>
                                                    <input id="email" type="text" />
                                                </div>
                                            </div>
                                            <button type="submit">Submit</button>
                                        </form>
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
                        <div className="block_title">
                            <h3> sản phẩm tương tự</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {dataProduct?.map((item, idx) => (
                        <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
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
                                <div className="product_content" style={{ textAlign: "left" }}>
                                    <h3 className="product_title">
                                        <Link to={"/"}>{item.name}</Link>
                                    </h3>
                                    <span className="product_price" style={{ fontSize: "14px", fontWeight: "lighter" }}>
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
                                    <p style={{ display: "inline" }}>Đã thuê: 76</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DetailProduct;
