import React, { Component } from 'react';
// import classes from './Form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input placeholder="Country..." name="country" type="text"/>
          <input placeholder="City..." name="city" type="text" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
