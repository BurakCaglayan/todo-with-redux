import React from "react";

import { Form, Input, Button, Switch, Row, Col } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const AddToDoItem = () => {
  const { TextArea } = Input;

  const onAddFinish = (values) => {
    console.log("Success:", values);
  };

  const onAddFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="editForm"
      initialValues={{ title: "", description: "", status: false }}
      onFinish={onAddFinish}
      onFinishFailed={onAddFinishFailed}
    >
      <div className="site-card-wrapper">
        <Row justify="center" align="middle" layout="inline"gutter={16} className="card-wrap-row" >
          <Col className="gutter-row" xs={24} md={12} lg={6}>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={24} md={12} lg={112}>
            <Form.Item name="description" rules={[{ required: false }]}>
              <TextArea  placeholder="Description" autoSize={{ minRows: 1, maxRows: 3 }} />
            </Form.Item>
          </Col>
          <Col className="txt-center" xs={24} md={12} lg={2}>
            <Form.Item name="status" valuePropName="checked">
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={24} md={12} lg={4}>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default AddToDoItem;