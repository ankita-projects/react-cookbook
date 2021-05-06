import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./Main.css";
import Home from "./Home";
import Recipes from "../Recipes/Recipes";
import About from "./About";
import RecipesForm from "../Recipes/RecipesForm";


const Main = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
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
          <RecipesForm />
        </Route>
        </Col>
          <Col></Col>
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
