import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AuthContext } from "../Contexts/AuthContext";

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
    email: "",
    password: "",
  });

  let dataFromContext = React.useContext(AuthContext);
  const { login, isAuth, token } = dataFromContext;

  let handleChange = (e) => {
    let { value, name } = e.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

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
        console.log(res.message);
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
      <Button onClick={GetResponse}>Sign In</Button>
    </LoginWrapper>
  );
};

export default Login;
