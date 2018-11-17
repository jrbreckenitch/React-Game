import React, { Component } from "react";
import "./style.css";

class Form extends Component {

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>Clicky Game</li><li>Guess</li><li>Score:  | Top Score: </li>
          </ul>
        </nav>
        <div className="jumbotron">
          <p>Clicky Game</p>
        </div>
        <h1>Hello World!</h1>
        <div id="photoBox">
          <div className="row">
            <div id="box1" className="btn boxes"></div>
            <div id="box2" className="btn boxes"></div>
            <div id="box3" className="btn boxes"></div>
            <div id="box4" className="btn boxes"></div>
          </div>
          <div className="row">
            <div id="box5" className="btn boxes"></div>
            <div id="box6" className="btn boxes"></div>
            <div id="box7" className="btn boxes"></div>
            <div id="box8" className="btn boxes"></div>
          </div>
          <div className="row">
            <div id="box9" className="btn boxes"></div>
            <div id="box10" className="btn boxes"></div>
            <div id="box11" className="btn boxes"></div>
            <div id="box12" className="btn boxes"></div>
          </div>
        </div>
      </div>
    )
  }   
};

export default Form;
