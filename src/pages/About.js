import React from "react";
import aboutimg from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutimg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          This is a gaming platform  for travellers  travelling for a  long distance and gettting tired . To activate them we have designed a gaming platform which consisits of three Games
          which are helped to reduce stress and anxiety while travelling.In these games the users will get cash prices and rewward points for getting high score.
        </p>
      </div>
    </div>
  );
}

export default About;
