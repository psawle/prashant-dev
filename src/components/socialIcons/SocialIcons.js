import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import "./socialIcons.scss"; // Import your custom SASS file

export const SocialIcons = () => {
  return (
    <div className="social-icons">
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
    </div>
  );
};

// export default SocialIcons;
