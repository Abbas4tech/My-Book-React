import React from "react";
import "./Input.css";

const Input = ({ error, input, label, classes }) => {
  return (
    <div className={classes}>
      <label>{label}</label>
      <input {...input} />
      {error && <p>Please enter valid {input.id}</p>}
    </div>
  );
};

export default Input;
