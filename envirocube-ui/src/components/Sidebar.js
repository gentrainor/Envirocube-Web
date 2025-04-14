import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div 
    className="d-flex flex-column p-3"
    style={{
      position: "fixed",    // Fixed position
      top: "0",             // Stick to the top
      left: "0",            // Align to the left
      width: "150px",       // Set the width of the sidebar
      height: "100vh",      // Full height
      backgroundColor: "#FDEEFF",  // Sidebar color
      borderRadius: "15px", // Optional rounded corners for style
      zIndex: "1000",        // Ensure the sidebar stays on top of content
      boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)" // Optional shadow for a 3D effect
    }}
  >
      <ul className="nav flex-column mt-3">
        <li className="nav-item my-2">
          <a href="/" className="nav-link d-flex align-items-center">
            <i className="fas fa-home me-2" style={{ color: "#4F7363" }}></i> Home
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


