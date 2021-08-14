import React from "react";
import styled from "styled-components";

import {WeatherIcons} from "../App";

const WeatherContainer=styled.div`
     display: flex;
     flex-direction: row;
     width: 100%;
     justify-content: space-between;
     margin: 30px auto;
`;

const WeatherLogo = styled.img`
     width: 100px;
     height: 100px;
     margin: 5px auto;
`;

const Condition = styled.span`
     margin: 20px auto;
     text-transform: capitalize;
     font-size: 14px;
     & span {
          font-size: 28px;
     }
`;

const Location = styled.span`
     font-size: 2.5em;
     font-weight: bold;
`;

const WeatherInfoContainer = styled.div`
     display: flex;
     width: 90%;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
     flex-wrap: wrap;
`;

const WeatherLabel = styled.span`
     font-size: 1.5em;
     font-weight: bold;
     margin: 20px 25px 10px;
     text-align: start;
     width: 100%;
`;

const WeatherInfoIcons = {
    sunrise: "weather-app/icons/temp.svg",
    humidity: "weather-app/icons/humidity.svg",
    wind: "weather-app/icons/wind.svg",
    pressure: "weather-app/icons/pressure.svg",
};

const InfoContainer = styled.div`
     display: flex;
     margin: 5px 10px;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
`;

const InfoIcon = styled.img`
     width: 36px;
     height: 36px;
`;

const InfoLabel = styled.span`
     display: flex;
     flex-direction: column;
     font-size: 14px;
     margin: 15px;
     & span{
          font-size: 12px;
          text-transform: capitalize;
     }
`;

const InfoComponent = (props) => {
     const {name, value} = props;
     return (
          <InfoContainer>
               <InfoIcon src={WeatherInfoIcons[name]}/>
               {value}
               <InfoLabel>{name}</InfoLabel>
          </InfoContainer>
     );
};

const WeatherComponent = (props) => {
     const {weather} = props;
     const isDay = weather.weather[0].icon.includes('d') ? true : false;
     const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
     };

     return (
          <>
          <WeatherContainer>
               <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
               </Condition>
               <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
          </WeatherContainer>
          <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
          <WeatherInfoContainer>
               <WeatherLabel>Weather Info</WeatherLabel>
               <InfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
               <InfoComponent name="humidity" value={weather?.main?.humidity}/>
               <InfoComponent name="wind" value={weather?.wind?.speed}/>
               <InfoComponent name="pressure" value={weather?.main?.pressure}/>
          </WeatherInfoContainer>
          </>
     );
}
export default WeatherComponent;
