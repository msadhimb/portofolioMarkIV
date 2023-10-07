import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProjectModel from "./ProjectModel";
import { motion } from "framer-motion";
import "./Project.css";
import { db } from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-next fa-solid fa-angle-right"
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev fa-solid fa-angle-left"
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div>
  );
};

const Project = () => {
  const [post, setPost] = useState([]);
  const [php, setPhp] = useState([]);
  const [ci, setCi] = useState([]);
  const [react, setReact] = useState([]);
  const [vue, setVue] = useState([]);

  const getData = async () => {
    const response = await getDocs(
      query(collection(db, "project"), orderBy("created_at", "asc"))
    );

    const dataTemp = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setPost([]);
    setPhp([]);
    setCi([]);
    setReact([]);
    setVue([]);

    dataTemp.filter((data) => {
      if (data.tech.includes("javascript")) {
        setPost((post) => [...post, data]);
      }
      if (data.tech.includes("php")) {
        setPhp((php) => [...php, data]);
      }
      if (data.tech.includes("codeigniter4")) {
        setCi((ci) => [...ci, data]);
      }
      if (data.tech.includes("reactjs")) {
        setReact((react) => [...react, data]);
      }
      if (data.tech.includes("vuejs")) {
        setVue((vue) => [...vue, data]);
      }
    });
  };

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

  useEffect(() => {
    getData();
  }, []);

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
          {post.length !== 0 && (
            <React.Fragment>
              <div className="d-flex text-start mt-5 mb-3">
                <h4>HTML, CSS (Bootstrtap) & Javascript</h4>
              </div>
              <Slider {...settings}>
                {post.map((js) => {
                  return <ProjectModel key={js.id} data={js} />;
                })}
              </Slider>
            </React.Fragment>
          )}

          {php.length !== 0 && (
            <React.Fragment>
              <div
                className="d-flex text-start mb-3"
                style={{ marginTop: "80px" }}
              >
                <h4>HTML, CSS (Bootstrap) & PHP</h4>
              </div>
              <Slider {...settings}>
                {php.map((php) => {
                  return <ProjectModel key={php.id} data={php} />;
                })}
              </Slider>
            </React.Fragment>
          )}

          {ci.length !== 0 && (
            <React.Fragment>
              <div
                className="d-flex text-start mb-3"
                style={{ marginTop: "80px" }}
              >
                <h4>Code Igniter 4 (PHP Framework)</h4>
              </div>
              <Slider {...settings}>
                {ci.map((ci) => {
                  return <ProjectModel key={ci.id} data={ci} />;
                })}
              </Slider>
            </React.Fragment>
          )}

          {react.length !== 0 && (
            <React.Fragment>
              <div
                className="d-flex text-start mb-3"
                style={{ marginTop: "80px" }}
              >
                <h4>ReactJS</h4>
              </div>
              <Slider {...settings}>
                {react.map((react) => {
                  return <ProjectModel key={react.id} data={react} />;
                })}
              </Slider>
            </React.Fragment>
          )}

          {vue.length !== 0 && (
            <React.Fragment>
              <div
                className="d-flex text-start mb-3"
                style={{ marginTop: "80px" }}
              >
                <h4>VueJS</h4>
              </div>
              <Slider {...settings}>
                {vue.map((vue) => {
                  return <ProjectModel key={vue.id} data={vue} />;
                })}
              </Slider>
            </React.Fragment>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
