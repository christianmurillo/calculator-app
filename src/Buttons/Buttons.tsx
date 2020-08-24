import React from "react";
import "./Buttons.css";

export const Buttons: React.FC<{
  expression: string;
  setExpression: (s: string) => void;
  handleCalculation: () => void;
}> = ({ expression, setExpression, handleCalculation }) => {
  const handleClick = (token: string) => {
    setExpression(expression + token);
    if (token === "=") {
      handleCalculation();
    }
  };
  const buttons: any[] = [
    {
      display: "CE",
      value: "CE",
      onClick() {
        if (expression && expression.length > 0) {
          setExpression(expression.substring(0, expression.length - 1));
        }
      }
    },
    {
      display: "C",
      value: "C",
      onClick(token: string) {
        setExpression("");
      }
    },
    {
      display: "(",
      value: "(",
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: ")",
      value: ")",
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "7",
      value: 7,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "8",
      value: 8,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "9",
      value: 9,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "/",
      value: "/",
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "4",
      value: 4,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "5",
      value: 5,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "6",
      value: 6,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "*",
      value: "*",
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "1",
      value: 1,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "2",
      value: 2,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "3",
      value: 3,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "-",
      value: "-",
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "0",
      value: 0,
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: ".",
      value: ".",
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "=",
      value: "=",
      onClick(token: string) {
        handleClick(token);
      }
    },
    {
      display: "+",
      value: "+",
      onClick(token: string) {
        handleClick(token);
      }
    }
  ];
  return (
    <div className="Buttons">
      <div className="row">
        {buttons.map((button, index) => {
          return (
            <div
              className="col-m-3"
              onClick={() => button.onClick(button.value)}
              key={index}
            >
              <span>{button.display}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
