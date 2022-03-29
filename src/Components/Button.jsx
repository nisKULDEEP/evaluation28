import styled from "styled-components";
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#4278f5" : "black")};
  border: ${(props) =>
    props.default
      ? "0.5px solid #c2c2c2"
      : props.dashed
      ? "1px dashed #c2c2c2"
      : "none"};
  color: ${(props) =>
    props.primary ? "#ffffff" : props.link ? "#4278f5" : "#ffffff"};
  border-radius: 2px;
  padding: 5px 15px;
  font-size: 20px;
  margin: 10px;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
  }
`;

export default Button;
