import { useSelector } from "react-redux";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import UserList from "./components/Books/BookList";

function App() {
  const formIsOpen = useSelector((state) => state.formHandler.formIsOpen);

  return (
    <>
      <Header />
      {formIsOpen && <Form />}
      <UserList />
    </>
  );
}

export default App;
