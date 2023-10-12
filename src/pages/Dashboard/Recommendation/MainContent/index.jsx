import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space, Progress } from "antd";

const MainContent = () => {
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4th menu item",
      key: "4",
      icon: <UserOutlined />,
      disabled: true,
    },
  ];

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="row">
      <div className="occup-target">
        <h4>Occupancy targets:</h4>
        <div className="occup-target">
          <span className="seventy-five color">75</span>
          <Dropdown overlay={menu}>
            <Button type="text" className="custom-button">
              <Space>
                People <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        <div className="row-text color">
          <span>4 weeks</span>
          <span>8 weeks</span>
          <span>12 weeks</span>
        </div>
        <div className="space-row">
          <Progress type="circle" percent={80} strokeColor="#e6b400" />
          <Progress type="circle" percent={88} strokeColor="lightgreen" />
          <Progress type="circle" percent={95} strokeColor="lightgreen" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
