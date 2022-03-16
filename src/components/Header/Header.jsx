import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { formHandlerActions } from "../store/slices/formSlice";

const Header = () => {
  const noOfBooks = useSelector((state) => state.bookHandler.totalBooks);
  const dispatch = useDispatch();

  const formOpenHandler = () => {
    dispatch(formHandlerActions.open());
  };

  return (
    <header className={classes.header}>
      <h1>My Books</h1>
      <section>
        <small>Total Books : {noOfBooks}</small>
        <Button onPress={formOpenHandler}>Add</Button>
      </section>
    </header>
  );
};

export default Header;
