import React from "react";
import Button from "./Button";
import { SocialIcons } from "./socialIcons/SocialIcons";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Login form submitted");
    // Add logic to handle login (like API calls or form validation)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <SocialIcons/>
      {/* <div className="social-icons">
        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
      </div> */}
      <span>or use your email for sign in</span>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Button text="Sign In" />
    </form>
  );
};

export default Login;
