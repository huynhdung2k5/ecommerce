export function Deliveries() {
    return (
        <>
            <div className="search-container mt-2">
                <div className="input-group">
                    <div
                        className="input-group-prepend"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px 0px 6px 12px",
                        }}
                    >
                        <i style={{ fontSize: 18 }} className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="tìm đơn hàng theo 'Mã đơn hàng' hoặc 'Tên sản phẩm'"
                    />
                </div>
            </div>

            <div className="container">
                <h3 className="text-null mt-3">Hiện chưa có đơn hàng nào</h3>
            </div>
        </>
    );
}
