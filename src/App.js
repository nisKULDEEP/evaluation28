import "./App.css";
import React from "react";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
  let dataFromContext = React.useContext(AuthContext);
  const { login, isAuth, token } = dataFromContext;
  return (
    <div className="App">
      <Navbar />
      {isAuth && <Homepage />}
      {!isAuth && <Login />}
      {/* {isAuth && (
        <h1>
          Login Sucessfull <br /> Token : ${token}
        </h1>
      )} */}
    </div>
  );
}

export default App;
