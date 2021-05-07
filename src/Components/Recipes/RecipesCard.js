import React from "react";
import Card from "react-bootstrap/Card";


const RecipesCard = ({key, name, img, desc, type,link }) => {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };
  return (
   
    <Card >
    <Card.Img variant="top" src={img} alt={name}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      {truncate(desc, 30)}
      </Card.Text>
      <Card.Link href={link}>Read more</Card.Link>
    </Card.Body>
    </Card>
  
   
  );
};

export default RecipesCard;