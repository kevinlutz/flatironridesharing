import React, { useState } from "react";
import "./AddTrip.css";

function AddTrip({ trips, addNewTrip }) {
  function uniq(arr) {
    const newArr = [];
    arr.forEach((e) => {
      if (!newArr.includes(e)) {
        newArr.push(e);
      }
    });
    return newArr;
  }

  const [driverName, setDriverName] = useState("");
  const [riderName, setRiderName] = useState("");
  const [driverId, setDriverId] = useState(0);
  const [riderId, setRiderId] = useState(0);
  const [distance, setDistance] = useState(null);
  const [amount, setAmount] = useState(null);
  const [tip, setTip] = useState(false);
  const [date, setDate] = useState("");

  const drivers = uniq(trips.map((trip) => trip.driver.name));
  const riders = uniq(trips.map((trip) => trip.rider.name));

  function handleDriverName(e) {
    //dropdown form drivers
    setDriverName(e.target.value);
    trips.forEach(function (trip) {
      if (trip.driver.name === e.target.value) {
        setDriverId(trip.driver.id);
      }
    });
  }
  function handleRiderName(e) {
    //dropdown form riders
    setRiderName(e.target.value);
    trips.forEach(function (trip) {
      if (trip.rider.name === e.target.value) {
        setRiderId(trip.rider.id);
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTrip = {
      distance: distance,
      tip: tip,
      date: date,
      amount: amount,
      driver_id: driverId,
      rider_id: riderId,
      driver: {
        name: driverName,
      },
      rider: {
        name: riderName,
      },
    };
    console.log(newTrip);

    fetch("http://localhost:9292/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    })
      .then((response) => response.json())
      .then((newTrip) => {
        addNewTrip(newTrip);
      });
  }

  return (
    <div id="new-trip-form">
      <h2>New Trip</h2>
      <form onSubmit={handleSubmit}>
        Driver Name:{" "}
        <select
          required="required"
          placeholder="Select a driver..."
          onChange={(e) => handleDriverName(e)}
          style={{ margin: "0px 5px 0px 0px" }}
        >
          <option value="none">Select a driver...</option>
          {drivers.map((driver) => (
            <option key={driver} value={driver}>
              {driver}
            </option>
          ))}
        </select>
        Rider Name:{" "}
        <select
          required="required"
          placeholder="Select a rider..."
          onChange={(e) => handleRiderName(e)}
          style={{ margin: "0px 5px 0px 0px" }}
        >
          <option value="none">Select a rider...</option>
          {riders.map((rider) => (
            <option key={rider} value={rider}>
              {rider}
            </option>
          ))}
        </select>
        Date:{" "}
        <input
          required="required"
          type="string"
          name="date"
          step="1"
          placeholder="2021-10-28"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "80px", margin: "0px 5px 0px 0px" }}
        />
        Price: $
        <input
          required="required"
          type="number"
          name="price"
          step="1"
          placeholder="Price"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "50px", margin: "0px 5px 0px 0px" }}
        />
        Distance:{" "}
        <input
          required="required"
          type="number"
          name="distance"
          step="1"
          placeholder="Distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          style={{ width: "80px", margin: "0px 5px 0px 0px" }}
        />
        Tipped:{" "}
        <select
          required="required"
          placeholder="Tipped?"
          onChange={(e) => setTip(e.target.value)}
          style={{ margin: "0px 10px 0px 0px" }}
          required="required"
        >
          <option value="none" default>
            Tipped?
          </option>
          <option value="yes">Yes!</option>
          <option value="no">No :(</option>
        </select>
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
}

export default AddTrip;
