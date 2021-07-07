import React from "react";

import { Modal, Form, Input, Button, Switch, Row, Col } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const EditToDoModal = ({ isModalVisible, handleEditOk, handleEditCancel }) => {
  const { TextArea } = Input;

  const onEditFinish = (values) => {
    console.log("Success:", values);
  };

  const onEditFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        <Form
          name="editForm"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ title: "", description: "", status: false }}
          onFinish={onEditFinish}
          onFinishFailed={onEditFinishFailed}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description" rules={[{ required: false }]}>
            <TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
          </Form.Item>

          <Form.Item name="status" valuePropName="checked" wrapperCol={{ offset: 11, span: 24 }}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Form.Item>
          <Row justify="end" gutter={[16, 16]}>
            <Col className="gutter-row" xs={24} md={12} lg={8}>
              <Button block onClick={handleEditCancel}>
                Cancel
              </Button>
            </Col>
            <Col className="gutter-row" xs={24} md={12} lg={8}>
              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Confirm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default EditToDoModal;
