import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import abbauf from "./companLogo/abbauf.png";
import graphie from "./companLogo/graphie.png";
import udinus from "./companLogo/udinus.png";
import Len from "./companLogo/Len.png";
import senatMhsFEBUksw from "./companLogo/senatMahasiswa.PNG";
import "./Experience.css";
import sertif from "./assets/sertif.jpg";

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="mt-5 mb-3">Work Experience</h2>
        <VerticalTimeline lineColor="#474747" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(19, 68, 158)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(19, 68, 158)" }}
            dateClassName="text-start date-asis"
            date="February 2023 - Now"
            iconStyle={{
              background: "rgb(19, 68, 158)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Front End Web Developer</strong>
            </h4>
            <div className="d-flex justify-content-center align-items-center">
              <div
                style={{ background: "white", padding: 2, borderRadius: 50 }}
                className="me-2"
              >
                <img
                  src={Len}
                  alt="graphie-logo"
                  style={{ width: 25 }}
                  className="d-block mx-auto"
                />
              </div>
              <h5 className="vertical-timeline-element-subtitle">
                PT Len Industri (Persero)
              </h5>
            </div>
          </VerticalTimelineElement>

          {/* UKSW */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-black text-end"
            contentArrowStyle={{ borderRight: "7px solid  rgb(46, 209, 84)" }}
            date="February 2023 - April 2023"
            iconStyle={{
              background: "rgb(46, 209, 84)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Full Stack Web Developer</strong>
            </h4>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={senatMhsFEBUksw}
                alt="graphie-logo"
                style={{ width: 40 }}
                className="me-2"
              />
              <h5 className="vertical-timeline-element-subtitle">
                Senat Mahasiswa FEB UKSW
              </h5>
            </div>

            <h5 className="mt-2 text-start">Senat Mahasiswa FEB UKSW</h5>
            <div>
              <ul>
                <li className="text-start">
                  Developed dashboard admin and dashboard user.
                </li>
                <li className="text-start">
                  Developed dashboard admin and dashboard user using Bootstrap
                  CSS and React JS.
                </li>
                <li className="text-start">
                  Developed REST API to managed data.
                </li>
                <li className="text-start">
                  Managed to make CRUD using Rest API.
                </li>
                <li className="text-start">
                  Managed to make Login using JWT Token.
                </li>
                <li className="text-start">
                  Push, and pull to git and from git.
                </li>
                <li className="text-start">
                  Managed to host website in RumahWeb Hosting.
                </li>
                <li className="text-start">
                  Successfully work as Full Stack Web Developer to developed
                  this website.
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <a
                href="https://senat-mahasiswa-feb-uksw.my.id"
                style={{
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "green",
                }}
              >
                See Project
              </a>
            </div>
          </VerticalTimelineElement>

          {/* Lomba */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-black text-start"
            contentArrowStyle={{ borderRight: "7px solid  rgb(46, 209, 84)" }}
            date="January 2023"
            iconStyle={{
              background: "rgb(46, 209, 84)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>
                Dinus Fest 2023 Information Technology Competition Web
                Development
              </strong>
            </h4>
            <div className="d-flex justify-content-center align-items-center">
              <div
                style={{ background: "white", padding: 2, borderRadius: 50 }}
                className="me-2"
              >
                <img
                  src={udinus}
                  alt="graphie-logo"
                  style={{ width: 25 }}
                  className="d-block mx-auto"
                />
              </div>
              <h5 className="vertical-timeline-element-subtitle">
                Universitas Dian Nuswantoro
              </h5>
            </div>

            <h5 className="mt-2 text-start">BatikPedia</h5>
            <div>
              <ul>
                <li className="text-start">
                  Developed dashboard using React JS.
                </li>
                <li className="text-start">
                  Mapping data from JSON data using axios.
                </li>
                <li className="text-start">
                  Push, pull, and merge code using Git.
                </li>
                <li className="text-start">
                  Successfully work as a team to developed a project for
                  competition.
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <a
                href="https://batik-pedia.vercel.app/user"
                style={{
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "green",
                }}
                className="me-2"
              >
                See Project
              </a>
              <a
                href="https://drive.google.com/file/d/1ImLHqTqrtf4Qp1l-61_vWGYGKixrFUYb/view"
                style={{ fontWeight: 500, textDecoration: "none" }}
                className="me-2"
              >
                See Certificate
              </a>
            </div>
          </VerticalTimelineElement>

          {/* Asisten */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid rgb(46,209, 84)" }}
            dateClassName="text-end"
            date="November 2022 - December 2022"
            iconStyle={{
              background: "rgb(46,209, 84)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Laboratorium Assistant</strong>
            </h4>
            <div className="d-flex justify-content-center align-items-center">
              <div
                style={{ background: "white", padding: 2, borderRadius: 50 }}
                className="me-2"
              >
                <img
                  src={udinus}
                  alt="graphie-logo"
                  style={{ width: 25 }}
                  className="d-block mx-auto"
                />
              </div>
              <h5 className="vertical-timeline-element-subtitle">
                Universitas Dian Nuswantoro
              </h5>
            </div>
            <h5 className="mt-2 text-start">Assistant</h5>
            <div>
              <ul>
                <li className="text-start">
                  Help certain lecturer students who experience errors
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Graphie */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-black text-start"
            date="November 2022 - December 2022"
            contentArrowStyle={{ borderRight: "7px solid  rgb(209, 46, 57)" }}
            iconStyle={{
              background: "rgb(209, 46, 57)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Front End Developer</strong>
            </h4>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={graphie}
                alt="graphie-logo"
                style={{ width: 25 }}
                className="me-2"
              />
              <h5 className="vertical-timeline-element-subtitle">
                PT Graphie Global Interaktif
              </h5>
            </div>
            <h5 className="mt-2 text-start">Tabpedia</h5>
            <div>
              <ul>
                <li className="text-start">
                  Developed dashboard using ReactJS
                </li>
                <li className="text-start">
                  Managed to make dummy CRUD for testing
                </li>
                <li className="text-start">
                  Push, pull, and merge code using Git
                </li>
                <li className="text-start">
                  Completed the displacement project successfully
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Abbauf */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-black text-end"
            contentArrowStyle={{ borderRight: "7px solid  rgb(46, 209, 84)" }}
            date="August 2022 - December 2022"
            iconStyle={{
              background: "rgb(46, 209, 84)",
              color: "#fff",
              width: "30px",
              height: "30px",
              marginTop: "15px",
              marginLeft: "-15px",
            }}
          >
            <h4 className="vertical-timeline-element-title">
              <strong>Front End Developer</strong>
            </h4>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={abbauf}
                alt="graphie-logo"
                style={{ width: 25 }}
                className="me-2"
              />
              <h5 className="vertical-timeline-element-subtitle">
                PT Abbauf Mulia Konsultan Teknologi
              </h5>
            </div>

            <h5 className="mt-2 text-start">WebGIS Intelligence</h5>
            <div>
              <ul>
                <li className="text-start">
                  Developed dashboard using CodeIgniter 4
                </li>
                <li className="text-start">
                  Developed dashboard ui using Bootstrap 4
                </li>
                <li className="text-start">
                  Push, pull, and merge code using Git
                </li>
                <li className="text-start">
                  Successfully work as a team to developed a dashboard
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <a
                href={sertif}
                style={{ fontWeight: 500, textDecoration: "none" }}
              >
                See Certificate
              </a>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
