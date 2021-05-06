import React from "react";
import Card from "react-bootstrap/Card";


const RecipesCard = ({ name, link, img, text, type }) => {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };
  return (
   
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} alt={name}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
     
      </Card.Text>
      <Card.Link href="https://www.rasoimenu.com/recipe/balti-paneer-recipe/">Read more</Card.Link>
    </Card.Body>
    </Card>
  
   
  );
};

export default RecipesCard;