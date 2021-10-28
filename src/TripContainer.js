import React, { useState, useEffect } from "react";
import TripCard from "./TripCard";
import Filter from "./Filter";
import TripDetailModal from "./TripDetailModal";
import "./Trips.css";

function TripContainer() {
  const [trips, setTrips] = useState([]);
  const [showModal, SetShowModal] = useState(false);
  const [searchTerm, setSearch] = useState("");
  const [driverOrRider, setDriverOrRider] = useState("");
  const [filteredDorR, setFilteredDorR] = useState(trips);

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((all_trips) => setTrips(all_trips));
  }, []);

  //   useEffect(() => {
  //     if (driverOrRider === "driver") {
  //       setFilteredDorR(
  //         trips.filter((trip) =>
  //           trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  //         )
  //       );
  //     } else if (driverOrRider === "rider") {
  //       setFilteredDorR(
  //         trips.filter((trip) =>
  //           trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase())
  //         )
  //       );
  //     } else {
  //       setFilteredDorR(
  //         trips.filter(
  //           (trip) =>
  //             trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  //         )
  //       );
  //     }
  //   }, [filteredDorR]);

  function chooseDriverOrRider() {
    if (driverOrRider === "driver") {
      setFilteredDorR(
        trips.filter((trip) =>
          trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (driverOrRider === "rider") {
      setFilteredDorR(
        trips.filter((trip) =>
          trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredDorR(
        trips.filter(
          (trip) =>
            trip.rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trip.driver.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }

  return (
    <div id="trip-container">
      <h2>Your Trips</h2>
      <Filter
        setDriverOrRider={setDriverOrRider}
        chooseDriverOrRider={chooseDriverOrRider}
        setSearch={setSearch}
        trips={trips}
      />

      {trips === []
        ? null
        : filteredDorR.map((trip) => (
            <TripCard SetShowModal={SetShowModal} key={trip.id} {...trip} />
          ))}

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
