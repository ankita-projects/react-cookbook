import React, { useState } from "react";
import "./Home.css";
import Recipes from "../Recipes/Recipes";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = (e) => {
    e.preventDefault();
    let searchQuery = document.getElementById("search-bar").value;
    fetch("http://127.0.0.1:8000/search?name=" + searchQuery)
      .then((response) => response.json())
      .then((data) => {
        setRecipes([data]);
      });
  };
  return (
    <>
      <div className ="backgroundImage"></div>
      <div className="homeContainer">
      <div className="heading">
      <h1>
        <label htmlFor="search-bar">A Fascinating Flavour Experience</label>
      </h1>
      <form onSubmit={searchRecipe} method="get" id="search">
        <input type="text" id="search-bar" name="searchQuery" />
        <div className="buttons">
          <button type="submit">Search Recipe</button>
        </div>
      </form>
      </div>
      </div>
      {/* <Recipes recipesList={recipes} /> */}
    </>
  );
};

export default Home;
