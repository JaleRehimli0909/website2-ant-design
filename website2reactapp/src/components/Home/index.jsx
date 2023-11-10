import React from "react";
import "./style.css";
import { DesktopOutlined } from "@ant-design/icons";

import { Carousel, Button, Space } from "antd";

const Home = () => {
  const items = [
    {
      key: "1",
      title: "Web and mobile payment built for developers",
      content:
        "Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.",
    },
    {
      key: "2",
      title: "Work better together. Schedule meetings",
      content:
        "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
    },
    {
      key: "3",
      title: "The best app to increase your productivity",
      content:
        "Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.",
    },
  ];
  return (
    <div className="homeApp">
      <div className="container">
        <Carousel>
          {items.map((item) => {
            return (
              <div className="homeApp-content" key={item.key}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="homeApp-buttons">
                  <Button className="button" type="primary">
                    Learn More
                  </Button>
                  <Button icon={<DesktopOutlined />}>Watch a Demo</Button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
