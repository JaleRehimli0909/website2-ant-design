import React, { useState } from "react";
import "./style.css";
import { Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div id="works" className="Works">
      <div className="container">
        <div className="Works-content">
          <h2>How it works</h2>
          <p>check our latest video to know how it works</p>

          <PlayCircleOutlined className="worksIcon" onClick={showModal} />

          <Modal
            title="Woocommerce Tutorial"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <iframe
              title="Woocommerce Tutorial"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Works;
