import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthContext";
// import Homepage from "./Components/Homepage";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Product from "./Components/Product";
// import ProductDetails from "./Components/ProductDetails";

let Head = styled.div`
  color: blue;
`;
let AuthWrapper = styled.div`
  display: flex
  flex-direction: row;
  justify-content: flex-end;
`;

let Temp = styled.span`
  margin-left: 10px;
`;

let Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: middle;
  padding: 10px; ;
`;
const Navbar = () => {
  let dataFromContext = React.useContext(AuthContext);
  const { login, isAuth, token, logOut } = dataFromContext;

  return (
    <>
      <Nav>
        <Head>Store</Head>
        <AuthWrapper>
          <Temp>
            {" "}
            <Link to="/">HOME</Link>{" "}
          </Temp>
          <Temp>
            <Link to="/login">LOGIN</Link>{" "}
          </Temp>
          <Temp>
            <Link to="/register">REGISTER</Link>{" "}
          </Temp>
          <Temp>
            <Link to="/product">PRODUCT</Link>{" "}
          </Temp>
          <Temp>
            <Link to="/">HOME</Link>{" "}
          </Temp>
          {/* <Button>Log In</Button>
          <Button onClick={logOut}>Log Out</Button> */}
        </AuthWrapper>
      </Nav>
      <hr />
    </>
  );
};

export default Navbar;
