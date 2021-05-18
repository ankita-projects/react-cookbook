import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

import "./Main.css";
import Home from "./Home";
import Recipes from "../Recipes/Recipes";
import About from "./About";
import RecipesForm from "../Recipes/RecipesForm";
import RecipeSinglePage from "../Recipes/RecipeSinglePage";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipesForm, setRecipesForm] = useState({
    name: "",
    difficulty: "",
    description: "",
    image: "",
    type: "",
    link: "",
  });
  useEffect(() => {
    fetch("https://radiant-ravine-43439.herokuapp.com/recipe/all")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <main>
      <Switch>
        <Container>
          <Row>
            <Route exact path="/" component={Home} />
          </Row>
          <Row>
            <Route path="/recipes">
              <Recipes recipesList={recipes} />
            </Route>
          </Row>
          <Row className="mt-5">
            <Col></Col>
            <Col xs={12}>
              <Route path="/addRecipes">
                <RecipesForm></RecipesForm>
              </Route>
            </Col>
          </Row>

          <Row>
            <Route path="/about" component={About} />
          </Row>
        </Container>
      </Switch>
    </main>
  );
};

export default Main;
