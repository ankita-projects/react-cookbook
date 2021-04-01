import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>Counter React App</h1>
      <p>{props.date}</p>
    </header>
  );
};

export default Header;