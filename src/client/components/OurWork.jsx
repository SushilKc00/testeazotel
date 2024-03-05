import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Bhairahawagardenresortdesktop from "../static/assets/Bhairahawagardenresortdesktop.png";
import Bhairahawagardenresorttablet from "../static/assets/Bhairahawagardenresorttablet.png";
import BottomCurve from "../static/assets/BottomCurve.svg";
import Groove from "../static/assets/Groove.svg";
import Peaceatpeakdesktop from "../static/assets/Peaceatpeakdesktop.png";
import Peaceatpeaktablet from "../static/assets/Peaceatpeaktablet.png";
import Sparvhospitalitydesktop from "../static/assets/Sparvhospitalitydesktop.png";
import Sparvhospitalitytablet from "../static/assets/Sparvhospitalitytablet.png";
import "../static/style/OurWork.css";

const OurWork = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/our-work") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const aboutText = {
    Bhairahawa:
      "Home to the Gurkha soldiers and eight of the world's ten tallest mountains, including the mighty Everest, Nepal stands on the world's roof. Bhairahawa Garden Resort is a peaceful escape for travellers in the heart of Lumbini. Our 4-star retreat combines modern comforts with the cultural heritage of Buddha's birthplace. Enjoy a calm garden, delightful dining, and cosy rooms with city views. Whether exploring historic sites or relaxing with our amenities, you'll experience the true spirit of Nepal with Bhairahawa Resort.",
    Peace:
      "In luxury’s lap at Peace at Peak, Kanatal, witness the relaxing and laid-back life that is so characteristic of this sunny beach state. Located in Mandrem Rd, near the White Church on the North coast of Goa and overlooking the Arabian Sea, this resort in Mandrem, Goa will slow your time to a tranquil tempo. 17 Km and approximately 100 minutes from the city centre, SPARV beach resort in Goa expands over multiple acres of lush greenery, divided into the main hotel building with Standard, Deluxe and Premium category rooms. This accommodation in Mandrem coupled with a convenient location, and easy access to the city’s must-see destinations, makes for a perfect romantic or family holiday.",

    SPARV:
      "In luxury’s lap at SPARV Aulakh Resort, Goa, witness the relaxing and laid-back life that is so characteristic of this sunny beach state. Located in Mandrem Rd, near the White Church on the North coast of Goa and overlooking the Arabian Sea, this resort in Mandrem, Goa will slow your time to a tranquil tempo. 17 Km and approximately 100 minutes from the city centre, SPARV beach resort in Goa expands over multiple acres of lush greenery, divided into the main hotel building with Standard, Deluxe and Premium category rooms. This accommodation in Mandrem coupled with a convenient location, and easy access to the city’s must-see destinations, makes for a perfect romantic or family holiday.",
  };
  return (
    <div>
      <div className="margin-top"></div>
      <section className="container pt-5 pb-3">
        <div className="banner-heading text-center mt-4 mb-3">
          <h1 className=" textblue title-heading ps-3">
            Our Featured <span className="textorange">Work</span>
          </h1>
        </div>
        <div className="banner-text fontfamily-fm-b text-center">
          <p className=" textblue title-text fontfamily-fm-b textorange">
            Enabling our clients to get Easy with their businesses. Our goal is
            to nurture your vision and provide innovative, custom solutions for
            all your needs.
          </p>
        </div>
      </section>

      <section className="container custom-padding px-0">
        <div className="container d-none d-sm-none d-md-block d-lg-block">
          <div className="row flex-coulmn m-0">
            <div className="custom-container col-12  ">
              <div className="row m-0 p-0">
                <div className="img-frame col-lg-8 col-md-12 d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center justify-contant-center">
                    <div className="img-desktop d-flex align-items-center justify-content-center ">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={Bhairahawagardenresortdesktop}
                        alt=""
                        className="imgdesktopview"
                      />
                    </div>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Groove}
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={BottomCurve}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="img-tab d-md-none d-lg-flex d-xl-flex d-xxl-flex align-items-center justify-content-center">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Bhairahawagardenresorttablet}
                      alt=""
                      className="d-md-none d-lg-block d-xl-block  d-xxl-block imgtabview"
                    />
                    
                  </div>
                </div>
                <div className="cardContent col-lg-4 col-md-12 ">
                  <h3 className="cardtitle my-md-4">
                    Bhairahawa Garden Resort
                  </h3>
                  <p className="cardtext fontfamily-fm-b ">
                    {aboutText.Bhairahawa.substring(0, 300)}...
                  </p>
                  <Link
                    to="https://bhairahawagardenresort.com/"
                    target="_blank"
                    className="link-btn link-text fontfamily-fm-b"
                  >
                    View Live Website
                  </Link>
                </div>
              </div>
            </div>

            

            <div className="custom-container d-lg-flex col-12 d-md-none">
              <div className="row m-0 p-0">
                <div className="cardContent col-lg-4">
                  <h3 className="cardtitle">Peace at peak</h3>
                  <p className="cardtext fontfamily-fm-b">
                    {aboutText.Peace.substring(0, 300)}...
                  </p>
                  <Link
                    to="https://peaceatpeak.com/"
                    target="_blank"
                    className="link-btn link-text fontfamily-fm-b"
                  >
                    View Live Website
                  </Link>
                </div>
                <div className="img-frame col-lg-8 d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center justify-contant-center">
                    <div className="img-desktop d-flex align-items-center justify-content-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={Peaceatpeakdesktop}
                        alt=""
                        className="imgdesktopview"
                      />
                    </div>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Groove}
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={BottomCurve}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="img-tab d-md-none d-lg-flex d-xl-flex d-xxl-flex align-items-center justify-content-center">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Peaceatpeaktablet}
                      alt=""
                      className="d-md-none d-lg-block d-xl-block d-xxl-block imgtabview"
                    />
                  </div>
                </div>
              </div>
            </div>

            
            {/* for 2nd card md(medium) device */}

            <div className="custom-container d-lg-none col-12">
              <div className="row m-0 p-0">
                <div className="img-frame col-lg-8 col-md-12 d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center justify-contant-center">
                    <div className="img-desktop d-flex align-items-center justify-content-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={Peaceatpeakdesktop}
                        alt=""
                        className="imgdesktopview"
                      />
                    </div>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Groove}
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={BottomCurve}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="img-tab d-md-none d-lg-flex d-xl-flex d-xxl-flex align-items-center justify-content-center">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Peaceatpeaktablet}
                      alt=""
                      className="d-md-none d-lg-block d-xl-block d-xxl-block imgtabview"
                    />
                  </div>
                </div>
                <div className="cardContent col-md-12">
                  <h3 className="cardtitle my-md-4">Peace at peak</h3>
                  <p className="cardtext fontfamily-fm-b">
                    {aboutText.Peace.substring(0, 300)}...
                  </p>
                  <Link
                    to="https://peaceatpeak.com/"
                    target="_blank"
                    className="link-btn link-text fontfamily-fm-b"
                  >
                    View Live Website
                  </Link>
                </div>
              </div>
            </div>

            <div className="custom-container col-12">
              <div className="row m-0 p-0">
                <div className="img-frame col-lg-8 col-md-12 d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center justify-contant-center">
                    <div className="img-desktop d-flex align-items-center justify-content-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={Sparvhospitalitydesktop}
                        alt=""
                        className="imgdesktopview"
                      />
                    </div>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Groove}
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={BottomCurve}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="img-tab d-md-none d-lg-flex d-xl-flex d-xxl-flex align-items-center justify-content-center">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Sparvhospitalitytablet}
                      alt=""
                      className="d-md-none d-lg-block d-xl-block d-xxl-block imgtabview"
                    />
                  </div>
                </div>
                <div className="cardContent col-lg-4 col-md-12">
                  <h3 className="cardtitle my-md-5">SPARV Hospitality</h3>
                  <p className="cardtext fontfamily-fm-b">
                    {aboutText.SPARV.substring(0, 300)}...
                  </p>
                  <Link
                    to="https://sparvhospitality.com/"
                    target="_blank"
                    className="link-btn link-text fontfamily-fm-b"
                  >
                    View Live Website
                  </Link>
                </div>
              </div>
            </div>

           
          </div>
        </div>
        {/* mobile view */}
        <div className="container d-sm-block d-md-none d-lg-none">
          <div className="row flex-coulmn m-0">
            <div className="custom-container col-12">
              <div className="row flex-column m-0 p-0 gap2">
                <div className="img-frame col-12 d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center justify-contant-center">
                    <div className="img-desktop d-flex align-items-center justify-content-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={Bhairahawagardenresortdesktop}
                        alt=""
                        className="imgdesktopview"
                      />
                    </div>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Groove}
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={BottomCurve}
                      className="img-fluid "
                      alt=""
                    />
                  </div>
                  
                </div>
                <div className="cardContent col-12 col-md-6">
                  <h3 className="cardtitle">Bhairahawa Garden Resort</h3>
                  <p className="cardtext fontfamily-fm-b">
                    {aboutText.Bhairahawa.substring(0, 200)}...
                  </p>
                  <Link
                    to="https://bhairahawagardenresort.com/"
                    target="_blank"
                    className="link-btn link-text fontfamily-fm-b"
                  >
                    View Live Website
                  </Link>
                </div>
              </div>
            </div>
            <div className="custom-container col-12">
              <div className="row flex-column m-0 p-0 gap2">
                <div className="img-frame col-12 d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center justify-contant-center">
                    <div className="img-desktop d-flex align-items-center justify-content-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={Peaceatpeakdesktop}
                        alt=""
                        className="imgdesktopview"
                      />
                    </div>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Groove}
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={BottomCurve}
                      className="img-fluid imgtabview"
                      alt=""
                    />
                  </div>
                  {/* <div className="img-tab d-flex align-items-center justify-content-center">
                    <img loading="lazy"
  decoding="async"
 src={Peaceatpeaktablet} alt="" className="d-block " />
                  </div> */}
                </div>
                <div className="cardContent col-12 col-md-6">
                  <h3 className="cardtitle">Peace at peak</h3>
                  <p className="cardtext fontfamily-fm-b">
                    {aboutText.Peace.substring(0, 400)}...
                  </p>
                  <Link
                    to="https://peaceatpeak.com/"
                    target="_blank"
                    className="link-btn link-text fontfamily-fm-b"
                  >
                    View Live Website
                  </Link>
                </div>
              </div>
            </div>
            <div className="custom-container col-12">
              <div className="row flex-column m-0 p-0 gap2">
                <div className="img-frame col-12 col-md-6 d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center justify-contant-center">
                    <div className="img-desktop d-flex align-items-center justify-content-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={Sparvhospitalitydesktop}
                        alt=""
                        className="imgdesktopview"
                      />
                    </div>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={Groove}
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      src={BottomCurve}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  {/* <div className="img-tab d-flex align-items-center justify-content-center">
                    <img loading="lazy"
  decoding="async"

                      src={Sparvhospitalitytablet}
                      alt=""
                      className="d-block "
                    />
                  </div> */}
                </div>
                <div className="cardContent col-12 col-md-6">
                  <h3 className="cardtitle">SPARV Hospitality</h3>
                  <p className="cardtext fontfamily-fm-b">
                    {aboutText.SPARV.substring(0, 400)}...
                  </p>
                  <Link
                    to="https://sparvhospitality.com/"
                    target="_blank"
                    className="link-btn link-text fontfamily-fm-b"
                  >
                    View Live Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center  mb-4">
        <div className="bottom">
          <h2 className="bottom-text fontfamily-fm-b">
            Transformative experiences by design. Let’s work together.
          </h2>
        </div>
        <div className="">
          <Link
            to="/demo"
            className="link-btn link-text m-auto fontfamily-fm-b"
          >
            Book Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
