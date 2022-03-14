import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import bookReducer from "./slices/bookSlice";
import notificationReducer from "./slices/notificationSlice";
const store = configureStore({
  reducer: {
    formHandler: formReducer,
    bookHandler: bookReducer,
    notificationHandler: notificationReducer,
  },
});

export default store;
