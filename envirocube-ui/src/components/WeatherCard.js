import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherCard.css";

function WeatherCard({ city, temperature, condition, label, value }) {
  return (
    <div className="card p-3 shadow weather-card">
      {city ? (
        <>
          <h5>{city}</h5>
          <h2>{temperature}</h2>
          <p>{condition}</p>
        </>
      ) : (
        <>
          <h6>{label}</h6>
          <p>{value}</p>
        </>
      )}
    </div>
  );
}

export default WeatherCard;




