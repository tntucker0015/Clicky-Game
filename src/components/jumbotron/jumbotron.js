//Sets up the reusable Jumbotron
import React from "react";
import "./jumbotron.css";

const Jumbotron = () => (
  <header className = "header">
  <h1>Transformer Clicky</h1>
  <h2>Click on any image to earn a point, but don't click on the same picture more than once. click all 12 pics, and you win!!!</h2>
  </header>
);

export default Jumbotron;