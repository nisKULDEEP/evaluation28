import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "../Components/Homepage";

export let AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  let [isAuth, setIsAuth] = React.useState(false);
  let [userName, setUserName] = React.useState("");
  const [token, setToken] = React.useState("");
  //   console.log("SDFH");

  var Login = (val) => {
    setIsAuth(true);
    console.log("jsdhf");
    setToken(val);

    // <Navigate to="/" />;
    // const Re = useNavigate();
    // Re("/products");
  };

  var logOut = () => {
    setIsAuth(false);
    setToken("");
  };
  return (
    <AuthContext.Provider
      value={{ Login, setToken, setUserName, userName, isAuth, logOut, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
