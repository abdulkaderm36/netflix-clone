import React from "react";

//Importing Components
import SlideInfo from "./SlideInfo";

export default class MainSlide extends React.Component {
  render() {
    const { props } = this;

    //Show an empty div if randomTrending is empty
    if (!props.randomTrending) {
      return <div></div>;
    }

    //Destructing the randomTrending Object
    const {
      title,
      overview,
      backdrop_path,
      poster_path,
    } = props.randomTrending;

    return (
      <section id="slides-container" style={{ width: "100vw" }}>
        <div className="slide">
          <div
            className="slide-image"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${
                backdrop_path ? backdrop_path : poster_path
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="fade"></div>
        </div>

        <SlideInfo
          title={title ? title : props.randomTrending.name}
          overview={overview}
        />
      </section>
    );
  }
}
