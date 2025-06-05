import React, { useState } from "react";
import "./Login.css";
import OlxLogo from "../../assets/OlxLogo";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate('/home');  
    } catch (err) {
        console.error(err);

        let message = 'An error occurred. Please try again.';

        if (err.code === 'auth/user-not-found') {
          message = 'No user found with this email.';
        } else if (err.code === 'auth/wrong-password') {
          message = 'Incorrect password.';
        } else if (err.code === 'auth/invalid-email') {
          message = 'Email address is not valid.';
        } else if (err.code === 'auth/email-already-in-use') {
          message = 'This email is already registered.';
        } else if (err.code === 'auth/invalid-credential') {
          message = 'Invalid credentials. Please check your login details.';
        } else if (err.message) {
          message = err.message;
        }

        toast.error(message);
           }
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
      <ToastContainer
          position="top-right"  
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
        />
        
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
