import React, { useState } from "react";
import "./Login.css";
import OlxLogo from "../../assets/OlxLogo";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/home');  
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="logoContainer">
          <OlxLogo />
        </div>
        <form>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="loginBtnMain" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="signupRedirect">
          <span>Don't have an account? </span>
          <Link to={'/SignUp'}>
            <button className="signupBtn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
