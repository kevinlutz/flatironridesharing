import React, {useState, useEffect} from 'react';

function TripCard({date, rider_id ,driver_id, distance, amount, tip }) {
  const [driver, setDriver] = useState([]);
  const [rider, setRider] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/drivers/${driver_id}`)
    .then((r) => r.json())
    .then((all_driver) => setDriver(all_driver))
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/riders/${rider_id}`)
    .then((r) => r.json())
    .then((all_rider) => setRider(all_rider))
  }, []);

  return (
    <div className="trip-card">
      <p><b>Driver Name:</b> {driver.first_name} {driver.last_name}</p>
      <p><b>Rider Name:</b> {rider.first_name} {rider.last_name}</p>
      <p><b>Date:</b> {date}</p>
      <p><b>Distance:</b> {distance} miles</p>
      <p><b>Amount:</b> ${amount}</p>
      <p><b>Tipped:</b> {tip ? "Yes" : "No"}</p>
    </div>
  );
}

export default TripCard;
