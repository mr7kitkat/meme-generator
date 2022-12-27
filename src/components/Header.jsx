import React from "react";
import logo from "../images/TrollFace.svg";

export default function () {
  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      <h1 className="title">Meme Generator</h1>
    </header>
  );
}
