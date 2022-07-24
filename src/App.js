import React, {useState} from 'react';
import {getCountriesName, getDaily} from "./api.js";
import {WeatherInfo, CountryInfo, Search} from './components';


function App () {
    const [countries, setCountries] = useState([]);

    const onCountryChange = async(countryName) => {
        const countries = await getCountriesName(countryName);
        setCountries(countries);
    }

    console.log(countries);
     
    return (
        <div>
            <Search
            onChange={onCountryChange}
            />
        </div>
    )
}

export default App;