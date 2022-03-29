import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [old, setData] = React.useState("");
  const parameter = useParams();
  // console.log(parameter.id);
  React.useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch(`http://localhost:3004/products?id=${parameter.id}`)
      .then((res) => res.json())
      .then((res) => setData(res[0]))
      .catch((err) => console.log(err));
  }
  // getData();
  console.log(old.title);

  //   var showData = "";
  //   var displayData = (old) => {
  //     showData = (
  //       <>
  //         <div key={old.id}>
  //           <div>Product Id: {old.id}</div>
  //           <div>Name: {old.title}</div> <br />
  //           <div>brand: {old.brand}</div> <br />
  //           <div>Product type: {old.type}</div>
  //           <div>Price: {old.price}</div>
  //           <br />
  //         </div>
  //       </>
  //     );
  //   };
  //   displayData(data);

  return (
    <div>
      <h3>Product Details</h3>
      <div key={old.id}>
        <div>Product Id: {old.id}</div>
        <div>Name: {old.title}</div>
        <div>brand: {old.brand}</div>
        <div>Product type: {old.type}</div>
        <div>Price: {old.price}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
