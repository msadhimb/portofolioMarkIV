import React from "react";
import "./Skill.css";
import Particle from "../Particle/Particle";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaLaravel, FaPhp } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoVuejs,
} from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";

const Skill = () => {
  return (
    <>
      <motion.div
        className="skill rounded mt-5 container"
        id="particles-js"
        style={{ overflowX: "hidden", overflowY: "hidden" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "spring", delay: 1 }}
      >
        {/* <Particles className='particles' params={particleConfig}/> */}
        <Particle />
        <div className="row d-flex justify-content-center align-items-center h-100 skillProgress">
          <div className="col-md-3 col-6">
            <AiFillHtml5 className="icon" color="#E44D26" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <FaCss3Alt className="icon" color="#1572B6" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <FaBootstrap className="icon" color="#7952B3" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <BiLogoTailwindCss className="icon" color="#06B6D4" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <BiLogoJavascript className="icon" color="#F7DF1E" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <BiLogoReact className="icon" color="#61DAFB" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <BiLogoVuejs className="icon" color="#42B883" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <FaPhp className="icon" color="#6F42C1" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <FaLaravel className="icon" color="#FF2D20" size={100} />
          </div>
          <div className="col-md-3 col-6">
            <DiCodeigniter className="icon" color="#DE4C36" size={100} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skill;
