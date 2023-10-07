import React from "react";
import "./ProjectModel.css";

const ProjectModel = (props) => {
  return (
    <div className="row justify-content-evenly d-flex">
      <div className="col-md-5 d-flex justify-content-center align-items-center projectImg">
        <img
          src={process.env.PUBLIC_URL + "/" + props.data.gambar}
          alt="pict"
          className="projectImg d-block"
        />
      </div>
      <div className="col-md-6 d-flex justify-content-center flex-column align-items-center">
        <h4>{props.data.title}</h4>
        <p style={{ fontSize: "15px" }}>{props.data.desc}</p>
        {props.data.linkDemo !== "" && (
          <a
            href={props.data.linkDemo}
            className="btn btnDemo mb-2"
            style={{
              height: "30px",
              fontSize: "13px",
              display: "flex",
              alignItems: "center",
              width: "85px",
              justifyContent: "center",
              padding: "0px 0px",
            }}
          >
            Link
          </a>
        )}
        {props.data.linkGithub !== "" && (
          <a
            href={props.data.linkGithub}
            className="btn btn-secondary"
            style={{
              height: "30px",
              fontSize: "13px",
              display: "flex",
              alignItems: "center",
              width: "95px",
              justifyContent: "center",
            }}
          >
            Github Link
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModel;
