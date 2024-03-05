import React from "react";
import "../static/style/FindOwn.css";
import Facebook from "../static/assets/image 1.png";
import Instagram from "../static/assets/image 2.png";
import Twitter from "../static/assets/image 3.png";
import Linkedin from "../static/assets/image 5.png";
import { Link } from "react-router-dom";

const FindOwn = () => {
  return (
    <div className=" container findown">
      <h3>FIND US ON</h3>

      <div className="socialicon">
        <Link
          to="https://instagram.com/eazotel?igshid=MzRlODBiNWFlZA== "
          target="_blank"
        >
          <img
            loading="lazy"
            decoding="async"
            className="socialimage "
            src={Instagram}
            alt="instagram"
          />
        </Link>
        <Link to="/">
          <img
            loading="lazy"
            decoding="async"
            className="socialimage"
            src={Facebook}
            alt="facebook"
          />
        </Link>
        <Link to="/">
          <img
            loading="lazy"
            decoding="async"
            className="socialimage"
            src={Twitter}
            alt="youtube"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/company/eazotel/mycompany/"
          target="_blank"
        >
          <img
            loading="lazy"
            decoding="async"
            className="socialimage"
            src={Linkedin}
            alt="linkedin"
          />
        </Link>
      </div>
    </div>
  );
};

export default FindOwn;
