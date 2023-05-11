import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function OrderUser() {
    // Khởi tạo state cho activeTab và setActiveTab
    const items = ["Tất cả các đơn", "Chờ xác nhận", "Vận chuyển", "Đã giao", "Đã trả hàng", "Đã huỷ"];
    const [selected, setSelected] = useState(0);

    const handleChangeTab = (index) => {
        setSelected(index);
    };
    return (
        <>
            <div className="d-flex justify-content-center">
                <Tabs selectedTabClassName="bg-white">
                    <TabList className="col-md-12 p-0">
                        {items.map((ele, index) => (
                            <Tab
                                key={ele}
                                style={{ borderBottom: selected === index ? "2px solid rgba(0, 187, 166, 1)" : "" }}
                                onClick={() => handleChangeTab(index)}
                            >
                                {ele}
                            </Tab>
                        ))}
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 6</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
}
