import React, { useState, useEffect } from "react";
import TripCard from "./TripCard";
import AddTrip from "./AddTrip";
import Filter from "./Filter";
import TripDetailModal from "./TripDetailModal";
import "./Trips.css";

function TripContainer() {
  const [trips, setTrips] = useState([]);
  const [showModal, SetShowModal] = useState(false);
  const [searchTerm, setSearch] = useState("");
  // const [driverOrRider, setDriverOrRider] = useState("");
  // const [filteredDorR, setFilteredDorR] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then(function(all_trips){
        setTrips(all_trips)
        setFilteredDorR(all_trips)
      });
  }, []);

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
  const filteredList = trips.filter( //1.1) Ability to search by rider OR driver 
          (trip) =>
            trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

  return (
    <div id="trip-container">
      <h2>Your Trips</h2>
      <Filter // PLEASE LOOK AT THIS COMPONENT!!!
        setDriverOrRider={setDriverOrRider}
        // chooseDriverOrRider={chooseDriverOrRider}
        setSearch={setSearch}
        trips={trips}
      />
      <AddTrip/>
      {filteredList.map((trip) => (<TripCard SetShowModal={SetShowModal} key={trip.id} {...trip} />))}

      {showModal ? (
        <TripDetailModal
          showModal={showModal}
          SetShowModal={SetShowModal}
          tripsInfo={trips}
        />
      ) : null}
    </div>
  );
}

export default TripContainer;
