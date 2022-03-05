import React from "react";
import classes from "./Button.module.css";

const Button = ({ onPress, type, children, disabled }) => {
  return (
    <>
      <button
        onClick={onPress}
        type={type || "button"}
        disabled={disabled}
        className={classes.button}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
