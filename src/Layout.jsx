import Header from "./Header";
import { Outlet } from "react-router-dom";
import Fotter from "./pages/Footer";

export default function Layout() {
    return (
        <>
            <div className="pos_page">
                <div className="container">
                    <div className="pos_page_inner">
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </div>
            <Fotter />
        </>
    );
}
