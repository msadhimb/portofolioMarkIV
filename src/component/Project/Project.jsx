import React, { Component } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import ProjectModel from "./ProjectModel";
import { motion } from "framer-motion";
import "./Project.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-next fa-solid fa-angle-right"
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev fa-solid fa-angle-left"
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div>
  );
};

export default class Project extends Component {
  state = {
    post: [],
    php: [],
    ci: [],
    react: [],
  };

  getPostAPI = () => {
    axios.get("projectList.json").then((res) => {
      this.setState({
        post: res.data.js,
        php: res.data.php,
        ci: res.data.ci,
        react: res.data.react,
      });
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false,
            autoplay: false,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
      ],
    };
    return (
      <section id="projects">
        <motion.div
          className="container"
          style={{
            paddingTop: "100px",
            paddingBottom: "50px",
            overflowY: "hidden",
            height: "auto",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring", delay: 1 }}
        >
          <div className="d-flex justify-content-center">
            <h2>Project</h2>
          </div>
          <div
            className="row d-flex justify-content-center m-0"
            style={{ padding: "0 25px" }}
          >
            <div className="d-flex text-start mt-5 mb-3">
              <h4>HTML, CSS (Bootstrtap) & Javascript</h4>
            </div>
            <Slider {...settings}>
              {this.state.post.map((js) => {
                return <ProjectModel key={js.id} data={js} />;
              })}
            </Slider>

            <div
              className="d-flex text-start mb-3"
              style={{ marginTop: "80px" }}
            >
              <h4>HTML, CSS (Bootstrap) & PHP</h4>
            </div>
            <Slider {...settings}>
              {this.state.php.map((php) => {
                return <ProjectModel key={php.id} data={php} />;
              })}
            </Slider>

            <div
              className="d-flex text-start mb-3"
              style={{ marginTop: "80px" }}
            >
              <h4>Code Igniter 4 (PHP Framework)</h4>
            </div>
            <Slider {...settings}>
              {this.state.ci.map((ci) => {
                return <ProjectModel key={ci.id} data={ci} />;
              })}
            </Slider>
            <div
              className="d-flex text-start mb-3"
              style={{ marginTop: "80px" }}
            >
              <h4>ReactJS</h4>
            </div>
            <Slider {...settings}>
              {this.state.react.map((react) => {
                return <ProjectModel key={react.id} data={react} />;
              })}
            </Slider>
          </div>
        </motion.div>
      </section>
    );
  }
}
