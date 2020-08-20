import React from "react";
import "./Buttons.css";

export const Buttons: React.FC = () => {
  const buttons: any[] = [
    {
      display: "CE",
      value: "CE",
      onClick() {
        console.info("clicked CE");
      }
    },
    {
      display: "C",
      value: "C",
      onClick() {
        console.info("clicked C");
      }
    },
    {
      display: "(",
      value: "(",
      onClick() {
        console.info("clicked (");
      }
    },
    {
      display: ")",
      value: ")",
      onClick() {
        console.info("clicked )");
      }
    },
    {
      display: "7",
      value: 7,
      onClick() {
        console.info("clicked 7");
      }
    },
    {
      display: "8",
      value: 8,
      onClick() {
        console.info("clicked 8");
      }
    },
    {
      display: "9",
      value: 9,
      onClick() {
        console.info("clicked 9");
      }
    },
    {
      display: "/",
      value: "/",
      onClick() {
        console.info("clicked /");
      }
    },
    {
      display: "4",
      value: 4,
      onClick() {
        console.info("clicked 4");
      }
    },
    {
      display: "5",
      value: 5,
      onClick() {
        console.info("clicked 5");
      }
    },
    {
      display: "6",
      value: 6,
      onClick() {
        console.info("clicked 6");
      }
    },
    {
      display: "X",
      value: "*",
      onClick() {
        console.info("clicked X");
      }
    },
    {
      display: "1",
      value: 1,
      onClick() {
        console.info("clicked 1");
      }
    },
    {
      display: "2",
      value: 2,
      onClick() {
        console.info("clicked 2");
      }
    },
    {
      display: "3",
      value: 3,
      onClick() {
        console.info("clicked 3");
      }
    },
    {
      display: "-",
      value: "-",
      onClick() {
        console.info("clicked minus");
      }
    },
    {
      display: "0",
      value: 0,
      onClick() {
        // console.info("clicked 0");
      }
    },
    {
      display: ".",
      value: ".",
      onClick() {
        console.info("clicked decimal");
      }
    },
    {
      display: "=",
      value: "=",
      onClick() {
        console.info("clicked =");
      }
    },
    {
      display: "+",
      value: "+",
      onClick() {
        console.info("clicked addition");
      }
    }
  ];
  return (
    <div className="Buttons">
      <div className="row">
        {buttons.map((button, index) => {
          return (
            <div className="col-m-3" onClick={button.onClick} key={index}>
              <span>{button.display}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
