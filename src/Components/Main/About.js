import React, { Component } from "react";

const About = () => {
  return (
    <div className="container">
      <h1>Indian Cuisine</h1>
      <p className="recipeDescp">
        Hey! I am Ankita Bhatnagar, learning fullstack development from Buisness
        College Helsinki. As a part of my school project I built this Indian
        Cuisine app using React as frontend and PHP Symfony as backend, for
        styling I used React Bootstrap and CSS.
      </p>
      <p className="recipeDescp">
        In this project react frontend application is fetching recipe detials
        using restAPI exposed by the backend application, backend is implemented
        using PHP Symfony framework and deployed on Heroku.
      </p>
    </div>
  );
};

export default About;
