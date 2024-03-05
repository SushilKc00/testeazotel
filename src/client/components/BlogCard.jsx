import React from "react";
import "../static/style/BlogCard.css";
import Card1 from "../static/assets/card1.png";
import Card2 from "../static/assets/card2.png";
import Card3 from "../static/assets/card3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlogCard = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container blog">
      <div className="heading">
        <span>
          Go through our <strong> latest blogs</strong>
        </span>
      </div>
      <div className="row blog-section">
        <Slider {...settings}>
          <div className="blog-card">
            <div className="card-content">
              <img loading="lazy" decoding="async" src={"../static/assets/card1.png"} alt="blog" />
            </div>
          </div>
          <div className="blog-card">
            <div className="card-content">
              <img loading="lazy" decoding="async" src={"../static/assets/card2.png"} alt="blog" />
            </div>
          </div>
          <div className="blog-card">
            <div className="card-content">
              <img loading="lazy" decoding="async" src={"../static/assets/card3.png"} alt="blog" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BlogCard;
