import styled from "styled-components";

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

const CityComponent = styled.div`
  display: flex;
  flex-direction: column;
`

const WeatherComponent = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Container>
      <AppLabel>Current Weather</AppLabel>
      <CityComponent>City Component</CityComponent>
      <WeatherComponent>Weather Component</WeatherComponent>
    </Container>
  );
}

export default App;
