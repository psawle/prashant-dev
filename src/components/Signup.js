import React from "react";
import Button from "./Button";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { SocialIcons } from "./socialIcons/SocialIcons";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted");
    // Add logic to handle form submission, like API calls or form validation
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <SocialIcons/>
      {/* <div className="social-icons">
      {/* <div className="social-icons"> 
      <a href="#" className="icon">
        <FaFacebookF className="facebook-icon" />
      </a>
      <a href="#" className="icon">
        <FaGithub className="github-icon" />
      </a>
      <a href="#" className="icon">
        <FaLinkedinIn className="linkedin-icon" />
      </a>
      <a href="#" className="icon">
        <FaGooglePlusG className="google-icon" />
      </a>
    {/* </div> 
      </div> */}
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Button text="Sign Up" />
    </form>
  );
};

export default Signup;
