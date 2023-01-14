import React from "react";
import Link from "./Links.js";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Link github={props.githublink} l={props.linkedin} />
    </div>
  );
}

export default About;
