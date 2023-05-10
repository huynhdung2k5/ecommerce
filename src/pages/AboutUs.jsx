import { Link } from "react-router-dom";
import About1 from "../assets/img/about1.png";
import About2 from "../assets/img/abut2.png";

import Count from "../assets/img/count.png";
import Check from "../assets/img/check.png";
import Return from "../assets/img/return.png";
import Like from "../assets/img/like.png";

const AboutUs = () => {
  return (
    <div>
      <div className="breadcrumbs_area">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_content">
              <ul>
                <li>
                  <Link to={"/"}>Trang chủ</Link>
                </li>
                <li>
                  <i className="fa fa-angle-right" />
                </li>
                <li>Giới thiệu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*breadcrumbs area end*/}
      {/*about section area */}
      <div className="about_section">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="about_thumb">
              <img src={About1} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about_content">
              <h1>
              Trang phục
              </h1>
              <p>
              Beauty Outfits gồm có các trang phục: thiếu nhi, truyền thống (áo dài, hiện đại, áo bà ba nam nữ, áo tứ thân, áo yếm, ... ), nước ngoài (Nhật Bản, Hàn Quốc, Ấn Độ, Trung Quốc, ... ), hóa trang (cổ trang, trang phục Âu Lạc, bộ đội, hải quân, công chúa bạch tuyết, cô bé quàng khăn đỏ, Võ Tắc Thiên, hoàng tử, phù thủy, ông già noel, công chúa tuyết, ... ), trang phục thường ngày (đi biển, đi chơi, ... ) trang phục dự tiệc (quần áo vest nam nữ, váy dạ hội, ... ).
              </p>
              <div className="view__work">
                <a href="#">Mua Ngay </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="about_content">
              <h1>
              phụ kiện
              </h1>
              <p>
              Beauty Oufits giới thiệu tới quý khách gồm có các phụ kiện như sau: tóc giả, cà vạt, nơ, giày dép, túi xách, trâm cài tóc và quạt. Phụ kiện thời trang đa dạng về mặt thiết kế, kiểu dáng, chất liệu nên có thể kết hợp với nhiều kiểu trang phục khác nhau như năng động, lịch sự hay dự tiệc,... Phụ kiện kết hợp với những bộ trang phục phù hợp sẽ đem đến cho các bạn trẻ cảm giác hứng thú và mong muốn lựa chọn được nhiều loại phụ kiện độc đáo.
              </p>
              <div className="view__work">
                <a href="#">Mua Ngay </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about_thumb">
              <img src={About2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*about section end*/}
      {/*counterup area */}
      <div className="counterup_section">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single_counterup">
              <div className="counter_img">
                <img src={Count} alt="" />
              </div>
              <div className="counter_info">
                <h2 className="counter_number">2204</h2>
                <p>Số lượng người mua</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single_counterup count-two">
              <div className="counter_img">
                <img src={Check} alt="" />
              </div>
              <div className="counter_info">
                <h2 className="counter_number">2204</h2>
                <p>Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single_counterup">
              <div className="counter_img">
                <img src={Return} alt="" />
              </div>
              <div className="counter_info">
                <h2 className="counter_number">1%</h2>
                <p>Tỷ lệ hoàn hàng</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single_counterup count-two">
              <div className="counter_img">
                <img src={Like} alt="" />
              </div>
              <div className="counter_info">
                <h2 className="counter_number">2200</h2>
                <p>Đơn giao thành công</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
