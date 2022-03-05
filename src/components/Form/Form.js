import React from "react";
import UseInput from "../Hooks/UseInput";
import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./Form.module.css";
import { formHandlerActions } from "../store/formSlice/formSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputResetHandler: firstNameResetHandler,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputResetHandler: lastNameResetHandler,
  } = UseInput((value) => value.trim() !== "");

  const firstNameClasses = firstNameHasError
    ? "input-box invalid"
    : "input-box";
  const lastNameClasses = lastNameHasError ? "input-box invalid" : "input-box";

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();
    console.log(firstName, lastName);
    firstNameResetHandler();
    lastNameResetHandler();
    dispatch(formHandlerActions.close());
  };

  return (
    <>
      <Backdrop />
      <form onSubmit={formHandler} className={classes.form}>
        <Input
          label="First Name :"
          classes={firstNameClasses}
          input={{
            value: firstName,
            type: "text",
            id: "first name",
            onChange: firstNameChangeHandler,
            onBlur: firstNameBlurHandler,
          }}
          error={firstNameHasError}
        />
        <Input
          label="Last Name :"
          classes={lastNameClasses}
          input={{
            value: lastName,
            type: "text",
            id: "first name",
            onChange: lastNameChangeHandler,
            onBlur: lastNameBlurHandler,
          }}
          error={lastNameHasError}
        />
        <section style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onPress={() => dispatch(formHandlerActions.close())}>
            Cancel
          </Button>
          <Button disabled={!formIsValid} type={"submit"}>
            Submit
          </Button>
        </section>
      </form>
    </>
  );
};

export default Form;
