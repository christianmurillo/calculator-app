import React from "react";
import "./App.css";
import { Options } from "../Options/Options";
const parser = require("../Parser/expressionParser");
console.info(parser.parse("(5+6-1)*3*2"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <Options />
    </div>
  );
};
