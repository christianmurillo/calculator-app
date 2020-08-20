import React from "react";
import "./App.css";
const parser = require("../Parser/expressionParser");
console.info(parser.parse("(5+6-1)*3*2"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <h3>Under Construction</h3>
    </div>
  );
};
