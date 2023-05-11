import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    const items = ["Item 1", "Item 2", "Item 3"];
    const [selected, setSelected] = useState(items);
    const [title, setTitle] = useState(selected[0]);

    const handleClick = (index) => {
        setSelected(index);
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
                                <li>Giới thiệu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ padding: "20px " }}>
                <div className="col-md-4">
                    <ul className="list-group">
                        {items.map((item, index) => (
                            <li
                                className={`list-group-item ${selected === index ? "active" : ""}`}
                                key={index}
                                onClick={() => handleClick(index)}
                                style={
                                    {
                                        // background: "#F7F7F7",
                                        // color: selected === index ? "white" : "black",
                                    }
                                }
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            ;
        </>
    );
}
