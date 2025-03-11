import React from "react";
import WeatherCard from "./WeatherCard";
import AlertCard from "./AlertCard";

function Homepage() {
  return (
    <div className="container mt-4">
      <h2>Home</h2>
      <div className="row">
        <div className="col-md-4">
          <WeatherCard city="Atlanta, GA" temperature="43°" condition="Mostly Clear" />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 mb-2">
              <WeatherCard label="Particulate Matter" value="PM2.5" />
            </div>
            <div className="col-md-6 mb-2">
              <WeatherCard label="Carbon Monoxide" value="10ppm" />
            </div>
            <div className="col-md-6 mb-2">
              <WeatherCard label="Humidity" value="28%" />
            </div>
            <div className="col-md-6 mb-2">
              <WeatherCard label="Smoke" value="540ppm" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h5>Alerts</h5>
        <AlertCard title="Air Quality Warning" message="High particulate matter levels detected. Limit outdoor activities and use masks if necessary." />
        <AlertCard title="Temperature Warning" message="Increased temperature levels detected. Limit outdoor activities and stay hydrated." />
      </div>
    </div>
  );
}

export default Homepage;

