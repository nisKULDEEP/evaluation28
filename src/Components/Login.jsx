import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let LoginWrapper = styled.div`
    text-align: center;
    margin: 5px;
  `;
  let Input = styled.input`
    padding: 5px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid grey;
  `;

  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  let dataFromContext = React.useContext(AuthContext);
  // console.log(dataFromContext.Login);
  const { Login, setUserName } = dataFromContext;

  let handleChange = (e) => {
    let { value, name } = e.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const redirect = useNavigate();
  function GetResponse() {
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        !res.error ? Login(res.token) : alert("something is wrong");
        !res.error && setUserName(data.username);
        !res.error && redirect("/");
      });
  }

  // function getResponse() {
  //   fetch(`https://reqres.in/api/login`, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => login(res.token));
  // }

  //   console.log(dataFromContext);

  return (
    <LoginWrapper>
      <input
        name="username"
        type="text"
        value={data.username}
        placeholder="UserName"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="password"
        type="password"
        value={data.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <br />
      <Button secondary onClick={GetResponse}>
        Sign In
      </Button>
    </LoginWrapper>
  );
};

export default Login;
