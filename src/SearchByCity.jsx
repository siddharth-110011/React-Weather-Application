import { weatherDetails } from './weatherDetails';

import "./App.css";

export function SearchByCity({onCityInput, setCityWeatherDetails, cityInput }) {
  function handleSubmit() {
    const weatherDetail = weatherDetails.find(
      (obj) => obj.city.toLowerCase() === cityInput.toLowerCase()
    );
    setCityWeatherDetails(weatherDetail);
  }

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search weather by city"
        onChange={(e) => {
          onCityInput(e.target.value);
        }}
      ></input>
      <button type="submit" name="submit-btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
