import { useEffect, useState } from "react";
import Gif from "../gif/Gif";
import { Link } from "react-router-dom";
const axios = require("axios").default;

const Trending = () => {
  const [gif, setGif] = useState([]);
  const trendingQuery = async () => {
    try {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending",
        {
          params: {
            api_key: "t39AvTM3pGK3gCyx3kQUbZotBt9vSCn2"
          }
        }
      );
      setGif(response.data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    trendingQuery();
  });

  return (
    <>
      <h1>This is trending page</h1>
      <Link to="/">Back</Link>
      <div className="container">
        {gif.map((item) => (
          <Gif
            key={item.id}
            url={item.images.original.url}
            title={item.title}
            description={item.rating}
          />
        ))}
      </div>
    </>
  );
};

export default Trending;
