import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

// const redirect = useNavigate();

const Product = () => {
  let Div = styled.div`
    margin-top: 50px;
    // border:1px solid blue;
    border-radius: 2%;
    background-color: lavender;
    width: 25%;
    margin-left: 35%;
    padding: 50px;
    height: 150px;
    text-decoration: none;
  `;
  let P = styled.p`
    font-size: 25px;
    color: blue;
  `;
  let [dataArray, setDataArray] = React.useState([]);
  let [filterArray, setFilterArray] = React.useState([]);
  let [filterOn, setFilterOn] = React.useState(false);
  React.useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch(`http://localhost:3004/products`)
      .then((res) => res.json())
      .then((res) => setDataArray(res))
      .catch((err) => console.log(err));
  }
  var showData = "";
  var displayData = (arr) => {
    showData = arr.map((old) => {
      return (
        <Link to={`/products/${old.id}`}>
          {/* console.log({old.id}) */}
          <Div key={old.id}>
            <div>Product Id: {old.id}</div>
            <br />
            <div>Name: {old.title}</div> <br />
            <div>brand: {old.brand}</div> <br />
            <div>type: {old.type}</div>
            <br />
          </Div>
        </Link>
      );
    });
  };
  displayData(dataArray);
  return (
    <>
      <P>Select a product and happy Shopping</P>

      <span>
        <p>Sorting</p>
        <div>
          <span>Price</span>
          <Button secondary>Increasing Order</Button>
          <Button secondary>Decreasing Order</Button>
        </div>
      </span>

      <div>{showData}</div>
    </>
  );
};
export default Product;
