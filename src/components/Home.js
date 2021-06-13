import React from "react";
import *as Info from "../data/user.js"

function Home(username,city) {
  return (
    <div id="home">
      <h1>
        {Info.username} is a Web Developer from {Info.city}
      </h1>
    </div>
  );
}
export default Home