import React from "react";
import Button from "./Button";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  });

  let handleChange = (e) => {
    let { value, name } = e.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const [registerStatus, setRegisterStatus] = React.useState(false);
  let dataFromContext = React.useContext(AuthContext);
  const { login, isAuth, setUserDetail } = dataFromContext;

  function GetResponse() {
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setRegisterStatus(res.message);
        res.message == "Registration Success" &&
          setUserDetail(data.username) &&
          setRegisterStatus(true);
      });
  }

  if (registerStatus != false) {
    return (
      <>
        <h2>{registerStatus}</h2>
        <Button onClick={() => setRegisterStatus(false)}>
          {" "}
          Register Again
        </Button>
      </>
    );
  }

  return (
    <div>
      <h3>Register</h3>

      <input
        name="name"
        type="text"
        value={data.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="email"
        type="email"
        value={data.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="mobile"
        type="number"
        value={data.mobile}
        placeholder="Mobile"
        onChange={handleChange}
      />
      <br />
      <br />
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

      <textarea
        name="description"
        value={data.description}
        placeholder="Description"
        onChange={handleChange}
      />

      <Button onClick={GetResponse}>Register</Button>
    </div>
  );
};

export default Register;
