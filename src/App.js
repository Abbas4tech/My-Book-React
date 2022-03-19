import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import UserList from "./components/Books/BookList";
import { useEffect } from "react";
import {
  fetchBookData,
  sentBookData,
} from "./components/store/actions/Book-actions";
import Notification from "./components/UI/Notification";

let isinitial = true;

function App() {
  const dispatch = useDispatch();

  const formIsOpen = useSelector((state) => state.formHandler.formIsOpen);

  const bookState = useSelector((state) => state.bookHandler);
  console.log(bookState);

  const notification = useSelector(
    (state) => state.notificationHandler.notification
  );

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  useEffect(() => {
    if (isinitial) {
      isinitial = false;
      return;
    }
    if (bookState.changed) {
      dispatch(sentBookData(bookState));
    }
  }, [dispatch, bookState]);

  return (
    <>
      <div style={{ position: "sticky", top: 0 }}>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <Header />
      </div>

      {formIsOpen && <Form />}
      <UserList />
    </>
  );
}

export default App;
