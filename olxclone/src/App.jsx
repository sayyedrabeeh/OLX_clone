import Login from "./pages/login/Login";
import SignUp from "./pages/Signup/SignUp";
import Homepage from "./pages/home/Homepage";
import ProductPage from "./pages/productpage/ProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyContextProvider } from "./context/MyContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
         
      </Routes>
    </Router>
  );

}

export default App
