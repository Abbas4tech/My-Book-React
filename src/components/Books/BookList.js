import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookListItem from "./BookListItem";
import classes from "./BooksList.module.css";
import { fetchBookData, sentBookData } from "../store/actions/Book-actions";

const UserList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookHandler.books);
  const bookState = useSelector((state) => state.bookHandler);
  console.log(bookState);
  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sentBookData(bookState));
  }, [dispatch, bookState]);
  return (
    <main className={classes.main}>
      {books.map((user) => (
        <BookListItem
          id={user.id}
          key={user.id}
          book={user.book}
          authorName={user.authorName}
          description={user.description}
          rating={user.rating}
        />
      ))}
    </main>
  );
};

export default UserList;
