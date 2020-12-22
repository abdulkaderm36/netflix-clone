import React from "react";
import "./App.css";

//Import Components
import NavBar from "./components/NavBar/NavBar";
import MainSlide from "./components/MainSlide/MainSlide";
import RowContainer from "./components/Row/RowContainer";
import { fetchApi } from "./components/api";

class App extends React.Component {
  state = {
    //Stores the details for the MainSlide
    randomTrending: [],
  };

  componentDidMount() {
    this.getCard();
  }

  //Async func to get details for of the trending movies
  //Once the data is fetched then a random movie is selected
  getCard = async () => {
    const cardData = await fetchApi("trending/movie/day", 2);
    const randomCard = Math.floor(Math.random() * cardData.length);
    this.setState({ randomTrending: cardData[randomCard] });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainSlide randomTrending={this.state.randomTrending} />
        <RowContainer />
      </div>
    );
  }
}

export default App;
