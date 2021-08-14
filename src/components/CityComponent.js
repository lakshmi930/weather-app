import styled from "styled-components";

const WeatherLogo = styled.img`
     width: 140px;
     height: 140px;
     margin: 40px auto;
`

const ChooseCityLabel = styled.span`
     font: black;
     font-size: 1.5em;
     margin: 10px auto;
`
const SearchBox = styled.form`
     display: flex;
     flex-direction: row;
     border: rgb(0,0,0) solid 1px;
     border-radius: 2px;
     font: rgb(0,0,0);
     font-size: 1.5em;
     margin: 10px auto;

     & input{
          padding: 10px;
          font-size: 1em;
          border: none;
          outline: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: bold;
     }

     & button{
          cursor: pointer;
          color: rgb(255,255,255);
          background-color: rgb(0,0,0);
          border: none;
          outline: none;
          font-size: 1em;
          font-family: 'Montserrat', sans-serif;
          font-weight: bold;
          padding: 0 10px;
     }
`

const CityComponent = (props) => {
     const {updateCity, fetchWeather} = props;
     return (
          <>
               <WeatherLogo src="/icons/perfect-day.svg"/>
               <ChooseCityLabel>Enter the City</ChooseCityLabel>
               <SearchBox onSubmit={fetchWeather}>
                    <input placeholder="City" onChange={(e) => updateCity(e.target.value)}/>
                    <button type="submit">Search</button>
               </SearchBox>
          </>
     );
};

export default CityComponent;
