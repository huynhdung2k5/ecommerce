import React, { useState } from "react";
export default function Profile() {
    return (
        <>
            <div
                className="row col-md-3 d-flex justify-content-center align-items-center "
                style={{ borderRight: "1px solid rgba(0,0,0,0.3)" }}
            >
                <div className="mx-auto my-auto d-flex flex-column">
                    <i className="fa fa-user-circle-o mb-3" style={{ color: "#00BBA6", fontSize: 100 }} />
                    <button type="button" className="btn" style={{ color: "white", backgroundColor: "#00BBA6" }}>
                        Chọn ảnh
                    </button>
                </div>
            </div>
            <div className="col-md-5 ml-4">
                <div>
                    <span style={{ fontSize: 16 }}>Nhập họ và tên</span>
                    <input value="Trần Thị Minh Uyên"></input>
                </div>
                <br />
                <div className="d-flex flex-row" style={{ gap: 4 }}>
                    <div className="col-md-6 pl-0 ">
                        <span style={{ fontSize: 16 }}>Nhập số điện thoại</span>
                        <input value="Trần Thị Minh Uyên"></input>
                        <span style={{ fontSize: 14, color: "#00BBA6" }} className="float-right">
                            thay đổi số điện thoại
                        </span>
                    </div>
                    <div className="col-md-6 pr-0">
                        <span style={{ fontSize: 16 }}>Nhập số điện thoại</span>
                        <input value="Trần Thị Minh Uyên"></input>
                        <span style={{ fontSize: 14, color: "#00BBA6" }} className="float-right">
                            thay đổi số điện thoại
                        </span>
                    </div>
                </div>
                <div>
                    <span style={{ fontSize: 16 }}>Ngày sinh</span>
                    <div className="d-flex" style={{ gap: 10 }}>
                        <select className="form-select col-md-3" aria-label="Default select example">
                            {Array.from({ length: 31 }, (_, index) => (
                                <option>{index + 1}</option>
                            ))}
                        </select>
                        <select className="form-select col-md-3" aria-label="Default select example">
                            {Array.from({ length: 12 }, (_, index) => (
                                <option>{`Tháng ${index + 1}`}</option>
                            ))}
                        </select>
                        <select className="form-select col-md-3" aria-label="Default select example">
                            <option slected>{2001}</option>
                            {Array.from({ length: 100 }, (_, index) => (
                                <option>{1910 + index + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <span style={{ fontSize: 16 }}>Ngày sinh</span>
                    <div className="d-flex" style={{ gap: 20 }}>
                        <div class="form-check">
                            <input
                                style={{ height: 15 }}
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                            />
                            <label class="form-check-label" for="male">
                                Nam
                            </label>
                        </div>

                        <div class="form-check">
                            <input
                                style={{ height: 15 }}
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                            />
                            <label class="form-check-label" for="female">
                                Nữ
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                style={{ height: 15 }}
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                            />
                            <label class="form-check-label" for="female">
                                Khác
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="btn col-md-4"
                            style={{ backgroundColor: "#00BBA6", color: "white" }}
                        >
                            Lưu chỉnh sửa
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
