import React from "react";
import Udinus from "./udinus.jpg";
import "./Edu.css";
import { motion } from "framer-motion";

const Edu = () => {
  return (
    <section id="edu">
      <motion.div
        className="container"
        style={{ overflowX: "hidden" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "spring", delay: 1 }}
      >
        <h2 className="mt-5">Education</h2>
        <div className="row d-flex justify-content-center mt-3 align-items-center">
          <div className="col-md-5 mt-3 p-0">
            <img
              src={Udinus}
              alt="udinus"
              className="mx-auto d-block rounded udinusImg"
            />
          </div>
          <div className="col-md-7 mt-3 desc">
            <h3>Universitas Dian Nuswantoro</h3>
            <p>
              Universitas Dian Nuswantoro, the place where I was introduced to
              the world of programming before I fell in love with this world.
              This is where I developed the ability to think critically, problem
              solving, and of course my coding skill. For the first time I tried
              to make a line of code, I was very difficult to understand it, but
              precisely because it was difficult that I became challenged to
              master it, especially in the field of web developer.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Edu;
