import React from "react";

export default function SlideInfo(props) {
  return (
    <div
      className="slide-info"
      style={{ backgroundColor: "rgba(100,100,100, 0.5)" }}
    >
      <h5 className="slide-title">{props.title}</h5>
      <div
        className="slide-description"
        style={{ fontSize: "1rem", margin: "1rem 0" }}
      >
        {props.overview}
      </div>

      <div className="slide-controls">
        <button className="play-btn">
          <i className="fas fa-play" style={{ marginRight: "5px" }}></i>
          Play
        </button>

        <button className="my-list-btn">
          <i className="fas fa-plus" style={{ marginRight: "5px" }}></i>
          My List
        </button>
      </div>
    </div>
  );
}
