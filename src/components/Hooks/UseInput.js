import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const reducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  } else if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: action.isTouched,
    };
  } else if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  } else {
    return state;
  }
};

const UseInput = (validateValue) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputIsValid = validateValue(state.value);

  const hasError = !inputIsValid && state.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR", isTouched: true });
  };

  const inputResetHandler = () => {
    dispatch({ type: "RESET", isTouched: true });
  };

  return {
    value: state.value,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    inputResetHandler,
  };
};

export default UseInput;
