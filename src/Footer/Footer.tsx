import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <div className="row">
      <p className="social">
        <a
          href="https://github.com/christianmurillo/calculator-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github fa-lg" aria-hidden="true" />
        </a>
        &nbsp; &nbsp;
        <a
          href="https://www.linkedin.com/in/christian-murillo-1353b098/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />
        </a>
      </p>
    </div>
  );
};
