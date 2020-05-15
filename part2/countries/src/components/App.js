import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ countryFilter, setCountryFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const setFilterCountry = (event) => {
    setCountryFilter(event.target.value)
  }

  const Countries = ({countries, countryFilter}) => {
    const foundCountries =
        countries.filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))
    if (foundCountries.length > 10) {
        return (
          <>
            Too many matches, specify another filter
          </>
        )
    } else if (foundCountries.length > 1) {
        return (
            <ul>
              {foundCountries.map(country => <li key={country.name}>{country.name}</li>)}
            </ul>
          )
    } else if (foundCountries.length === 1) {
        return (
            <>
              <h1>{foundCountries[0].name}</h1>
              <div>capital {foundCountries[0].capital}</div>
              <div>population {foundCountries[0].population}</div>
              <h2>languages</h2>
              <ul>
                  {foundCountries[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
              </ul>
              <img src={foundCountries[0].flag} alt="flag" width="50px" height="60px" />
            </>
        )
    } else {
        return (
            <>
              No matches
            </>
        )
    }
  }

  return (
    <div>
      find countries <input value={countryFilter} onChange={setFilterCountry} />
      <br/>
      <Countries countries={countries} countryFilter={countryFilter} />
    </div>
  )
}

export default App