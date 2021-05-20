import React, { useState, useEffect } from "react";
import RecipesCard from "./RecipesCard";
import { Route, useRouteMatch } from "react-router-dom";
import RecipeSinglePage from "./RecipeSinglePage";

const Recipes = ({ recipesList }) => {
  const [recipesListRender, setRecipesListRender] = useState([]);

  useEffect(() => {
    fetch("https://radiant-ravine-43439.herokuapp.com/recipe/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipesListRender(data);
      });
  }, []);
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
      {recipesListRender.map((a) => (
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
