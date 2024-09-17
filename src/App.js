import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <Signup />
      </div>
      <div className="form-container sign-in">
        <Login />
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <Button id="login" onClick={handleToggle} text="Sign In" />
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <Button id="register" onClick={handleToggle} text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
