import React, { Component } from 'react';
import classes from './Titles.css';

class Titles extends Component {
  render() {
    return (
      <div className={classes.leftWrapper}>
        <h1>Weather Finder</h1>
        <h3>Find out the temperature, weather conditions and more ...</h3>
      </div>
    );
  }
}

export default Titles;
