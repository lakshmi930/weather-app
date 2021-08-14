import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherIcons = {
  "01d": "icons/sunny.svg",
  "01n": "icons/night.svg",
  "02d": "icons/day.svg",
  "02n": "icons/cloudy-night.svg",
  "03d": "icons/cloudy.svg",
  "03n": "icons/cloudy.svg",
  "04d": "icons/perfect-day.svg",
  "04n": "icons/cloudy-night.svg",
  "09d": "icons/rain.svg",
  "09n": "icons/rain-night.svg",
  "10d": "icons/rain.svg",
  "10n": "icons/rain-night.svg",
  "11d": "icons/storm.svg",
  "11n": "icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: 'Montserrat', sans-serif;
`

const AppLabel = styled.span`
  font: black;
  font-size: 2em;
  font-weight: bold;
`

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = 
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Current Weather</AppLabel>
      {city && weather ? (
      <WeatherComponent weather={weather} city={city}/> 
      ) : ( 
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
      )}
    </Container>
  );
}

export default App;
