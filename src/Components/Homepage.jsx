import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Homepage = () => {
  const { userDetails } = React.useContext(AuthContext);
  return (
    <div>
      <h1>Congratulations You sucessfully log in</h1>
      <h3>Welcome {userDetails}</h3>
    </div>
  );
};

export default Homepage;
