import React from "react";

export default function () {
  const [allMemeImages, set_AllMemeImage] = React.useState({});

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((rawdata) => rawdata.json())
      .then((data) => set_AllMemeImage(data));
  }, []);

  const [meme, set_meme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const maxLength = memeArray.length;
    const randomIndex = Math.floor(Math.random() * maxLength);

    set_meme((memeObject) => {
      return {
        ...memeObject,
        randomImage: memeArray[randomIndex].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    set_meme((memeObject) => {
      return {
        ...memeObject,
        [name]: value,
      };
    });
  }

  return (
    <main className="body">
      <div className="ui-form">
        <div className="inputArea">
          <input
            type="text"
            className="u-input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="d-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button onClick={getMemeImage} type="submit" className="submit">
          Get a new meme image
        </button>
      </div>
      <section className="canvas">
        <p className="topText">{meme.topText}</p>
        <img src={meme.randomImage} alt="" className="meme" />
        <p className="bottomText">{meme.bottomText}</p>
      </section>
    </main>
  );
}
