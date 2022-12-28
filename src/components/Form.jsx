import React from "react";
import data from "../data/sampledata";

export default function () {
  function getMeme() {
    const memes = data.data.memes;
    const maxLen = memes.length;
    const randomIdx = Math.floor(Math.random() * maxLen);
    console.log(memes[randomIdx]);
  }

  return (
    <div className="ui-form">
      <div className="inputArea">
        <input type="text" className="u-input" />
        <input type="text" className="d-input" />
      </div>

      <button onClick={getMeme} type="submit" className="submit">
        Get a new meme image
      </button>
    </div>
  );
}
