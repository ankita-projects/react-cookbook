import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./RecipePage.css";

const RecipeSinglePage = () => {
  const { recipeId } = useParams();

  const history = useHistory();

  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      console.log("hello" + recipeId);
      const url = `https://radiant-ravine-43439.herokuapp.com/recipe/find/${recipeId}`;
      const fecthRecipe = async (url) => {
        const res = await axios.get(url);
        const { data } = res;
        setRecipe({ ...data });
        setIsLoading(false);
      };

      fecthRecipe(url);
    } catch (error) {
      console.log("Error from RecipeSinglePage: ", error);
    }
  }, [recipeId]);

  let renderedResult = "";
  if (isLoading) {
    renderedResult = <h1>Loading...</h1>;
  } else {
    renderedResult = (
      <>
        <div className="ingredentsHeading">
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
        </div>
        <div className="recipe-container">
          <div className="img-container">
            <img src={recipe.image} alt="Image" />
          </div>
          <section className="ingredients-container">
            <h2>Ingredients</h2>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                <ul>{ingredient.ingredientName}</ul>
              </li>
            ))}
          </section>
        </div>
      </>
    );
  }

  return renderedResult;
};

export default RecipeSinglePage;
