import React, { useState } from "react";
import RecipesCard from "./RecipesCard";
import { Route, useRouteMatch } from "react-router-dom";
import RecipeSinglePage from "./RecipeSinglePage";
import RecipesForm from "../Recipes/RecipesForm";

const Recipes = ({ recipesList }) => {
  const searchRecipe = (e) => {
    e.preventDefault();
    let searchQuery = document.getElementById("search-bar").value;
    fetch(
      "https://radiant-ravine-43439.herokuapp.com/recipe/findbyname/" +
        searchQuery
    )
      .then((response) => response.json())
      .then((data) => {
        recipesList = [data];
      });
  };
  const { path } = useRouteMatch();

  const renderedResult = (
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
  );

  return (
    <React.Fragment>
      <Route path={path} exact>
        {renderedResult}
      </Route>
      <Route exact path={`${path}/:recipeId`}>
        <RecipeSinglePage />
      </Route>
    </React.Fragment>
  );
};

export default Recipes;
