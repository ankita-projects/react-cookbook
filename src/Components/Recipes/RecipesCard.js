import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useRouteMatch } from "react-router-dom";

const RecipesCard = ({ id, name, img, desc, type, link }) => {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  const { url } = useRouteMatch();
  return (
    <Card>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{truncate(desc, 30)}</Card.Text>
        <Link to={`/recipes/${id}`}>Read More</Link>
      </Card.Body>
    </Card>
  );
};

export default RecipesCard;
