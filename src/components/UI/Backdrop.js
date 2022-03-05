import React from "react";
import classes from "./Backdrop.module.css";
const Backdrop = ({ onHit, children }) => {
  return (
    <div className={classes.backdrop} onClick={onHit}>
      {children}
    </div>
  );
};

export default Backdrop;
