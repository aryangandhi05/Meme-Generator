import React from "react";
import face from "./Troll-face.png";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <img src={face} className="header--image" alt="grid" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
