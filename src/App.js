import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
      <div className="App">
        <Header date = {today.toDateString()} />
        <main>
          <div className ={circleClass}>{this.state.counter}</div>
          <button onClick ={this.addHandler} className ="add">Add one
          </button>
          <button onClick ={this.removeHandler} className ="remove">Remove one
          </button>
           <button onClick ={this.resetHandler} className ="reset">Reset
          </button>
        </main>
        <Footer year={today.getFullYear()} />
      </div>
     );
  
}

export default App;
