import React, { useState } from "react";
import "./style.css";
import { Button, Drawer, Row, Col, Anchor } from "antd";
import { ThunderboltOutlined, MenuOutlined } from "@ant-design/icons";

const { Link } = Anchor;

const HeaderApp = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      <Row className="headerApp">
        <Col span={12} className="headerIcon-holder">
          <ThunderboltOutlined className="Icon" />
          <h2>TECH</h2>
        </Col>
        <Col span={12} className="header-list">

          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined  className="Icon"/>
            </Button>
            <Drawer
              title="Tech"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Anchor targetOffset="65" direction="vertical">
                <Link href="#home" title="Home" />
                <Link href="#about" title="About" />
                <Link href="#features" title="Features" />
                <Link href="#works" title="How it works" />
                <Link href="#faq" title="FAQ" />
                <Link href="#pricing" title="Pricing" />
                <Link href="#contact" title="Contact" />
              </Anchor>
            </Drawer>
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset="65" direction="horizontal">
              <Link href="#home" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#features" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </div>

          {/* <nav>
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
          </nav> */}
        </Col>
      </Row>
    </div>
  );
};

export default HeaderApp;
