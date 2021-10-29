import React, { useState, useEffect } from "react";
import TripCard from "./TripCard";
import AddTrip from "./AddTrip";
import Filter from "./Filter";
import "./Trips.css";

function TripContainer() {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearch] = useState("");
  const [addForm, setAddForm] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((all_trips)=> setTrips(all_trips));
  }, []);

  const addNewTrip = (newTripObj) => {
    setTrips((all_trips) => [newTripObj, ...all_trips]);
  };
  
  const filteredList = trips.filter((trip) =>
      trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleUpdateTrip(updatedTrip) {
    const updatedAmountConst = trips.map((trip) => {
      if (trip.id === updatedTrip.id) {
        return updatedTrip;
      } else {
        return trip;
      }
    });
    setTrips(updatedAmountConst);
  }

  const deleteTrip = (id) => {
    const updatedTrips = trips.filter((trip) => trip.id !== id);
    setTrips(updatedTrips);
  };
      
  return (
    <div id="trip-container">
      <Filter
        setSearch={setSearch}
        trips={trips}/>
      {addForm ? <AddTrip setAddForm={setAddForm} trips={trips} addNewTrip={addNewTrip}/> : <button id= "add-new-trip" onClick={()=>setAddForm(true)}>Add a Trip</button>}

      {filteredList.map((trip) => (<TripCard deleteTrip={deleteTrip} handleUpdateTrip={handleUpdateTrip} key={trip.id} trip={trip} />))}
    </div>
  );
}

export default TripContainer;
