import React from "react";
import "../static/style/Partner.css";
import Dinabite from "../static/assets/Dinabite.png";
import Autiller from "../static/assets/Autiller.png";
import Stripe from "../static/assets/Stripe.png";
import Razorpay from "../static/assets/Razorpay.png";
import Fiel from "../static/assets/Fiel.png";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <div className="container partner">
      <div className="heading">
        <h2>
          Our <strong>Incredible Partners</strong> who make it{" "}
          <strong>Easy</strong>
        </h2>
      </div>
      <div className="card-section">
        {/* <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img loading="lazy"
  decoding="async"
 src={Dinabite} alt='dinabite' class="d-block w-100" />

                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img loading="lazy"
  decoding="async"
 src={Autiller} alt='autiller' class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img loading="lazy"
  decoding="async"
 src={Razorpay} alt='razorpay' class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img loading="lazy"
  decoding="async"
 src={Fiel} alt='zoho' class="d-block w-100" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}

        <div className="partner-card">
          <Link to="https://dinabite.ai/" target="_blank">
            <img
              loading="lazy"
              decoding="async"
              src={Dinabite}
              alt="dinabite.com"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="partner-card">
          <Link to="https://www.autiller.com/" target="_blank">
            <img
              loading="lazy"
              decoding="async"
              src={Autiller}
              alt="autiller.com"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="partner-card">
          <Link to="https://stripe.com/en-in" target="_blank">
            <img
              loading="lazy"
              decoding="async"
              src={Stripe}
              alt="stripe.com"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="partner-card">
          <Link to="https://razorpay.com/" target="_blank">
            <img
              loading="lazy"
              decoding="async"
              src={Razorpay}
              alt="razorpay.com"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="partner-card">
          <Link to="https://fielmente.com/" target="_blank">
            <img
              loading="lazy"
              decoding="async"
              src={Fiel}
              alt="Fielmente.com"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partner;
