import React from "react";

export let AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  let [isAuth, setIsAuth] = React.useState(false);
  let [token, setToken] = React.useState("");
  //   console.log("SDFH");
  var login = (val) => {
    setIsAuth(true);
    setToken(val);
  };

  var logOut = () => {
    setIsAuth(false);
    setToken("");
  };
  return (
    <AuthContext.Provider value={{ login, token, isAuth, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
