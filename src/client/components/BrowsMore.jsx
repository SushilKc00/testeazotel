import React from "react";
import "../static/style/BrowsMore.css";
import Vector from "../static/assets/Vector.png";
const BrowsMore = () => {
  return (
    <div className="container brows">
      <h1 className="heading">
        Browse more such happy experiences{" "}
        <img
          loading="lazy"
          decoding="async"
          className="vector"
          src={"../static/assets/Vector.png"}
          alt="vector"
        />
      </h1>
    </div>
  );
};

export default BrowsMore;
