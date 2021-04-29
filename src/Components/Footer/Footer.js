import React from "react";
import "./Footer.css";

const Footer = () => {
  let today = new Date();

  return (
    <footer>
      <p>
        © Copyright{" "}
        {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;