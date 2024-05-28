import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Auth from "./Auth/Auth";
import Payment from "./Payment/Payment";
import Orders from "./Order/Orders";
import Cart from "./Cart/Cart";
import Result from "./Results/Result"
import ProductDetail from './ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe('pk_test_51PKDYpP8ds3W6rB0Fz7lzu5Nl0mzC7EmEKqzvUjaMAKSWrAQBmCPsSGwkI8dyGRG7Y8lHmmZiwuFbVCPo7KPl1pV00CyOX6yZL');

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;