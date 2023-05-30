import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth/useAuthContext";

export default function UserLayout({ children }) {
    const items = [
        {
            name: "Thông tin tài khoản",
            link: "profile",
        },
        {
            name: "Quản lí đơn hàng",
            link: "order",
        },
        {
            name: "Địa chỉ",
            link: "address",
        },
        {
            name: "Sản phẩm yêu thích",
            link: "favorite",
        },
        {
            name: "Đổi mật khẩu",
            link: "change-password",
        },
    ];
    const [selected, setSelected] = useState(0);
    const [title, setTitle] = useState(items[0].name);

    const location = useLocation();
    const currentPath = location.pathname;
    const currentLink = currentPath.split("/")[2];

    const navigate = useNavigate();

    useEffect(() => {
        const newItem = items.find((item) => item.link === currentLink);
        if (newItem) {
            setTitle(newItem.name);
            setSelected(items.indexOf(newItem));
        } else {
            setTitle("Quản lí đơn hàng");
            setSelected(0);
        }

        if(!localStorage.getItem('accessToken')){
            navigate("/login")
        }
    }, [currentPath]);


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
                                <li>{items[selected].name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ padding: "20px " }}>
                <div className="col-md-3">
                    <ul className="list-group" style={{ gap: 4 }}>
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                style={{ color: selected === index ? "white" : "black" }}
                                to={`/user/${item.link}`}
                            >
                                <li
                                    className={"list-group-item"}
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    style={{
                                        border: "none",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: 16,
                                        backgroundColor: index === selected ? "#00BBA6" : "#F7F7F7",
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
