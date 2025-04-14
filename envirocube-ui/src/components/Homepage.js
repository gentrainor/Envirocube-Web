import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import AlertCard from "./AlertCard";

function Homepage() {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    // Fetch data from the Flask backend (temperature, humidity, IAQ)
    fetch("http://localhost:5000/api/readings")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setLatest(data[0]); // The most recent reading
        }
      })
      .catch((err) => console.error("Failed to fetch sensor data:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Home</h2>
      <div className="row">
        <div className="col-md-4">
          <WeatherCard
            city="Atlanta, GA"
            temperature={latest ? `${latest.temperature}°C` : "Loading..."}
            condition="Live Sensor Data"
          />
        </div>
        <div className="col-md-8">
          <div className="row">
            {/* Show Temperature */}
            <div className="col-md-6 mb-2">
              <WeatherCard label="Temperature" value={latest ? `${latest.temperature}°C` : "Loading..."} />
            </div>
            {/* Show Humidity */}
            <div className="col-md-6 mb-2">
              <WeatherCard label="Humidity" value={latest ? `${latest.humidity}%` : "Loading..."} />
            </div>
            {/* Show Indoor Air Quality */}
            <div className="col-md-6 mb-2">
              <WeatherCard label="Indoor Air Quality (IAQ)" value={latest ? `${latest.iaq} ppm` : "Loading..."} />
            </div>
            {/* Show Timestamp */}
            <div className="col-md-6 mb-2">
              <WeatherCard label="Timestamp" value={latest ? new Date(latest.timestamp).toLocaleString() : "Loading..."} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5>Alerts</h5>
        {/* Alert for High Temperature */}
        {latest && latest.temperature > 30 && (
          <AlertCard
            title="Heat Warning"
            message="Temperature levels are elevated. Stay hydrated and avoid outdoor activities."
          />
        )}

        {/* Alert for High Humidity */}
        {latest && latest.humidity > 70 && (
          <AlertCard
            title="Humidity Warning"
            message="High humidity levels detected. Ensure proper ventilation and hydration."
          />
        )}

        {/* Alert for IAQ Levels */}
        {latest && latest.iaq >= 301 && (
          <AlertCard
            title="Hazardous Air Quality"
            message="IAQ levels are hazardous. Avoid outdoor activities and stay indoors if possible."
          />
        )}

        {latest && latest.iaq >= 201 && latest.iaq <= 300 && (
          <AlertCard
            title="Very Unhealthy Air Quality"
            message="IAQ levels are very unhealthy. Limit outdoor exposure and wear protective gear."
          />
        )}

        {latest && latest.iaq >= 176 && latest.iaq <= 200 && (
          <AlertCard
            title="Unhealthy Air Quality"
            message="IAQ levels are unhealthy. Limit prolonged outdoor exposure."
          />
        )}

        {latest && latest.iaq >= 151 && latest.iaq <= 175 && (
          <AlertCard
            title="Unhealthy for Sensitive Groups"
            message="IAQ levels are unhealthy for sensitive groups. Take precautions if necessary."
          />
        )}

        {latest && latest.iaq >= 51 && latest.iaq <= 150 && (
          <AlertCard
            title="Moderate Air Quality"
            message="IAQ levels are moderate. Take precautions if you are sensitive to air quality."
          />
        )}

        {latest && latest.iaq >= 0 && latest.iaq <= 50 && (
          <AlertCard
            title="Good Air Quality"
            message="IAQ levels are good. Enjoy the fresh air!"
          />
        )}

        {!latest && (
          <AlertCard title="No Data" message="Waiting for live sensor data..." />
        )}
      </div>
    </div>
  );
}

export default Homepage;






