import React, { Component } from "react";
import RecipesCard from "./RecipesCard";

const Recipes = ({recipesList}) => {
  console.log("dfgdfgdfgdfg  fdghdfhdfh")
  console.log(recipesList)

  return (
    <div className="posts">
      {recipesList.map((a) => (
        <RecipesCard
          key={a.id}
          name={a.name}
          img={a.img}
          desc={a.desc}
          type={a.type}
          link={a.link}
        />
      ))}
    </div>
  );
};

export default Recipes;

