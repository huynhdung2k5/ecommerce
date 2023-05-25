import React from "react";
import { Link } from "react-router-dom";
export default function ChangePassword() {
    return (
        <>
            {/**breadcrumbs  */}
            {/** end breadcrumbs  */}

            <div className="container col-md-8 d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="form-group">
                        <label for="current-password" style={{ fontWeight: 600, color: "#333333" }}>
                            Mật khẩu hiện tại
                        </label>
                        <input
                            type="password"
                            className="form-control border"
                            id="current-password"
                            placeholder="Nhập mật khẩu hiện tại"
                        />
                        <p style={{ float : 'right',fontWtyle: "normal",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    color: "#00BBA6",
                                    cursor: "pointer"
                                    }}><b>Quên mật khẩu?</b></p>
                    </div>

                    <div className="form-group">
                        <label for="new-password" style={{ fontWeight: 600, color: "#333333" }}>
                            Mật khẩu mới
                        </label>
                        <input
                            type="password"
                            className="form-control border"
                            id="new-password"
                            placeholder="Nhập mật khẩu mới"
                        />
                    </div>

                    <div className="form-group">
                        <label for="confirm-password" style={{ fontWeight: 600, color: "#333333" }}>
                            Xác nhận mật khẩu
                        </label>
                        <input
                            type="password"
                            className="form-control border"
                            id="confirm-password"
                            placeholder="Xác nhận mật khẩu"
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="btn btn-success col-md-4"
                            style={{ backgroundColor: "#00BBA6", color: "#ffffff" }}
                        >
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
