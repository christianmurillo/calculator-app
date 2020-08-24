import React, { useState } from "react";
import "./App.css";
import { Screen } from "../Screen/Screen";
import { Buttons } from "../Buttons/Buttons";
import { Footer } from "../Footer/Footer";

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
      <div className="container">
        <Screen expression={expression} />
        <Buttons
          expression={expression}
          setExpression={setExpression}
          handleCalculation={handleCalculation}
        />
        <Footer />
      </div>
    </div>
  );
};
