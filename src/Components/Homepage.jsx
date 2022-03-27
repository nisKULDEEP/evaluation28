import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Homepage = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div>
      <h1>Congratulations You sucessfully log in</h1>
      <h3>Your toke id : {token}</h3>
    </div>
  );
};

export default Homepage;
