import React from "react";
import Card from "../Cards/Card";
import { fetchApi } from "../api";

export default class Row extends React.Component {
  //Stores the details of the movies
  state = {
    movieData: [],
  };

  componentDidMount() {
    this.getRow();
  }

  //Async function which fetches movies according to the url passed to it
  getRow = async () => {
    const rowData = await fetchApi(this.props.urlLink, 4);
    this.setState({ movieData: rowData });
  };

  render() {
    //Destructing this
    const { props } = this;

    return (
      <div style={{ margin: "1rem 0" }}>
        <h5 className="row-title" style={{ fontSize: "1.7rem" }}>
          {props.title}
        </h5>

        <div className="row">
          {this.state.movieData.map((movie) => (
            <Card key={movie.id} movie={movie} getData={props.getData} />
          ))}
        </div>
      </div>
    );
  }
}
