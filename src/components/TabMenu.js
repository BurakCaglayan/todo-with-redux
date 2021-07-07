import React, { useState } from "react";

import { Tabs, Row, message } from "antd";

import ToDoItem from "./ToDoItem";
import EditToDoModal from "./EditToDoModal";

const { TabPane } = Tabs;

const TabMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const deleteConfirm = (e) => {
    console.log(e);
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

  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Tab 1" key="1">
          <div className="site-card-wrapper">
            <Row justify="center" gutter={[16, 16]} className="card-wrap-row">
              <ToDoItem deleteConfirm={deleteConfirm} deleteCancel={deleteCancel} showEditModal={showEditModal} />
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
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
