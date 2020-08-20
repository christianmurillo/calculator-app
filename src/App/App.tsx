import React, { useState } from "react";
import "./App.css";
import { Options } from "../Options/Options";
import { Screen } from "../Screen/Screen";
import { Buttons } from "../Buttons/Buttons";

const parser = require("../Parser/expressionParser");

export const App: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const handleCalculation = () => {
    let result: string;
    try {
      result = parser.parse(expression);
      setExpression(result);
    } catch (e) {
      console.error(e);
      setExpression("Error: Invalid Expression");
    }
  };
  return (
    <div className="App">
      <Options />
      <Screen expression={expression} />
      <Buttons
        expression={expression}
        setExpression={setExpression}
        handleCalculation={handleCalculation}
      />
    </div>
  );
};
