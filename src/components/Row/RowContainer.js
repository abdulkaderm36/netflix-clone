import React from "react";
import Row from "./Row";
import DetailsCard from "../Cards/DetailsCard";

export default class RowContainer extends React.Component {
  //Stores the details of the card which was clicked
  state = {
    cardData: {},
  };

  //Preparing the details-card-container to recieve the Card Details
  getData = (cardData) => {
    this.setState({ cardData: cardData });
    const detailCard = document.querySelector(".details-card-container");
    detailCard.style.display = "flex";
    detailCard.style.animation = "slide-up 0.5s ease-in";
    detailCard.style.animationFillMode = "forwards";
  };

  render() {
    return (
      <section style={{ margin: " 0 2rem" }}>
        <Row
          title="Trending"
          urlLink={"trending/movie/day"}
          getData={this.getData}
        />

        <Row
          title="Now Playing"
          urlLink={"movie/now_playing"}
          getData={this.getData}
        />

        <Row title="Popular" urlLink={"movie/popular"} getData={this.getData} />

        <Row
          title="Top Rated"
          urlLink={"movie/top_rated"}
          getData={this.getData}
        />

        <Row
          title="Upcoming"
          urlLink={"movie/upcoming"}
          getData={this.getData}
        />

        {/* The Popup when a card is clicked
        It shows the details of the card */}
        <DetailsCard data={this.state.cardData} />
      </section>
    );
  }
}
