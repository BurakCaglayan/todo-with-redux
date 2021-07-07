import React from "react";
import { Modal } from "antd";

const EditToDoModal = ({ isModalVisible, handleEditOk, handleEditCancel }) => {
  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default EditToDoModal;
