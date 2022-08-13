import classNames from "classnames";
import React from "react";
import "./button.scss";

const Button = ({ onClick, type, size = "s", children }) => {
  const btnClass = classNames({
    "btn--main": true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": size === "s",
    "btn--medium": size === "m",
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
