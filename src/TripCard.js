import React from "react";
import "./Trips.css";

function TripCard({ driver, rider, date, distance, amount, tip }) {
  return (
    <div className="trip-card">
      <p>
        <b>Driver Name:</b> {driver.name}
      </p>
      <p>
        <b>Rider Name:</b> {rider.name}
      </p>
      <p>
        <b>Date:</b> {date}
      </p>
      <p>
        <b>Distance:</b> {distance} miles
      </p>
      <p>
        <b>Amount:</b> $ {amount}
      </p>
      <p>
        <b>Tipped:</b> {tip ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default TripCard;
