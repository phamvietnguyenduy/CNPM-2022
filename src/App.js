import React from "react";
//Components
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Details from "./components/Details";
import Register from "./components/Register";
import Login from "./components/Login";
//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop category={""} />} />
        <Route path="/shop/items1" element={<Shop category={"items1"} />} />
        <Route
          path="/shop/items1/clothes"
          element={<Shop category={"clothes"} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
