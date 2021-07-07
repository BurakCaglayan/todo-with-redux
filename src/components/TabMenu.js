import { Tabs, Row } from "antd";

import ToDoItem from "./ToDoItem";

const { TabPane } = Tabs;

const TabMenu = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Tab 1" key="1">
        <div className="site-card-wrapper">
          <Row justify="center" gutter={[16, 16]} className="card-wrap-row">
            <ToDoItem />
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
  );
};
export default TabMenu;
