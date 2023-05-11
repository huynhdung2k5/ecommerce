import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

export default function UserLayout({ children }) {
    // const items = ["Thông tin tài khoản", "Quản lí đơn hàng", "Địa chỉ", "Sản phẩm yêu thích", "Đổi mật khẩu"];
    const items = [
        {
            name: "Thông tin tài khoản",
            link: "/profile",
        },
        {
            name: "Quản lí đơn hàng",
            link: "/order",
        },
        {
            name: "Địa chỉ",
            link: "/address",
        },
        {
            name: "Sản phẩm yêu thích",
            link: "/favorite",
        },
        {
            name: "Đổi mật khẩu",
            link: "/change-password",
        },
    ];
    const [selected, setSelected] = useState(0);
    const [title, setTitle] = useState(items[0].name);
    const navigate = useNavigate();

    const handleClick = (index) => {
        setSelected(index);
        setTitle(items[index].name);
    };
    return (
        <>
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
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ padding: "20px " }}>
                <div className="col-md-4">
                    <ul className="list-group">
                        {items.map((item, index) => (
                            <Link style={{ color: selected === index ? "white" : "black" }} to={`/user${item.link}`}>
                                <li
                                    className={"list-group-item"}
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    style={{
                                        backgroundColor: index === selected ? "#00BBA6" : "",
                                    }}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    );
}
