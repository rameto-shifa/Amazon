import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Auth from "./Auth/Auth";
import Payment from "./Payment/Payment";
import Orders from "./Order/Orders";
import Cart from "./Cart/Cart";


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;