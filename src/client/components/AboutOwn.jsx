import React from "react";
import "../static/style/AboutOwn.css";
// import SachinImg from "";
const AboutOwn = () => {
  return (
    <div className="container aboutown">
      <div className="row about">
        <div className="col-md-7 data">
          <h3>
            Meet the visionary <br />
            behind Eazotel:
          </h3>
          <h4 className="title name_h4">Sachin Kapoor</h4>
          <p className="para">
            Behind every successful idea, lies a dedicated leader. Get to know
            the CEO of Eazotel and their commitment to empowering hotels with
            intelligent booking solutions.
          </p>
        </div>
        <div className="col-md-5 img">
          <img loading="lazy" decoding="async" src={"../static/assets/Sachin.png"} alt="head" />
        </div>
        <h4 className="titlesecond name_2_h4">Sachin Kapoor</h4>
        <p className="parasecond">
          Behind every successful idea, lies a dedicated leader. Get to know the
          CEO of Eazotel and their commitment to empowering hotels with
          intelligent booking solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutOwn;
