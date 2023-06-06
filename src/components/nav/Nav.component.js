import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.styles.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  UserOutlined,
  UserAddOutlined,
  VideoCameraOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import "./Nav.styles.css";

const { Header, Sider, Content } = Layout;

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <div className="logo-vertical" />

      <Menu
        className="menu"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Home",
          },
          {
            key: "2",
            icon: <InfoCircleOutlined />,
            label: "About",
          },

          {
            key: "3",
            path: "/signup",
            icon: <UserAddOutlined />,
            label: "Sign Up",
          },
          {
            key: "4",
            path: "/signin",
            icon: <LoginOutlined />,
            label: "Sign In",
          },
        ].map((item, index) => {
          return {
            key: index,
            label: <Link to={item.path}>{item.label}</Link>,
            icon: item.icon,
          };
        })}
      />
    </Sider>
  );
};

export default NavBar;
