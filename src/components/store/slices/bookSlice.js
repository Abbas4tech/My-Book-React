import { createSlice } from "@reduxjs/toolkit";

const initialbooksState = {
  books: [],
  totalBooks: 0,
  changed: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialbooksState,
  reducers: {
    replaceBooks(state, action) {
      state.books = action.payload.books;
      state.totalBooks = action.payload.totalBooks;
    },
    addBook(state, action) {
      const newbook = action.payload;
      console.log(newbook);
      console.log(state.books);
      state.changed = true;
      const existingbook = state.books.find(
        (book) =>
          book.book === newbook.book && book.authorName === newbook.authorName
      );
      console.log(existingbook);
      if (!existingbook) {
        state.books.push(newbook);
        state.totalBooks++;
      } else {
        alert("book Existed");
      }
    },
    removeBook(state, action) {
      const id = action.payload;
      state.changed = true;
      state.books = state.books.filter((book) => book.id !== id);
      state.totalBooks--;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
