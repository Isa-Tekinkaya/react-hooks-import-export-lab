import React from "react";
import  * as Username from "../data/user.js"
function About(image) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={Username.image} alt="I made this" />
    </div>
  );
}
export default About