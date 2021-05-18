import React, { useState } from "react";
import "./Home.css";
import Recipes from "../Recipes/Recipes";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = (e) => {
    e.preventDefault();
    let searchQuery = document.getElementById("search-bar").value;
    fetch("https://radiant-ravine-43439.herokuapp.com/recipe/findbyname/" + searchQuery)
      .then((response) => response.json())
      .then((data) => {
        setRecipes([data]);
      });
  };
  return (
    <>
      <div className="backgroundImage"></div>
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
        {recipes.length>0 ? <Recipes recipesList={recipes}/> :"" }
      </div>
    </>
  );
};

export default Home;
