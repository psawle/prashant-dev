import React from "react";
import Button from "./Button";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted");
    // Add logic to handle form submission, like API calls or form validation
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <div className="social-icons">
        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Button text="Sign Up" />
    </form>
  );
};

export default Signup;
