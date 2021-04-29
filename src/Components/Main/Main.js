import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";
import Home from "./Home";
import Recipes from "../Recipes/Recipes";
import About from "./About";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes">
          <Recipes recipesList={recipes} />
        </Route>
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
};

export default Main;