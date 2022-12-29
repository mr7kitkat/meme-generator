import React from "react";
import data from "../data/sampledata";

export default function () {
  const [image, set_image] = React.useState("");

  function getMeme() {
    const memes = data.data.memes;
    const maxLen = memes.length;
    const randomIdx = Math.floor(Math.random() * maxLen);
    set_image(memes[randomIdx].url);
  }

  return (
    <main className="body">
      <div className="ui-form">
        <div className="inputArea">
          <input type="text" className="u-input" />
          <input type="text" className="d-input" />
        </div>

        <button onClick={getMeme} type="submit" className="submit">
          Get a new meme image
        </button>
      </div>
      <section className="canvas">
        <img src={image} alt="" className="meme" />
      </section>
    </main>
  );
}
