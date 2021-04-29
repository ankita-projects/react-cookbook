
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react'
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Home from "./Components/Main/Home";
import Footer from "./Components/Footer/Footer";


class App extends Component {
  getRecipe = (event) => {
    event.preventDefault();
      console.log("working");
  }
 render(){
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
     </Router>
  );
}
}

export default App;
