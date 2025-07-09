import React from "react";
import App from "./App";
import Home from "./Home";
import NavBar from "./NavBar";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

const image = "https://i.imgur.com/mV8PQxj.gif";


export default About;