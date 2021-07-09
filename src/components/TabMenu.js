import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Tabs, Row, Spin, message } from "antd";

import ToDoItem from "./ToDoItem";
import EditToDoModal from "./EditToDoModal";
import { changeFilter, list, remove } from "../redux/actions/todo";

const { TabPane } = Tabs;

const statuses = [
  {
    label: "All",
    status: "ALL",
  },
  {
    label: "Completed",
    status: "COMPLETED",
  },
  {
    label: "Incompleted",
    status: "INCOMPLETED",
  },
];

const TabMenu = () => {
  const { todos, pending } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  useEffect(() => {
    dispatch(list());
  }, []);

  const deleteConfirm = (id) => {
    dispatch(remove(id));
  };

  const showEditModal = (item) => {
    setSelectedTodo(item);
    setIsModalVisible(true);
  };

  const handleEditOk = () => {
    setIsModalVisible(false);
  };

  const handleEditCancel = () => {
    setIsModalVisible(false);
  };

  const tabChange = (key) => {
    dispatch(changeFilter(key));
  };

  const renderTodos = (status) => {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return (
          <ToDoItem
            key={todo._id}
            todo={todo}
            pending={pending}
            deleteConfirm={deleteConfirm}
            showEditModal={showEditModal}
          />
        );
      });
    } else {
      return <h1>No Todo in {status.label}</h1>;
    }
  };

  const renderTabs = () => {
    return statuses.map((status) => {
      return (
        <TabPane tab={status.label} key={status.status}>
          <Spin spinning={pending}>
            <h2 className="total-counter">Total: {todos.length}</h2>
            <div className="site-card-wrapper">
              <Row justify="center" gutter={[16, 16]} className="card-wrap-row">
                {renderTodos(status)}
              </Row>
            </div>
          </Spin>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs defaultActiveKey={statuses[0].status} centered onChange={tabChange}>
        {renderTabs()}
      </Tabs>
      <EditToDoModal
        selectedTodo={selectedTodo}
        isModalVisible={isModalVisible}
        showEditModal={showEditModal}
        handleEditOk={handleEditOk}
        handleEditCancel={handleEditCancel}
      />
    </>
  );
};
export default TabMenu;
