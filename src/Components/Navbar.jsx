import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AuthContext } from "../Contexts/AuthContext";

let Head = styled.div`
  color: blue;
`;
let AuthWrapper = styled.div`
display: flex
flex-direction: row;
justify-content: flex-end;

`;
// let Button = styled.button`
//   padding: 5px;
//   color: #ffffff;
//   background-color: black;
//   font-weight: 400;
//   border-radius: 5px;
//   margin-left: 10px;

//   &:hover {
//     color: black;
//     background-color: #ffffff;
//     border: 1px solid black;
//     cursor: pointer;
//   }
// `;

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
        <Head>Context API</Head>
        <AuthWrapper>
          {!isAuth && <Button>Log In</Button>}
          {isAuth && <Button onClick={logOut}>Log Out</Button>}
        </AuthWrapper>
      </Nav>
      <hr />
    </>
  );
};

export default Navbar;
