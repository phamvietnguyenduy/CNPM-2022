import React from "react";
//Components
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Details from "./components/Details";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
