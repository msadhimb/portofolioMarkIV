import React, { Component } from "react";
import Slider from "react-slick";
import HeaderNav from "../Nav/HeaderNav";
import Container from "react-bootstrap/esm/Container";
import Me from "./me.jpg";
import Me2 from "./me2.jpeg";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Edu from "../Edu/Edu";
import Footer from "../Footer/Footer";
import "./Home.css";
import { motion } from "framer-motion";
import Experience from "../Experience/Experience";
import cv from "./assets/Muhamad Salman Adhim Baqy - Resume Mark II.pdf";

class Home extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <section id="about">
        <HeaderNav />
        <Container style={{ overflowX: "hidden" }}>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ paddingTop: "120px" }}
          >
            <div className="col-md-5 aboutDesc" style={{ fontSize: "15px" }}>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, type: "spring", delay: 0.8 }}
              >
                Muhamad Salman Adhim Baqy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, type: "spring", delay: 0.8 }}
              >
                5th-Semester student of Informatics Engineering Study Program,
                Faculty of Computer Science, Universitas Dian Nuswantoro who is
                enthusiastic, highly motivated, and a challenge seeker. I am
                able to create responsive websites using HTML, CSS, Javascript
                and PHP
              </motion.p>
              <motion.h3
                className="mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, type: "spring", delay: 0.8 }}
              >
                Get To Know Me
              </motion.h3>
              <motion.a
                className="btn"
                href="https://www.instagram.com/salmanadhim/"
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", delay: 0.8 }}
              >
                <i
                  className="fa-brands fa-instagram"
                  style={{ fontSize: "25px", color: "purple" }}
                ></i>
              </motion.a>
              <motion.a
                className="btn ms-3"
                href=""
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", delay: 1 }}
              >
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ fontSize: "25px", color: "green" }}
                ></i>
              </motion.a>
              <motion.a
                className="btn ms-3"
                href="https://www.youtube.com/channel/UCVnQ_F6_11x6DNxuAFIVqtA"
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", delay: 1.2 }}
              >
                <i
                  className="fa-brands fa-youtube"
                  style={{ fontSize: "25px", color: "red" }}
                ></i>
              </motion.a>
              <motion.a
                className="btn ms-3"
                href="https://github.com/msadhimb"
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", delay: 1.4 }}
              >
                <i
                  className="fa-brands fa-github"
                  style={{ fontSize: "25px", color: "grey" }}
                ></i>
              </motion.a>
              <motion.a
                className="btn ms-3 tooltips bottom"
                href={cv}
                initial={{ x: 250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", delay: 1.6 }}
                download
              >
                <i
                  className="fa-solid fa-file-pdf"
                  style={{ fontSize: "25px", color: "orange" }}
                ></i>
                <span className="tooltip-text">Download CV</span>
              </motion.a>
            </div>

            <div
              className="col-md-6 p-0 d-flex justify-content-center"
              style={{ overflow: "hidden" }}
            >
              <motion.div
                className="image"
                initial={{ rotate: 180, x: 250, opacity: 0 }}
                animate={{ rotate: 0, x: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring", delay: 0.8 }}
              >
                <Slider {...settings}>
                  <motion.img
                    src={Me}
                    alt=""
                    className="rounded-circle mx-auto d-block"
                  />
                  <motion.img
                    src={Me2}
                    alt=""
                    className="rounded-circle mx-auto d-block"
                  />
                </Slider>
              </motion.div>
            </div>
          </div>
        </Container>

        <Edu />

        <Skill />

        <Experience />

        <Project />

        <Footer />
      </section>
    );
  }
}

export default Home;
