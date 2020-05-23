import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'

const App = () => {
  const weather_url = 'http://api.weatherstack.com/current'
  const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY
  const [ countries, setCountries ] = useState([])
  const [ countryFilter, setCountryFilter ] = useState('')
  const [ capital, setCapital ] = useState('')
  const [ capitalWeather, setCapitalWeather ] = useState(null)

  const setFilterCountry = (event) => {
    setCountryFilter(event.target.value)
  }

  const countriesHook = () => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          const foundCountries =
            response.data
              .filter(country =>
                country.name.toLowerCase().includes(countryFilter.toLowerCase()))
          setCountries(foundCountries)
        })
  }

  const getWeatherHook = () => {
    if (countries.length === 1) {
      setCapital(countries[0].capital)
    }
    if (capital !== '') {
      axios.get(`${weather_url}?access_key=${weather_api_key}&query=${capital}`)
           .then(response => setCapitalWeather(response.data.current))
    }
  }

  useEffect(countriesHook, [countryFilter])
  useEffect(getWeatherHook, [capital, countries])

  return (
    <div>
      find countries <input value={countryFilter} onChange={setFilterCountry} />
      <br/>
      <Countries countries={countries}
                 capital={capital}
                 capitalWeather={capitalWeather} />
    </div>
  )
}

export default App