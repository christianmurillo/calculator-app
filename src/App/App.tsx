import React from "react";
import "./App.css";
import { Options } from "../Options/Options";
import { Screen } from "../Screen/Screen";
import { Buttons } from "../Buttons/Buttons";

const parser = require("../Parser/expressionParser");
console.info(parser.parse("(5+6-1)*3*2"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <Options />
      <Screen />
      <Buttons />
    </div>
  );
};
