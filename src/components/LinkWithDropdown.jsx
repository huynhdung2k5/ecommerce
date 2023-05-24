import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../auth/useAuthContext";

export default function LinkWithDropdown({ to, children }) {
    // const [showDropdown, setShowDropdown] = useState(false);
    const { logout } = useAuthContext();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="dropdown">
            <Link to={to} className="dropdown-toggle" data-toggle="dropdown">
                {children}
            </Link>
            <div className="dropdown-menu" style={{ width: 238, top: 56 }}>
                <Link to="/user/profile" className="dropdown-item">
                    Thông tin tài khoảng
                </Link>
                <Link to="/user/order" className="dropdown-item">
                    Đơn hàng của tôi
                </Link>
                <Link to="/user/change-password" className="dropdown-item">
                    Đổi mật khẩu
                </Link>
                <Link onClick={() => handleLogout()} to="/" className="dropdown-item">
                    Đăng xuất
                </Link>
            </div>
        </div>
    );
}
