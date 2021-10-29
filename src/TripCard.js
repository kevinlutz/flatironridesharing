import React, {useState} from "react";
import EditAmount from "./EditAmount";
import "./Trips.css";

function TripCard({trip, deleteTrip, handleUpdateTrip }) {
  const {id, driver, rider, date, distance, amount, tip } = trip;
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteTrip(id);
    fetch(`http://localhost:9292/trips/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
    <div className="trip-card">
      <div className="trip-text">
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
        <b>Amount:</b> $ {amount} {
        isEditing ? (<EditAmount setIsEditing={setIsEditing} handleUpdateTrip={handleUpdateTrip} trip={trip}/>) : 
        <button onClick={() => setIsEditing((isEditing) => !isEditing)} style={{marginLeft:"5px"}}>Edit</button>}
      </p>
      <p>
        <b>Tipped:</b> {tip ? "Yes" : "No"}
      </p>
      <div>
        
        <button onClick={handleDelete} style={{float:"right"}}> 🗑️ </button>
    </div>
    </div>
    </div>
    </>
  );
}

export default TripCard;
