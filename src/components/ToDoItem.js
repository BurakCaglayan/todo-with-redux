import React, { useState, useEffect } from "react";

import { Col, Card, Switch, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { update } from "../redux/actions/todo";

const isCompleted = (status) => (status === "COMPLETED" ? true : false);
const statusCheck = (status) => (status === true ? "COMPLETED" : "INCOMPLETED");

const ToDoItem = ({ todo, deleteConfirm, deleteCancel, showEditModal, pending }) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isCompleted(todo.status));
  }, [todo]);

  const onChangeStatus = (checked) => {
    setIsChecked(checked);
    dispatch(update(todo._id, { status: statusCheck(checked) }));
  };

  return (
    <>
      <Col xs={24} md={12} lg={8}>
        <Card
          hoverable
          loading={pending}
          title={todo.title}
          actions={[
            <EditOutlined key="edit" onClick={() => showEditModal(todo)} />,
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              checked={isChecked}
              onChange={onChangeStatus}
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
