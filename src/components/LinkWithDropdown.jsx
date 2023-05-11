import { useState } from "react";
import { Link } from "react-router-dom";

export default function LinkWithDropdown({ to, children }) {
    // const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="dropdown">
            <Link to={to} className="dropdown-toggle" data-toggle="dropdown">
                {children}
            </Link>
            <div className="dropdown-menu">
                <Link to="/user/profile" className="dropdown-item">
                    Thông tin tài khoảng
                </Link>
                <Link to="/demo-b" className="dropdown-item">
                    Đơn hàng của tôi
                </Link>
                <Link to="/demo-c" className="dropdown-item">
                    Đổi mật khẩu
                </Link>
                <Link to="/demo-d" className="dropdown-item">
                    Đăng xuất
                </Link>
            </div>
        </div>
    );
}
