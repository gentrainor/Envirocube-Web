import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Account() {
  return (
    <div className="container mt-4">
      <h2>About</h2>
      <p>Learn why and how we created EnviroCube!</p>
      <div className="description mt-4 p-4 rounded shadow" style={{ backgroundColor: "#F9F9F9" }}>
        <h3>What Is EnviroCube?</h3>
        <p>
          EnviroCube is an interactive object designed to monitor environmental conditions like temperature. 
          This object visually represents these data points through color changes to allow people to understand their 
          surroundings better. 
          EnviroCube Web is a cutting-edge web application designed to help users monitor and track local environmental 
          data through out EnviroCube interactive object. 
          With features like real-time weather updates, air quality alerts, and data tracking, 
          EnviroCube provides valuable insights to help users make informed decisions about their environment.
        </p>
        <ul className="list-unstyled mt-3">
          <li className="d-flex align-items-center mb-2">
            <i className="fas fa-cloud-sun me-2" style={{ color: "#4F7363" }}></i>
            Real-time weather updates for your location.
          </li>
          <li className="d-flex align-items-center mb-2">
            <i className="fas fa-smog me-2" style={{ color: "#4F7363" }}></i>
            Alerts for air quality and other environmental conditions.
          </li>
          <li className="d-flex align-items-center mb-2">
            <i className="fas fa-chart-line me-2" style={{ color: "#4F7363" }}></i>
            Track historical environmental data and trends.
          </li>
        </ul>
      </div>
      <div className="description mt-4 p-4 rounded shadow" style={{ backgroundColor: "#F9F9F9" }}>
      <h4>How We Created EnviroCube</h4>
          <p>
            Sensor information....
            Web application information...
            </p>
        </div>
    </div>
  );
}

export default Account;

