import React from "react";

export default function () {
  return (
    <form className="ui-form">
      <div className="inputArea">
        <input type="text" className="u-input" />
        <input type="text" className="d-input" />
      </div>

      <button type="submit" className="submit">
        Get a new meme image
      </button>
    </form>
  );
}
