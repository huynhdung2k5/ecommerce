import Product1 from "../../assets/img/product/pr1.png";
import {dataProduct} from '../../data/product';

export default function Accepts() {
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
                    <span>
                        <i style={{ color: "#757575" }} className="fa-solid fa-spinner"></i>
                    </span>
                </div>
                <div className="text-successful">
                    <p className="text" style={{ color: "#757575" }}>
                        Đang xử lý
                    </p>
                </div>
            </div>

            <div className="container-product">
                <div className="content">
                    {Array.from({length: 2}).map((_,idx)=> (
                         <div key={idx} className="product-item" style={{ padding: 10, borderBottom: "1px solid #DDDDDD" }}>
                         <div className="product-detail">
                             <div className="product-left">
                                 <div className="product-img">
                                     <img src={dataProduct[idx].img} alt="product img1" />
                                 </div>
                                 <div className="info-product">
                                     <div className="text-title">
                                         <p className="prod_name">{dataProduct[idx].name}</p>
                                     </div>
                                     <div className="text-type-size prod_desc">
                                         <p>Phân loại: Trắng, Size M</p>
                                     </div>
                                     <div className="text-number-product prod_desc">
                                         <p>Số lượng: 1</p>
                                     </div>
                                 </div>
                             </div>

                             <div className="product-right product-price d-flex col-6">
                                 <div className="old_price">
                                     <p>{dataProduct[idx].oldPrice}</p>
                                 </div>
                                 <div className="price">
                                     <p>{dataProduct[idx].price}</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                    ))}
                    

                    <div className="order-options">
                        <div className="common-option">
                            <div className="order-total d-flex justify-content-end align-item-center">
                                <div className="order-total-title">
                                    <label>Tổng tiền:</label>
                                </div>
                                <div className="order-total-price">
                                    <span className="vlaue-summary">238.000đ</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
