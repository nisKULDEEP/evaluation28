import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

import { AuthContext } from "../Contexts/AuthContext";
// import Homepage from "./Components/Homepage";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Product from "./Components/Product";
// import ProductDetails from "./Components/ProductDetails";

let Head = styled.div`
  color: blue;
  font-size: 20px;
  font-weight: 700;
`;
let AuthWrapper = styled.div`
  display: flex
  flex-direction: row;
  justify-content: flex-end;
 
`;

let Temp = styled.span`
  margin-left: 10px;
  text-decoration: none;
  // border: 1px solid red;
  // color: black;

  // &link
  //   text-decoration: none;
`;

let Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: middle;
  padding: 10px;
`;
const Navbar = () => {
  let dataFromContext = React.useContext(AuthContext);
  const { isAuth, logOut } = dataFromContext;

  return (
    <>
      <Nav>
        <Head>Masai Store</Head>
        <AuthWrapper>
          <Temp>
            {isAuth && (
              <Link to="/">
                <Button primary> HOME </Button>{" "}
              </Link>
            )}
          </Temp>
          <Temp>
            {" "}
            {!isAuth && (
              <Link to="/login">
                {" "}
                <Button primary> LOGIN </Button>
              </Link>
            )}{" "}
          </Temp>
          <Temp>
            {!isAuth && (
              <Link to="/register">
                {" "}
                <Button primary> REGISTER</Button>
              </Link>
            )}
          </Temp>
          <Temp>
            {isAuth && (
              <Link to="/products">
                <Button primary>PRODUCT</Button>
              </Link>
            )}
          </Temp>
          {isAuth && (
            <Button primary onClick={() => logOut()}>
              Log Out
            </Button>
          )}
          {/* <Button>Log In</Button>
          <Button onClick={logOut}>Log Out</Button> */}
        </AuthWrapper>
      </Nav>
      <hr />
    </>
  );
};

export default Navbar;
