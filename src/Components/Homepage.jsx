import React from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { userDetails } = React.useContext(AuthContext);
  const [userData, setUserData] = React.useState("[]");
  let dataFromContext = React.useContext(AuthContext);
  const { Login, token, userName } = dataFromContext;
  const redirect = useNavigate();

  React.useEffect(() => {
    getData();
  }, []);

  function getData() {
    // {
    //   token = "" && redirect("/login");
    // }

    fetch(`https://masai-api-mocker.herokuapp.com/user/${userName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res);
      });
  }

  return (
    <div>
      <h1>Congratulations You sucessfully log in</h1>
      <h3>Welcome {userData.name}</h3>
      <div>Username : {userData.username}</div>
      <div>Mobile No. {userData.mobile}</div>
      <div>Email : {userData.email}</div>
    </div>
  );
};

export default Homepage;
