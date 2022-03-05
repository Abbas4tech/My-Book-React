import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import bookReducer from "./slices/bookSlice";
const store = configureStore({
  reducer: {
    formHandler: formReducer,
    bookHandler: bookReducer,
  },
});

export default store;
