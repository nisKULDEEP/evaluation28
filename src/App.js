import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
  let dataFromContext = React.useContext(AuthContext);
  const { login, isAuth, token } = dataFromContext;
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {!isAuth && <Route path="/register" element={<Register />} />}
        {!isAuth && <Route path="/login" element={<Login />} />}

        {isAuth && <Route path="/" element={<Homepage />} />}
        {isAuth && <Route path="/products" element={<Product />} />}
        {isAuth && <Route path="/products/:id" element={<ProductDetails />} />}
      </Routes>
    </div>
  );
}

export default App;
