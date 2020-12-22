import React from "react";

export default function Details_Card(props) {
  //An empty div if the data is empty
  if (!props.data) {
    return <div className="details-card-container"></div>;
  }

  return (
    <div className="details-card-container">
      <div className="details-card">
        <div
          className="detail-image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              //If the width of the screen is lessthan equal to 600 then show poster
              //else the backdrop if it exist if not then show poster
              window.innerWidth <= 600
                ? props.data.poster_path
                : props.data.backdrop_path
                ? props.data.backdrop_path
                : props.data.poster_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>

        <div className="info-container">
          <div className="detail-title">
            {props.data.title ? props.data.title : props.data.original_name}
          </div>
          <div className="detail-tagline">
            {props.data.tagline ? props.data.tagline : ""}
          </div>
          <div className="detail-rating">
            Rating: <span>{props.data.vote_average}</span>
            <i
              className="fas fa-star"
              style={{ color: "yellow", padding: "0 0.5rem" }}
            ></i>
          </div>
          <div className="detail-overview" style={{ fontSize: "1rem" }}>
            {props.data.overview}
          </div>
          <div className="detail-budget">
            Budget: $
            <span>
              {props.data.budget !== 0 ? props.data.budget : "No Info"}
            </span>
          </div>
          <div className="detail-revenue">
            Revenue: $
            <span>
              {props.data.revenue !== 0 ? props.data.revenue : "No Info"}
            </span>
          </div>
          <div className="detail-more-info">
            More Info:
            <a href={props.data.homepage} className="homepage">
              {props.data.homepage ? props.data.title : "N/A"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//Event for the DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".details-card-container");
  const video = document.querySelector(".details-card .detail-image");
  const title = document.querySelector(".details-card .title");
  const overview = document.querySelector(".details-card .overview");

  //EventListener for click on the container
  //If clicked then close the details card
  container.addEventListener("click", () => {
    container.style.animation = "slide-down 0.5s ease-in";
    container.style.animationFillMode = "forwards";

    container.addEventListener("animationend", () => {
      //If the animation of slide-down ended then clear all the info in the details card
      if (container.style.animation === "slide-down 0.5s ease-in") {
        video.style.backgroundImage = "";
        title.innerText = "";
        overview.innerText = "";
      }
    });
  });
});
