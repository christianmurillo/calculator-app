import React from "react";
import "./Screen.css";

export const Screen: React.FC<{
  expression: string;
}> = ({ expression }) => {
  return (
    <div className="Screen">
      <span>{expression}</span>
    </div>
  );
};
