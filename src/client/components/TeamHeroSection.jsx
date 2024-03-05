import { motion } from "framer-motion";
import React from "react";
import teamhero from "../static/assets/teamhero.png";
import "../static/style/TeamHeroSection.css";

const TeamHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="mt-5 pt-5 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start justify-content-center h-100 gap-2">
          <h1 className="teamherosection-left-title">OUR TEAM</h1>
        {/* <h2 className="teamherosection-left-subtitle">
          Lorem ipsum dolor sit amet sectetur.
        </h2>
        <p className="teamherosection-left-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
          </div>

          <div className="col-lg-6 d-flex  justify-content-lg-end justify-content-center  ">
          <motion.img loading="lazy" decoding="async" className="teamherosection-right-img" src={teamhero} alt="teamhero" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} />
          </div>
        </div>
      </div>
      {/* <div className="teamherosection-left-container">
        <h1 className="teamherosection-left-title">OUR TEAM</h1>
        <h2 className="teamherosection-left-subtitle">
          Lorem ipsum dolor sit amet sectetur.
        </h2>
        <p className="teamherosection-left-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="teamherosection-right-container">
        <motion.img className="teamherosection-right-img" src={teamhero} alt="" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} />
  </div>*/}
    </motion.div>
  );
};

export default TeamHeroSection;
