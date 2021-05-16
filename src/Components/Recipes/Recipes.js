import React, { Component } from "react";
import RecipesCard from "./RecipesCard";


const Recipes = ({recipesList}) => {
  recipesList.map((a) => (console.log(a.id+'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  ))
        
  return (
    <div className="posts">
 
      {recipesList.map((a) => (
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
};

export default Recipes;

