import React, { Component } from 'react';
import './App.css';

import Titles from './components/Title/Titles';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

const API_KEY = 'b7f9636ca249bacec42b8f19a717c8c3';

class App extends Component {
  state = {
   temperature: undefined,
   country: undefined,
   city: undefined,
   humidity: undefined,
   description: undefined,
   error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      country: data.sys.country,
      city: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
    console.log(this.state.description);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          country={this.state.country} 
          city={this.state.city} 
          humidity={this.state.humidity} 
          description={this.state.description} 
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
