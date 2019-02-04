import React, { Component } from "react";

class Titles extends Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <h3 className="title-container__title">
          {" "}
          Find out the temperature, weather conditions and more...{" "}
        </h3>
      </div>
    );
  }
}

export default Titles;
