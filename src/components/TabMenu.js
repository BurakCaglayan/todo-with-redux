import React, { useState, useEffect } from "react";

import { Tabs, Row, message } from "antd";

import ToDoItem from "./ToDoItem";
import EditToDoModal from "./EditToDoModal";
import { useSelector, useDispatch } from "react-redux";
import { list, remove } from "../redux/actions/todo";

const { TabPane } = Tabs;

const TabMenu = () => {
  const { todos, pending } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const showEditModal = () => {
    setIsModalVisible(true);
  };

  const handleEditOk = () => {
    setIsModalVisible(false);
  };

  const handleEditCancel = () => {
    setIsModalVisible(false);
  };

  const RenderTodos = () => {
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

  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="All" key="1">
          <div className="site-card-wrapper">
            <Row justify="center" gutter={[16, 16]} className="card-wrap-row">
              {RenderTodos()}
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Completed" key="2">
          Completed Items
        </TabPane>
        <TabPane tab="Incompleted" key="3">
          Incompleted Items
        </TabPane>
      </Tabs>
      <EditToDoModal
        isModalVisible={isModalVisible}
        showEditModal={showEditModal}
        handleEditOk={handleEditOk}
        handleEditCancel={handleEditCancel}
      />
    </>
  );
};
export default TabMenu;
