import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";

const HeaderApp = () => {
  return (
      <div className="container">
        <Row  className="headerApp">
          <Col span={12} className="headerIcon-holder">
          
              <ThunderboltOutlined className="Icon"/>
              <h2>TECH</h2>
         
          </Col>
          <Col span={12} className="header-list">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Works</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </div>

  );
};

export default HeaderApp;
