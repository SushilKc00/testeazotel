import React from "react";
import "../static/style/Achievement.css";
import Slider from "react-slick";
// import Award1 from "";
// import Award2 from "";
// import Award3 from "";
// import Award4 from "";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievement = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
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
    <div className="container award">
      <div className="heading">
        <span>
          <strong>Achievement </strong>
          we are proud of and
          <strong> Award's </strong>
          received because of
          <strong> YOU</strong>
        </span>
      </div>
      <div className="row award-section">
        <Slider {...settings}>
          <div className="award-card">
            <div className="card-content">
              <img loading="lazy" decoding="async" src={"../static/assets/Award1.png"} alt="award" />
            </div>
          </div>
          <div className="award-card">
            <div className="card-content">
              <img loading="lazy" decoding="async" src={"../static/assets/Award2.png"} alt="award" />
            </div>
          </div>
          <div className="award-card">
            <div className="card-content">
              <img loading="lazy" decoding="async" src={"../static/assets/Award3.png"} alt="awrad" />
            </div>
          </div>
          <div className="award-card">
            <div className="card-content">
              <img loading="lazy" decoding="async" src={"../static/assets/Award4.png"} alt="award" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="horizontel-line"></div>
    </div>
  );
};

export default Achievement;
