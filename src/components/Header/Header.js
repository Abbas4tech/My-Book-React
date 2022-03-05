import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { formHandlerActions } from "../store/formSlice/formSlice";

const Header = () => {
  const dispatch = useDispatch();

  const formOpenHandler = () => {
    dispatch(formHandlerActions.open());
  };

  return (
    <header className={classes.header}>
      <h1>My Blogs</h1>
      <Button onPress={formOpenHandler}>Add</Button>
    </header>
  );
};

export default Header;
