import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div className="d-flex flex-column p-3" style={{ width: "200px", height: "100vh", backgroundColor: "#FDEEFF", borderRadius: "15px" }}>
      <ul className="nav flex-column mt-3">
        <li className="nav-item my-2">
          <a href="/" className="nav-link d-flex align-items-center">
            <i className="fas fa-home me-2" style={{ color: "#4F7363" }}></i> Home
          </a>
        </li>
        <li className="nav-item my-2">
          <a href="/local-data" className="nav-link d-flex align-items-center">
            <i className="fas fa-map-marker-alt me-2" style={{ color: "#4F7363" }}></i> Local Data
          </a>
        </li>
        <li className="nav-item my-2">
          <a href="/data-tracking" className="nav-link d-flex align-items-center">
            <i className="fas fa-chart-line me-2" style={{ color: "#4F7363" }}></i> Data Tracking
          </a>
        </li>
        <li className="nav-item my-2">
          <a href="/account" className="nav-link d-flex align-items-center">
            <i className="fas fa-user me-2" style={{ color: "#4F7363" }}></i> About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

