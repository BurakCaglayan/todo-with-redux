import { Col, Card, Switch, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";

const isCompleted = (status) => (status === "COMPLETED" ? true : false);

const ToDoItem = ({ todo, deleteConfirm, deleteCancel, showEditModal }) => {
  return (
    <>
      <Col xs={24} md={12} lg={8}>
        <Card
          hoverable
          title={todo.title}
          actions={[
            <EditOutlined key="edit" onClick={() => showEditModal(todo)} />,
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked={isCompleted(todo.status)}
            />,
            <Popconfirm
              title="Are you sure to delete this ToDo?"
              onConfirm={() => deleteConfirm(todo._id)}
              onCancel={deleteCancel}
              okText="Confirm"
              cancelText="Cancel"
            >
              <DeleteOutlined key="delete" />
            </Popconfirm>,
          ]}
        >
          {todo.description}
        </Card>
      </Col>
    </>
  );
};

export default ToDoItem;
