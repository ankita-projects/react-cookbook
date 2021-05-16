import React from "react";
import Card from "react-bootstrap/Card";
import RecipeSinglePage from "./RecipeSinglePage";
import {
  BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const RecipesCard = ({ id, name, img, desc, type, link }) => {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };
  return (
    <Card>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{truncate(desc, 30)}</Card.Text>
        <Router>
          <Route path="./ReadMore">
            <RecipeSinglePage recipeId={id} />
          </Route>
        </Router>
        <NavLink to="./ReadMore">Read More</NavLink>
      </Card.Body>
    </Card>
  );
};

export default RecipesCard;
