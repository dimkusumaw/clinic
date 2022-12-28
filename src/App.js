import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./pages/Login";
import Menus from "./pages/Menus";
function App() {
  const Auth = useSelector(state => state.auth.isLogin)

  return (
    <Fragment>
      {Auth && <Menus />}
      {!Auth && <Login />}
    </Fragment>
  );
}

export default App;
