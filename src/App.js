import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Home from "./Components/Main/Home";
import Footer from "./Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class App extends Component {
  getRecipe = (event) => {
    event.preventDefault();
    console.log("working");
  };
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <Main />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
        
      </Router>
    );
  }
}

export default App;
