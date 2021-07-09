import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Col, Card, Switch, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";

import { isCompleted, getStatus } from "../utils/utils";
import { update } from "../redux/actions/todo";

const ToDoItem = ({ todo, deleteConfirm, showEditModal }) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isCompleted(todo.status));
  }, [todo]);

  const onChangeStatus = (checked) => {
    setIsChecked(checked);
    dispatch(update(todo._id, { status: getStatus(checked) }));
  };

  return (
    <>
      <Col xs={24} md={12} lg={8}>
        <Card
          hoverable
          bordered={false}
          className={isChecked ? "completed-card" : ""}
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
