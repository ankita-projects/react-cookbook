import React from "react";
import "./Home.css";

const Home = (props) => (
  <div className="container">
    <form onSubmit={props.getRecipe}>
      <div
        style={{
          backgroundImage: `url("https://indianrestaurantmadeira.com/assets/img/background-tajmahal.jpg")`,
          backgroundRepeat: "no-repeat",
          height: "90vh",
          width: "215vh",
          backgroundSize: "cover",
          color: "white",
        }}
      ></div>
      <h1>
        <label htmlFor="search-bar">A Fascinating Flavour Experience</label>
      </h1>

      <input type="text" id="search-bar" />
      <div className="buttons">
        <button type="submit">Search Recipe</button>
      </div>
    </form>
  </div>
);

export default Home;
