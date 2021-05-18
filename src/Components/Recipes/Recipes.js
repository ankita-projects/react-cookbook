import React, { useState } from "react";
import RecipesCard from "./RecipesCard";
import { Route, useRouteMatch } from "react-router-dom";
import RecipeSinglePage from "./RecipeSinglePage";
import RecipesForm from "../Recipes/RecipesForm";

const Recipes = ({ recipesList }) => {
  
const searchRecipe = (e) => {
  e.preventDefault();
  let searchQuery = document.getElementById("search-bar").value;
  fetch("https://radiant-ravine-43439.herokuapp.com/recipe/findbyname/" + searchQuery)
    .then((response) => response.json())
    .then((data) => {
      recipesList = [data];
    });
};
  const { path } = useRouteMatch();
  
  const renderedResult = (
    <div>
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
      <div className="posts">
        {recipesList.map((a) => (
          <RecipesCard
            id={a.id}
            name={a.name}
            img={a.image}
            desc={a.description}
            type={a.type}
            link={a.link}
          />
        ))}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Route path={path} exact>
        <h2>List Of Recipes</h2>
        {renderedResult}
      </Route>
      <Route exact path={`${path}/:recipeId`}>
        <RecipeSinglePage />
      </Route>
    </React.Fragment>
  );
};

export default Recipes;
