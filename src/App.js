import "./App.css";
import "antd/dist/antd.css";
import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function App() {
  return (
    <>
      <Title className="todo-title" type="secondary">Getir ToDo</Title>
    </>
  );
}

export default App;
