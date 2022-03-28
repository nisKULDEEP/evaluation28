import React, { useState } from "react";

export let AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  let [isAuth, setIsAuth] = React.useState(false);
  let [userDetail, setUserDetail] = React.useState("");
  const [token, setToken] = React.useState("");
  //   console.log("SDFH");
  var login = (val) => {
    setIsAuth(true);
    setUserDetail(val);
  };

  var logOut = () => {
    setIsAuth(false);
    setToken("");
  };
  return (
    <AuthContext.Provider
      value={{ login, setToken, setUserDetail, isAuth, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
