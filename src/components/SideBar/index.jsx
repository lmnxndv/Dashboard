import React from "react";
import {
  AppstoreOutlined,
  LineChartOutlined,
  InsertRowRightOutlined,
  TeamOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";
import Kitty from "../../assets/russian-blue-royalty-free-image-1658451809.jpg";
import "./style.css";

const SideBar = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <div className="sideBar">
      <div className="sideBar-header">
        <div className="logo">
          <i class="fa-solid fa-dna"></i>
          <div className="logo-title">
            <h5>Haven</h5>
            <h5>Diagnostics</h5>
          </div>
        </div>
        <ul>
          <li>
            <NavLink to="/">
              <AppstoreOutlined /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/forecast">
              <LineChartOutlined /> Forecast
            </NavLink>
          </li>
          <li>
            <NavLink to="/alloffices">
              <InsertRowRightOutlined /> All offices
            </NavLink>
          </li>
          <li>
            <NavLink to="/employees">
              <TeamOutlined /> Employees
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="profile-drop">
        <img src={Kitty} alt="kitty" width="30px" />
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              My Profile
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default SideBar;
