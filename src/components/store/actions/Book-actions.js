import { bookActions } from "../slices/bookSlice";
import { notificationActions } from "../slices/notificationSlice";

export const fetchBookData = () => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "Pending",
        title: "Getting Book Data",
        message: "Please Wait!",
      })
    );
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
      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Found Book Data!",
          message: "Book Data Found Successfully!",
        })
      );
    } catch (error) {
      console.log(error.message);
      dispatch(
        notificationActions.showNotification({
          status: error,
          title: "Error!",
          message: "Sent Book Data Failed!",
        })
      );
    }
  };
};

export const sentBookData = (book) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending Book Details",
      })
    );
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

      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Book Data Successfully",
        })
      );
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
      dispatch(
        notificationActions.showNotification({
          status: error,
          title: "Error!",
          message: "Sent Book Data Failed!",
        })
      );
    }
  };
};
