import Gif from "./component/gif/Gif";
import data from "./data";
import Search from "./component/search/index";
import { useState } from "react";

import { Link } from "react-router-dom";

const axios = require("axios").default;

const Home = () => {
  const [keyword, setKeyword] = useState();
  const [gif, setGif] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "t39AvTM3pGK3gCyx3kQUbZotBt9vSCn2",
          q: keyword,
          limit: 12
        }
      });
      setGif(response.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInput = (e) => setKeyword(e.target.value);

  return (
    <div className="App">
      <Link exact to="/trending">
        Trending
      </Link>
      <Search
        keyword={keyword}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        gif={gif}
      />
      <div className="container">
        {data.map((gif, idx) => {
          if (gif.rating === "g") {
            return (
              <Gif
                key={gif.id}
                url={gif.url}
                description={gif.rating}
                title={gif.title}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Home;
