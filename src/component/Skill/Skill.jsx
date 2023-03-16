import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./Skill.css";
import Particle from "../Particle/Particle";
import { motion } from "framer-motion";

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

        <div className="row d-flex justify-content-center skillProgress">
          <motion.h2
            className="text-white title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 1.3 }}
          >
            Skill
          </motion.h2>

          {/* html&css */}
          <motion.div
            className="col-md-3 d-flex flex-column align-items-center mt-3 p-0"
            initial={{ rotate: 180, x: 250, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 1.5 }}
          >
            <motion.div
              className="circular-progress-html-css d-flex justify-content-center align-items-center"
              initial={{
                background: "conic-gradient(#d51e46, 0deg, #ededed 0deg)",
              }}
              animate={{
                background: "conic-gradient(#d51e46, 260deg, #ededed 0deg)",
              }}
              transition={{ duration: 0.8, type: "spring", delay: 2.5 }}
            >
              <span className="progress-value-html-css text-white">80%</span>
            </motion.div>
            <span className="mt-2 text-white">HTML & CSS</span>
          </motion.div>

          {/* php */}
          <motion.div
            className="col-md-3 d-flex flex-column align-items-center mt-3 p-0"
            initial={{ rotate: 180, x: -250, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 1.5 }}
          >
            <motion.div
              className="circular-progress-php d-flex justify-content-center align-items-center"
              initial={{
                background: "conic-gradient(#d51e46, 0deg, #ededed 0deg)",
              }}
              animate={{
                background: "conic-gradient(#d51e46, 180deg, #ededed 0deg)",
              }}
              transition={{ duration: 0.8, type: "spring", delay: 2.5 }}
            >
              <span className="progress-value-php text-white">50%</span>
            </motion.div>
            <span className="mt-2 text-white">PHP</span>
          </motion.div>

          {/* js */}
          <motion.div
            className="col-md-3 d-flex flex-column align-items-center mt-3 p-0"
            initial={{ rotate: 180, x: 250, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 1.5 }}
          >
            <motion.div
              className="circular-progress-javascript d-flex justify-content-center align-items-center"
              initial={{
                background: "conic-gradient(#d51e46, 0deg, #ededed 0deg)",
              }}
              animate={{
                background: "conic-gradient(#d51e46, 180deg, #ededed 0deg)",
              }}
              transition={{ duration: 0.8, type: "spring", delay: 2.5 }}
            >
              <span className="progress-value-javascript text-white">50%</span>
            </motion.div>
            <span className="mt-2 text-white">JavaScript</span>
          </motion.div>

          {/* english */}
          <motion.div
            className="col-md-3 d-flex flex-column align-items-center mt-3 p-0"
            initial={{ rotate: 180, x: -250, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 1.5 }}
          >
            <motion.div
              className="circular-progress-english d-flex justify-content-center align-items-center"
              initial={{
                background: "conic-gradient(#d51e46, 0deg, #ededed 0deg)",
              }}
              animate={{
                background: "conic-gradient(#d51e46, 180deg, #ededed 0deg)",
              }}
              transition={{ duration: 0.8, type: "spring", delay: 2.5 }}
            >
              <span className="progress-value-english text-white">50%</span>
            </motion.div>
            <span className="mt-2 text-white">English</span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Skill;
