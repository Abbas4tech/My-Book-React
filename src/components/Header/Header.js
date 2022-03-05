import React from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>My Blogs</h1>
      <Button>Add</Button>
    </header>
  );
};

export default Header;
