import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import { db } from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const Experience = () => {
  const [data, setData] = useState([]);
  const dataCollection = collection(db, "experience");

  const getData = async () => {
    const querySnapshot = await getDocs(
      query(dataCollection, orderBy("created_at", "desc"))
    );

    setData(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="experience">
      <div className="container">
        <h2 className="mt-5 mb-3">Work Experience</h2>
        <VerticalTimeline lineColor="#474747" animate={true}>
          {data.map((item, index) => {
            const desc = item.deskripsi.split("-");
            return (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--work"
                contentArrowStyle={
                  item.status === "selesai"
                    ? { borderRight: "7px solid  rgb(46, 209, 84)" }
                    : { borderRight: "7px solid  rgb(19, 68, 158)" }
                }
                date={item.tanggal}
                dateClassName={`date-asis ${
                  index % 2 === 0 ? "text-start" : "text-end"
                }`}
                iconStyle={
                  item.status === "selesai"
                    ? {
                        background: "rgb(46, 209, 84)",
                        color: "#fff",
                        width: "30px",
                        height: "30px",
                        marginTop: "15px",
                        marginLeft: "-15px",
                      }
                    : {
                        background: "rgb(19, 68, 158)",
                        color: "#fff",
                        width: "30px",
                        height: "30px",
                        marginTop: "15px",
                        marginLeft: "-15px",
                      }
                }
              >
                <h4 className="vertical-timeline-element-title">
                  <strong>{item.posisi}</strong>
                </h4>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/" + item.gambar}
                    alt="graphie-logo"
                    style={{ width: 25 }}
                    className="me-2"
                  />
                  <h5 className="vertical-timeline-element-subtitle">
                    {item.tempat}
                  </h5>
                </div>

                <h5 className="mt-2 text-start">{item.nama_project}</h5>
                <div>
                  <ul>
                    {desc.map((descItem, index) => {
                      if (descItem === "") return;
                      return (
                        <li className="text-start" key={index}>
                          {descItem}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="d-flex justify-content-end">
                  {item.link_project && (
                    <a
                      href={item.link_project}
                      style={{
                        fontWeight: 500,
                        textDecoration: "none",
                        color: "green",
                      }}
                      className="me-2"
                    >
                      See Project
                    </a>
                  )}
                  {item.sertifikat && (
                    <a
                      href={item.sertifikat}
                      style={{ fontWeight: 500, textDecoration: "none" }}
                      className="me-2"
                    >
                      See Certificate
                    </a>
                  )}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
