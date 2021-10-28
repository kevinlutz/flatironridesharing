import React from "react";
import "./Trips.css";

function TripCard({ driver, rider, date, distance, amount, tip }) {
  // const [driver, setDriver] = useState([]);
  // const [rider, setRider] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:9292/drivers/${driver_id}`)
  //   .then((r) => r.json())
  //   .then((all_driver) => setDriver(all_driver))
  // }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:9292/riders/${rider_id}`)
  //   .then((r) => r.json())
  //   .then((all_rider) => setRider(all_rider))
  // }, []);

  return (
    <div className="trip-card">
      <p>
        <b>Driver Name:</b> {driver.name}
      </p>
      <p>
        <b>Rider Name:</b> {rider.name} (rider.age)
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
