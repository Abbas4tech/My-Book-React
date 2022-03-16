import React from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../store/slices/bookSlice";
import Button from "../UI/Button";
import classes from "./BookListItem.module.css";

const UserListItem = ({ book, authorName, id, description, rating }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(bookActions.removeBook(id));
  };
  return (
    <article className={classes.article}>
      <h1>{book}</h1>
      <h3>By {authorName}</h3>
      <p>{description}</p>
      <h5>Rated : {rating} / 5</h5>
      <section style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onPress={deleteHandler}>Delete!</Button>
      </section>
    </article>
  );
};

export default UserListItem;
