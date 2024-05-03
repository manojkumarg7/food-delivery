import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Cart
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PLaceOrder/PlaceOrder";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/food-delivery" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
