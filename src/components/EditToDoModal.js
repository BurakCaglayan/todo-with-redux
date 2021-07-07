import React from "react";
import { Modal } from "antd";

const EditToDoModal = ({ isModalVisible, handleEditOk, handleEditCancel }) => {
  return (
    <>
      <Modal
        title="Edit ToDo"
        destroyOnClose={true}
        footer={null}
        visible={isModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default EditToDoModal;
