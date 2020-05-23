import React from 'react'

const Countries = ({countries, capital, capitalWeather}) => {
  if (countries.length > 10) {
    return (
      <>
        Too many matches, specify another filter
      </>
    )
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map(country => <li key={country.name}>{country.name}</li>)}
      </ul>
    )
  } else if (countries.length === 1) {
    const country = countries[0]
    if (capitalWeather) {
      const temp = capitalWeather.temperature
      const wind_speed = capitalWeather.wind_speed
      const wind_dir = capitalWeather.wind_dir
      const weather_icon_url = capitalWeather.weather_icons[0]
      return (
          <>
            <h1>{capital}</h1>
            <div>capital {capital}</div>
            <div>population {country.population}</div>
            <h2>languages</h2>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={country.flag} alt="flag" width="50px" height="60px" />
            <h2>Weather in {capital}</h2>
            <div><strong>temperature:</strong> {temp} Celsius</div>
            <img src={weather_icon_url} alt="weather_icon" width="50px" height="60px" />
            <div><strong>wind:</strong> {wind_speed} mph direction {wind_dir}</div>
          </>
      )
    } else {
      return (
        <>Loading...</>
      )
    }
  } else {
    return (
      <>
        No matches
      </>
    )
  }
}

export default Countries