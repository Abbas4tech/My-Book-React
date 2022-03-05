import React from "react";
import UseInput from "../Hooks/UseInput";
import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./Form.module.css";
import { formHandlerActions } from "../store/slices/formSlice";
import { bookActions } from "../store/slices/bookSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const {
    value: bookName,
    isValid: bookNameIsValid,
    hasError: bookNameHasError,
    inputChangeHandler: bookNameChangeHandler,
    inputBlurHandler: bookNameBlurHandler,
    inputResetHandler: bookNameResetHandler,
  } = UseInput((value) => value.trim() !== "");
  const book = bookName.toUpperCase();

  const {
    value: authorName,
    isValid: authorNameIsValid,
    hasError: authorNameHasError,
    inputChangeHandler: authorNameChangeHandler,
    inputBlurHandler: authorNameBlurHandler,
    inputResetHandler: authorNameResetHandler,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: description,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    inputChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    inputResetHandler: descriptionResetHandler,
  } = UseInput(
    (value) =>
      value.trim().split(" ").length >= 10 &&
      value.trim().split(" ").length <= 50
  );

  const {
    value: rating,
    isValid: ratingIsValid,
    hasError: ratingHasError,
    inputChangeHandler: ratingChangeHandler,
    inputBlurHandler: ratingBlurHandler,
    inputResetHandler: ratingResetHandler,
  } = UseInput((value) => +value >= 1 && +value <= 5);

  const bookNameClasses = bookNameHasError ? "input-box invalid" : "input-box";
  const authorNameClasses = authorNameHasError
    ? "input-box invalid"
    : "input-box";
  const descriptionClasses = descriptionHasError
    ? "input-box invalid"
    : "input-box";
  const ratingClasses = ratingHasError ? "input-box invalid" : "input-box";

  let formIsValid = false;
  if (
    bookNameIsValid &&
    authorNameIsValid &&
    ratingIsValid &&
    descriptionIsValid
  ) {
    formIsValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();
    console.log(book, authorName);
    bookNameResetHandler();
    authorNameResetHandler();
    ratingResetHandler();
    descriptionResetHandler();
    dispatch(formHandlerActions.close());
    dispatch(
      bookActions.addBook({
        id: Math.random(),
        book,
        authorName,
        description,
        rating,
      })
    );
  };

  return (
    <>
      <Backdrop />
      <form onSubmit={formHandler} className={classes.form}>
        <Input
          label="Book Name"
          classes={bookNameClasses}
          input={{
            value: book,
            type: "text",
            id: "book name",
            onChange: bookNameChangeHandler,
            onBlur: bookNameBlurHandler,
          }}
          error={bookNameHasError}
          errorMessage={"Please enter valid Book Name *"}
        />
        <Input
          label="Author"
          classes={authorNameClasses}
          input={{
            value: authorName,
            type: "text",
            id: "author name",
            onChange: authorNameChangeHandler,
            onBlur: authorNameBlurHandler,
          }}
          error={authorNameHasError}
          errorMessage={"Please enter valid Author Name *"}
        />

        <Input
          label="Description"
          classes={descriptionClasses}
          textarea={true}
          input={{
            value: description,
            type: "text",
            id: "description",
            onChange: descriptionChangeHandler,
            onBlur: descriptionBlurHandler,
          }}
          error={descriptionHasError}
          errorMessage={"Description must between 10 to 50 words"}
        />

        <Input
          label="Rating"
          classes={ratingClasses}
          input={{
            value: rating,
            type: "number",
            id: "book name",
            onChange: ratingChangeHandler,
            onBlur: ratingBlurHandler,
          }}
          error={ratingHasError}
          errorMessage={"Rating must between 1 to 5"}
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
