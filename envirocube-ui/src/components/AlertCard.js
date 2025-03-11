import React from "react";

function AlertCard({ title, message }) {
  return (
    <div className="alert alert-warning">
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  );
}

export default AlertCard;
