import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PLaceOrder/PlaceOrder";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
