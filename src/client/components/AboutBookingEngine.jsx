import React from "react";
import "../static/style/AboutBookingEngine.css";
// import Booking from "";
const AboutBookingEngine = () => {
  return (
    <div className="container booking">
      <div className="booking-content">
        <div className="booking-about">
          <h1 className="booking-heading">
            A booking engine to get you endless bookings
          </h1>
          <p className="booking-para">
            Our Booking Engine is a hotel booking system that is fully
            customizable to your brand and website, offering users a simple and
            intuitive reservation process. Your guests will appreciate the
            seamless online booking experience that is secure and quick.
          </p>
        </div>
        <div className="booking-image">
          <img loading="lazy" decoding="async" src={"../static/assets/BookingEngine.png"} alt="booking" />
        </div>
      </div>
    </div>
  );
};

export default AboutBookingEngine;
