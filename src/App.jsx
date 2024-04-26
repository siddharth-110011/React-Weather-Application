import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

import { SearchByCity } from './SearchByCity';

import "./App.css";


export default function WeatherReport() {
  const [cityInput, setCityInput] = useState("");
  const [cityWeatherDetails, setCityWeatherDetails] = useState(null);

  let tempUnitSymbol, tempImage;
  if (cityWeatherDetails?.temperature.unit === "C") {
    tempUnitSymbol = (
      <span>
        <sup>&#176;</sup>C
      </span>
    );

    if (cityWeatherDetails.temperature.value > 30) {
      tempImage = <span>&#127777;</span>;
    } else {
      tempImage = <span>&#127780;</span>;
    }
  } else if (cityWeatherDetails?.temperature.unit === "F") {
    tempUnitSymbol = (
      <span>
        <sup>&#176;</sup>F
      </span>
    );

    if (cityWeatherDetails.temperature.value > 86) {
      tempImage = <span>&#127777;</span>;
    } else {
      tempImage = <span>&#127780;</span>;
    }
  }

  return (
    <>
      <h1>Weather Report Dashboard</h1>
      <SearchByCity  onCityInput={setCityInput} cityInput={cityInput} setCityWeatherDetails={setCityWeatherDetails} />
      {cityWeatherDetails ? (
        <div className="weather-details-container">
          <div className="city">
            <div className="heading">City</div>
            <div className="content">{cityWeatherDetails.city}</div>
            <div className="date">{cityWeatherDetails.Date}</div>
          </div>
          <div className="temperature">
            <div className="heading">Temperature</div>
            <div className="content">
              {cityWeatherDetails.temperature.value}
              {tempUnitSymbol}
              {tempImage}
            </div>
          </div>
          <div className="humidity">
            <div className="heading">Humidity</div>
            <div className="content">
              {cityWeatherDetails.humidity.value +
                " " +
                cityWeatherDetails.humidity.unit}
            </div>
          </div>
          <div className="wind">
            <div className="heading">Windspeed</div>
            <div className="content">
              {cityWeatherDetails.windSpeed.value +
                " " +
                cityWeatherDetails.windSpeed.unit}
                <FontAwesomeIcon icon={faWind} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
