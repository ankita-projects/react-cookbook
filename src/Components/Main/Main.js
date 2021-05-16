import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

import "./Main.css";
import Home from "./Home";
import Recipes from "../Recipes/Recipes";
import About from "./About";
import RecipesForm from "../Recipes/RecipesForm";

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
    fetch("http://127.0.0.1:8000/recipe/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []);

  const valueChangeHandler = (e) => {
    setRecipesForm({ ...recipesForm, [e.target.name]: e.target.value });
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    console.log("ssssssssssssssssssssssss   " + recipesForm);
    axios
      .post("http://127.0.0.1:8000/recipe/add", recipesForm)
      .then(() => {
        return axios.get("http://127.0.0.1:8000/recipe/all");
      })
      .then((res) => setRecipesForm(res.data));
    e.target.reset();
  };

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
                <RecipesForm
                  change={valueChangeHandler}
                  submit={submitRecipe}
                ></RecipesForm>
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
