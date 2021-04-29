import React from "react";

const RecipesCard = ({ name, link, img, desc, type }) => {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <em>{type}</em>
      <p>{truncate(desc, 30)} ...</p>
      <a href={link}>Read more</a>
    </div>
  );
};

export default RecipesCard;