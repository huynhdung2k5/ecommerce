import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-login">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <div className="card-log">
                        <h5>Đăng ký</h5>
                        <p>
                            Bạn đã có tài khoản?
                            <Link to={"/login"}>
                                <span style={{ color: "#00BBA6" }}>Đăng nhập </span>
                            </Link>
                        </p>

                        <div className="login_form_container">
                            <div className="account_login_form">
                                <form action="#">
                                    <br />
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>
                                            <b>
                                                Số điện thoại <aside>*</aside>
                                            </b>
                                        </label>
                                        <input type="text" name="first-name" placeholder="Nhập số điện thoại" />
                                    </div>
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>
                                            <b>
                                                Mật khẩu <aside>*</aside>
                                            </b>
                                        </label>
                                        <input type="password" name="first-name" placeholder="Nhập mật khẩu" />
                                        <p style={{ float: "right", color: "#00BBA6", cursor: "pointer" }}>
                                            Gửi mã OTP
                                        </p>
                                    </div>

                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>
                                            <b>
                                                Mã xác thực OTP <aside>*</aside>
                                            </b>
                                        </label>
                                        <input type="text" name="first-name" placeholder="Nhập mã OTP..." />
                                    </div>

                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>
                                            <b>
                                                Nhập mật khẩu <aside>*</aside>
                                            </b>
                                        </label>
                                        <input type="text" name="first-name" placeholder="Nhập mã PIN..." />
                                    </div>

                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>
                                            <b>
                                                Nhập lại mật khẩu<aside>*</aside>
                                            </b>
                                        </label>
                                        <input type="text" name="first-name" placeholder="Nhập lại mã PIN..." />
                                    </div>
                                    <div className="bt-main" style={{ backgroundColor: "#CACACA" }}>
                                        <b>Đăng nhập</b>
                                    </div>
                                </form>
                            </div>

                            <div className="text-center mt-3">
                                Bằng việc chọn Đăng Nhập, bạn xác nhận đã đọc &<br />
                                đồng ý với các
                                <span style={{ color: "#00BBA6" }}>Chính Sách Bảo Mật & Chia Sẻ Thông Tin</span>
                                <br />
                                <span style={{ color: "red" }}>của Beauty Outfits.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
