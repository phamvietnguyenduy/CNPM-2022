import React from "react";
//Components
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Details from "./components/Details";
import Register from "./components/Register";
//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<Details />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
