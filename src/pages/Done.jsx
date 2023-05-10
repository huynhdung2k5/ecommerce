import Cart1 from "../assets/img/cart1.png";
import Pay1 from "../assets/img/pay1.png";
import Done1 from "../assets/img/done1.png";
import Pay2 from "../assets/img/pay2.png";
import Done2 from "../assets/img/done2.png";
import Done from "../assets/img/done.png";
import Product1 from "../assets/img/product/pr1.png";
import { useNavigate } from "react-router-dom";

const Dones = () => {
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
              <img src={Done2} alt="" />
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
            <div className="box-content text-center">
                <img src={Done} alt="" className="my-2" />
                <h6>Đặt hàng thành công </h6>
                Cảm ơn quý khách đã thuê đồ tại Beauty Outfits
                <div className="d-flex justify-content-center">
                    <div className="bt-main mx-2 my-2" onClick={() => navigate('/')}>
                    <b>quay về trang chủ</b>
                    </div>
                    <div className="bt-main mx-2 my-2"><b>xem Đơn hàng</b></div>
                </div>
        </div>
        </div>
    )
}

export default Dones;