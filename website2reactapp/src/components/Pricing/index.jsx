import React from "react";
import "./style.css";
import { Row, Col, Card, List, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const data = [
  {
    title: "Basic",
    content: [
      {
        price: "£29.99",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Premium",
    content: [
      {
        price: "£59.99",
        space: "5 GB of space",
        user: "5 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Enterprise",
    content: [
      {
        price: "£99.99",
        space: "Unlimited space",
        user: "15 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="Pricing">
      <div className="container">
        <h2>Choose a plan to fit your needs</h2>

        <List
          grid={{
            gutter: 6,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          className="list"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card
                title={item.title}
                // style={{
                //   width: 350,
                // }}
              >
                <p className="pricing-title">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>

                <Button icon={<SendOutlined />} type="primary" size="large">
                  Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Pricing;
