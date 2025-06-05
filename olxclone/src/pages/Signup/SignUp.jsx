import React, { useState } from "react";
import "./SignUp.css";
import OlxLogo from "../../assets/OlxLogo";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password, phoneNumber);
      toast.success("Signup successful!");
      navigate("/");  
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
    <div className="signupContainer">
      <div className="signupForm">
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
        <form onSubmit={user_auth}>
          <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Phone</label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signupBtn">
            Sign Up
          </button>
        </form>
        <div className="loginRedirect">
          <span>Already a user? </span>
          <Link to="/">
            <button className="loginBtn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
