import Login from "./pages/login/Login";
import SignUp from "./pages/Signup/SignUp";
import Homepage from "./pages/home/Homepage";
import ProductPage from "./pages/productpage/ProductPage";
import AddProductPage from "./pages/addproductpage/AddProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyContextProvider } from "./context/MyContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/addproduct" element={<AddProductPage />} />
         
      </Routes>
    </Router>
  );

}

export default App
