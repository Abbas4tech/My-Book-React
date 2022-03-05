import React from "react";
import { useSelector } from "react-redux";
import BookListItem from "./BookListItem";
import classes from "./BooksList.module.css";

const UserList = () => {
  const books = useSelector((state) => state.bookHandler.books);
  return (
    <main className={classes.main}>
      {books.map((user) => (
        <BookListItem
          id={user.id}
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
