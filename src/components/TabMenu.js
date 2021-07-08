import React, { useState, useEffect } from "react";

import { Tabs, Row, message } from "antd";

import ToDoItem from "./ToDoItem";
import EditToDoModal from "./EditToDoModal";
import { useSelector, useDispatch } from "react-redux";
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
    message.success("Click on Yes");
  };

  const deleteCancel = (e) => {
    console.log(e);
    message.error("Click on No");
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

  function tabChange(key) {
    dispatch(changeFilter(key));
  }

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <ToDoItem
          key={todo._id}
          todo={todo}
          deleteConfirm={deleteConfirm}
          deleteCancel={deleteCancel}
          showEditModal={showEditModal}
        />
      );
    });
  };

  const renderTabs = () => {
    return statuses.map((status) => {
      return (
        <TabPane tab={status.label} key={status.status}>
          <div className="site-card-wrapper">
            <Row justify="center" gutter={[16, 16]} className="card-wrap-row">
              {renderTodos()}
            </Row>
          </div>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs defaultActiveKey="1" centered onChange={tabChange}>
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
