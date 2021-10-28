import React, { useState, useEffect } from "react";
import TripCard from "./TripCard";
import AddTrip from "./AddTrip";
import Filter from "./Filter";
import "./Trips.css";

function TripContainer() {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearch] = useState("");
  // const [driverOrRider, setDriverOrRider] = useState("");
  // const [filteredDorR, setFilteredDorR] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((all_trips)=> setTrips(all_trips));
  }, []);

  const addNewTrip = (newTripObj) => {
    setTrips((all_trips) => [newTripObj, ...all_trips]);
  };
  // function chooseDriverOrRider() { // Ability to toggle between check boxes, the filter seems to be one step behind... maybe from the setter function
  //   if (driverOrRider === "drivers") { // Drivers
  //     setFilteredDorR(
  //       trips.filter((trip) =>
  //         trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   } else if (driverOrRider === "riders") {
  //     setFilteredDorR(
  //       trips.filter((trip) =>
  //         trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setFilteredDorR( 
  //       trips.filter( //1.1) Ability to search by rider OR driver 
  //         (trip) =>
  //           trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //           trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   }
  // }
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
      <h2>Your Trips</h2>
      <Filter // PLEASE LOOK AT THIS COMPONENT!!!
        // setDriverOrRider={setDriverOrRider}
        // chooseDriverOrRider={chooseDriverOrRider}
        setSearch={setSearch}
        trips={trips}/>
      <AddTrip trips={trips} addNewTrip={addNewTrip}/>
      {filteredList.map((trip) => (<TripCard deleteTrip={deleteTrip} handleUpdateTrip={handleUpdateTrip} key={trip.id} trip={trip} />))}
    </div>
  );
}

export default TripContainer;
