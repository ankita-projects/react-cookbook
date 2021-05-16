import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Col from "react-bootstrap/Col";
import history from "./../../history";

const RecipesForm = (change, submit) => {
  const [data, setData] = useState({
    name: "",
    difficulty: "Easy",
    description: "",
    image: "",
    type: "Vegeterian",
    link: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, ingredientName: "", quantity: "" },
  ]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngredientData = (e, i) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[i][name] = value;
    setIngredients(list);
    setData({ ...data, ingredients: ingredients });
  };

  const addMore = (e, i) => {
    const newInc = { id: ingredients.length + 1, incName: "", quantity: "" };
    setIngredients([...ingredients, newInc]);
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/recipe/add", data)
      .then(console.log("sdgfdfgdfhdfghdfhdf"));

    history.push("/recipes")
  };

  return (
    <Form onSubmit={submitRecipe}>
      <Form.Group>
        <Form.Label htmlFor="">Name</Form.Label>
        <Form.Control type="text" name="name" onChange={changeData} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Difficulty</Form.Label>
        <Form.Control as="select" name="difficulty" onChange={changeData}>
          <option value="Easy">Easy</option>
          <option value="Difficult">Difficult</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="description"
          onChange={changeData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Image</Form.Label>
        <Form.Control type="text" name="image" onChange={changeData} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Type</Form.Label>
        <Form.Control as="select" name="type" onChange={changeData}>
          <option value="Vegeterian">Vegeterian</option>
          <option value="Vegan">Vegan</option>
          <option value="Non-Vegeterian">Non-Vegeterian</option>
        </Form.Control>
      </Form.Group>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label htmlFor="">Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="quantity"
                    onChange={(e) => changeIngredientData(e, i)}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="">Ingredient</Form.Label>
                  <Form.Control
                    type="text"
                    name="ingredientName"
                    onChange={(e) => changeIngredientData(e, i)}
                  />
                </Col>
              </Row>
              <Row>
                <Button variant="outline-success" onClick={addMore}>
                  add more
                </Button>
              </Row>
            </Form.Group>
          </div>
        );
      })}

      <Button type="submit" variant="success" value="Send data">
        Post recipe
      </Button>
    </Form>
  );
};

export default RecipesForm;
