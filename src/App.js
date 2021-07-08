import "./App.css";
import "antd/dist/antd.css";
import React from "react";
import { Typography } from "antd";

import TabMenu from "./components/TabMenu";
import AddToDoItem from "./components/AddToDoItem";

const { Title } = Typography;

function App() {
  return (
    <>
      <Title className="todo-title" type="secondary">
        ToDo With Redux
      </Title>
      <AddToDoItem />
      <TabMenu />
    </>
  );
}

export default App;
