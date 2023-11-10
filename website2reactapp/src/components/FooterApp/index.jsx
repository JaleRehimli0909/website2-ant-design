import React from "react";
import "./style.css";
import {
  ThunderboltOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Space, FloatButton } from "antd";

const FooterApp = () => {
  return (
    <div className="FooterApp">
      <div className="container">
        <div className="Footer-content">
          <div className="Footer-logo">
            <ThunderboltOutlined className="Icon" />
            <h2>TECH</h2>
          </div>
          <div className="Footer-socials">
            <Space>
              <FacebookOutlined classID="footer-icon" />
              <TwitterOutlined classID="footer-icon" />
              <LinkedinOutlined classID="footer-icon" />
              <InstagramOutlined classID="footer-icon" />
            </Space>
          </div>
          <p>Copyright © 2020 Tech</p>
        </div>
        <FloatButton.BackTop />
      </div>
    </div>
  );
};

export default FooterApp;
