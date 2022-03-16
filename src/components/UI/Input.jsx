import React from "react";
import "./Input.css";

const Input = ({ error, input, label, classes, errorMessage, textarea }) => {
  return (
    <>
      <div className={classes}>
        <label>{label}</label>
        {!textarea && <input {...input} />}
        {textarea && <textarea {...input} rows={4} />}
        {error && <p>{errorMessage}</p>}
      </div>
    </>
  );
};

export default Input;
