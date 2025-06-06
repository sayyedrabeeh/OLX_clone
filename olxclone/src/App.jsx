import React from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/Signup/SignUp";
import Homepage from "./pages/home/Homepage";
import ProductPage from "./pages/productpage/ProductPage";
import AddProductPage from "./pages/addproductpage/AddProductPage";
import Player from "./pages/player/Player"; // Assuming you have this
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* Protected routes */}
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
        <Route
          path="/player/:id"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
