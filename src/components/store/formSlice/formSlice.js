import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  formIsOpen: false,
};

const formSlice = createSlice({
  name: "formHandler",
  initialState: initialFormState,
  reducers: {
    open(state) {
      state.formIsOpen = true;
    },
    close(state) {
      state.formIsOpen = false;
    },
  },
});

export const formHandlerActions = formSlice.actions;
export default formSlice.reducer;
