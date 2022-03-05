import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice/formSlice";
const store = configureStore({
  reducer: {
    formHandler: formReducer,
  },
});

export default store;
