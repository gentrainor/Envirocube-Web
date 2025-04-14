import React, { useEffect, useState } from "react";
import WeatherChart from "./WeatherChart";

function DataTracking() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Fetch data from the Flask backend
    fetch("http://localhost:5000/api/readings")
      .then((response) => response.json())
      .then((data) => {
        // Format the data to include only temperature, humidity, iaq, and timestamp
        const formattedData = data.map((reading) => ({
          date: new Date(reading.timestamp).toLocaleString(), // Format timestamp for x-axis
          temperature: reading.temperature,
          humidity: reading.humidity,
          iaq: reading.iaq,
        }));
        setWeatherData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Data Tracking</h2>
      <p>Here are the graphs to visualize the temperature, humidity, and IAQ changes!</p>

      
      <WeatherChart data={weatherData} label="Temperature (°C)" valueKey="temperature" />

      <WeatherChart data={weatherData} label="Humidity (%)" valueKey="humidity" />

      <WeatherChart data={weatherData} label="Indoor Air Quality (IAQ)" valueKey="iaq" />
    </div>
  );
}

export default DataTracking;






