import "./App.css";
import "antd/dist/antd.css";
import React from "react";
import { Typography } from "antd";

import TabMenu from "./components/TabMenu";

const { Title } = Typography;

function App() {
  return (
    <>
      <Title className="todo-title" type="secondary">Getir ToDo</Title>
      <TabMenu/>
    </>
  );
}

export default App;
