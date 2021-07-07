import { Col, Card, Switch } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";

const ToDoItem = () => {
  return (
    <>
      <Col xs={24} md={12} lg={8}>
        <Card
          hoverable
          title="Card Title"
          actions={[
            <EditOutlined key="edit" />,
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />,
            <DeleteOutlined key="delete" />,
          ]}
        >
          Card Content
        </Card>
      </Col>
    </>
  );
};

export default ToDoItem;
