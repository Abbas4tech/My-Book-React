import { createSlice } from "@reduxjs/toolkit";

const initialbooksState = {
  books: [],
  totalBooks: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialbooksState,
  reducers: {
    addBook(state, action) {
      const newbook = action.payload;
      const existingbook = state.books.find(
        (book) =>
          book.bookName === newbook.bookName &&
          book.authorName === newbook.authorName
      );
      if (!existingbook) {
        state.books.push(newbook);
        state.totalBooks++;
      } else {
        alert("book Existed");
      }
    },
    removeBook(state, action) {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
      state.totalBooks--;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
