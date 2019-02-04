import React from "react";

const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input placeholder="Country..." name="country" type="text" />
      <input placeholder="City..." name="city" type="text" />
      <button> Get Weather </button>{" "}
    </form>{" "}
  </div>
);

export default Form;
