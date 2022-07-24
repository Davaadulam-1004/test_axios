import './App.css';
import { useEffect, useState } from 'react';
import { WeatherDetail, CountryDetail, Search, Section } from './components';
import {getCountriesByName, getDailyWeatherByCoords} from "./apis.js";
function App() {
  const [countries, setCountries] = useState([]);
  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    setWeathers([]);
  }, [countries]);
  const onCountryChange = async(countryName) => {
    const countries = await getCountriesByName(countryName);
    setCountries(countries);
  }
  const onSelectCountry = async(country) => {
    const data = await getDailyWeatherByCoords(country.lat, country.lng);
    setWeathers(data);
  }
  const renderContent = () => {
    if(weathers.length === 0){
      return countries.map((country, i) => (
        <CountryDetail country={country} onClick ={() => onSelectCountry(country)} key={i}/>
      )) 
    }
    return weathers.map((weather, i) => (
      <WeatherDetail weather={weather} key={i} />
    ))
  }
  return (
    <div>
      <Search onChange={onCountryChange}/>
      <div>
        <Section>
          {renderContent()}
        </Section>
      </div>
    </div>
  );
}
export default App;