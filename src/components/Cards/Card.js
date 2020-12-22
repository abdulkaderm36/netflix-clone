import React from "react";
import { fetchMovie } from "../api";

export default class Card extends React.Component {
  //Async function which fetches data according to the movie-id
  //Passes the details to the Details Card
  showInfo = async (e) => {
    const movie_id = e.target.getAttribute("data-movie-id");
    const data = await fetchMovie(movie_id);
    this.props.getData(data);
  };

  render() {
    return (
      <div
        className="card"
        data-movie-id={this.props.movie.id}
        style={{ margin: "0.5rem 0.8rem 1rem 0" }}
        onClick={this.showInfo}
      >
        <div
          className="poster-img"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.movie.poster_path})`,
            width: "10rem",
            height: "15rem",
            backgroundSize: "cover",
            pointerEvents: "none",
          }}
        ></div>
      </div>
    );
  }
}
