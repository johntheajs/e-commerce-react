import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
