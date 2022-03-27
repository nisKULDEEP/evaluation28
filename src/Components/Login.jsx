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

  function handleChange(e) {
    const { value, name } = e.target;

    setData((old) => ({
      ...old,
      [name]: value,
    }));
  }

  function getResponse() {
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => login(res.token));
  }

  //   console.log(dataFromContext);

  return (
    <LoginWrapper>
      <Input
        type="email"
        name="email"
        value={data.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <br />
      <Input
        type="password"
        name="password"
        value={data.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <Button onClick={getResponse}>Sign In</Button>
    </LoginWrapper>
  );
};

export default Login;
