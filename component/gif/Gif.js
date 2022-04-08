import "./Gif.css";

const Gif = ({ url, title, description }) => {
  return (
    <div className="Gif-wrapper">
      <div className="content-wrapper">
        <div className="Gif-image">
          <img src={url} alt="gif"></img>
        </div>
        <div className="Gif-content">
          <p className="title">{title}</p>
          <p className="rating">Rating {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Gif;
