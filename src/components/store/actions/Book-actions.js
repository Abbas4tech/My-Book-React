import { bookActions } from "../slices/bookSlice";

export const fetchBookData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://books-app-8570c-default-rtdb.firebaseio.com/Books.json"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch Data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const booksData = await fetchData();
      dispatch(
        bookActions.replaceBooks({
          books: booksData.books || [],
          totalBooks: booksData.totalBooks,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const sentBookData = (book) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://books-app-8570c-default-rtdb.firebaseio.com/Books.json",
        {
          method: "PUT",
          body: JSON.stringify({
            books: book.books,
            totalBooks: book.totalBooks,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Unable to send book data!");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};
