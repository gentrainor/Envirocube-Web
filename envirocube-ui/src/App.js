import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import LocalData from "./components/LocalData";
import DataTracking from "./components/DataTracking";
import Account from "./components/Account";

function CubeIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#A3D9A5" stroke="#4F7363" strokeWidth="3" />
      <polygon points="50,10 90,30 50,50 10,30" fill="#7CBF87" stroke="#4F7363" strokeWidth="3" />
      <polygon points="50,50 90,30 90,70 50,90" fill="#5C9E68" stroke="#4F7363" strokeWidth="3" />
    </svg>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex" style={{ height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div
          className="flex-grow-1 d-flex flex-column"
          style={{
            marginLeft: "200px",  // Push the main content to the right to make space for the sidebar
            backgroundColor: "#FFFFFF",
            paddingTop: "20px",   // Optional: Add some padding on top
          }}
        >
          <div className="d-flex align-items-center justify-content-center my-4">
            <CubeIcon />
            <h1
              className="text-center ms-2"
              style={{
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: "#4F7363",
              }}
            >
              ENVIROCUBE
            </h1>
          </div>
          <div className="flex-grow-1 p-3">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/local-data" element={<LocalData />} />
              <Route path="/data-tracking" element={<DataTracking />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;











