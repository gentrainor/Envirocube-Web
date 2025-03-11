import React from "react";
import WeatherChart from "./WeatherChart";

function DataTracking() {
  const weatherData = [
    { date: '2025-03-01', temperature: 30 },
    { date: '2025-03-02', temperature: 55 },
    { date: '2025-03-03', temperature: 80 },
    { date: '2025-03-04', temperature: 58 },
    { date: '2025-03-05', temperature: 53 },
  ];

  return (
    <div className="container mt-4">
      <h2>Data Tracking</h2>
      <p>Here is a graph to visualize the temperature changes!</p>
      <WeatherChart data={weatherData} />
    </div>
  );
}

export default DataTracking;



