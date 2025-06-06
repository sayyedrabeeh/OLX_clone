import React from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/Signup/SignUp";
import Homepage from "./pages/home/Homepage";
import ProductPage from "./pages/productpage/ProductPage";
import AddProductPage from "./pages/addproductpage/AddProductPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

         
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addproduct"
          element={
            <ProtectedRoute>
              <AddProductPage />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
