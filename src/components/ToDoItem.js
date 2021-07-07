import { Col, Card, Switch, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";

const ToDoItem = ({ deleteConfirm, deleteCancel }) => {
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
            <Popconfirm
              title="Are you sure to delete this ToDo?"
              onConfirm={deleteConfirm}
              onCancel={deleteCancel}
              okText="Confirm"
              cancelText="Cancel"
            >
              <DeleteOutlined key="delete" />
            </Popconfirm>,
          ]}
        >
          Card Content
        </Card>
      </Col>
    </>
  );
};

export default ToDoItem;
