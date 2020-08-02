import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const header = () => (
  <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[`/${window.location.href.split("/")[3]}`]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="/" className="bg-color-secundary">
        <Link to={"/"}>
          <span> Últimas Notícias </span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/tecnology" className="bg-color-secundary">
        <Link to={"/tecnology"}>
          <span> Tecnologia </span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/sports" className="bg-color-secundary">
        <Link to={"/sports"}>
          <span> Esportes </span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/healt" className="bg-color-secundary">
        <Link to={"/healt"}>
          <span> Saúde </span>
        </Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default header;
