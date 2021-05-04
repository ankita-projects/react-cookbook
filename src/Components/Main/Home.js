import React, { useState } from "react";
import "./Home.css";
import Recipes from "../Recipes/Recipes";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = (e) => {
    e.preventDefault();
    let searchQuery = document.getElementById("search-bar").value;
    fetch("http://127.0.0.1:8000/search?name=" +searchQuery)
      .then((response) => response.json())
      .then((data) => {
        setRecipes([data]);
      });
  };
  return (
    <div className="container">
      <form onSubmit={searchRecipe} method="get" id="search">
        <div
          style={{
            backgroundImage: `url("https://www.hoteliermiddleeast.com/public/images/2018/10/26/Khyber5.jpg")`,
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

        <input type="text" id="search-bar" name="searchQuery" />
        <div className="buttons">
          <button type="submit">Search Recipe</button>
        </div>
      </form>
      <Recipes recipesList={recipes} />
    </div>
  );
};

export default Home;
