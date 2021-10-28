import React, { useState } from "react";
import "./Filter_Header.css";

function Filter({ setSearch, setDriverOrRider, trips, chooseDriverOrRider }) {
  const [showDrivers, SetShowDrivers] = useState(false);
  const [showRiders, SetShowRiders] = useState(false);

  function setDriverList() {
    if (showDrivers === true) {
      SetShowDrivers(false);
      SetShowRiders(false);
      setDriverOrRider("trips");
    } else {
      SetShowDrivers(true);
      setDriverOrRider("drivers");
    }
    chooseDriverOrRider();
}

  function setRiderList() {
    if (showRiders === true) {
      SetShowDrivers(false);
      SetShowRiders(false);
      setDriverOrRider("trips");
    } else {
      SetShowRiders(true);
      setDriverOrRider("riders");
    }
    chooseDriverOrRider();
  }
  return (
    <div id="filter-bar">
      <form>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Filter by name..."
        />
        {/* <input
          onChange={setDriverList}
          name="drivers"
          checked={showDrivers}
          type="checkbox"
          disabled={showRiders}
          label="Drivers"
        />
        Drivers
        <input
          onChange={setRiderList}
          name="drivers"
          checked={showRiders}
          type="checkbox"
          disabled={showDrivers}
          label="Drivers"
        />
        Riders */}
        {showDrivers === false && showRiders === false ? null : showDrivers ? (
          <>
            <select>
              <option value="default">Sort by...</option>
              <option value="name">Name</option>
              <option value="years">Years of Experience</option>
              <option value="salary">Salary</option>
              <option value="company">Company</option>
            </select>
            <select>
              <option value="none">Select a driver...</option>
              {trips.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.driver.name}
                </option>
              ))}
            </select>
          </>
        ) : (
          <>
            <select>
              <option value="default">Sort by...</option>
              <option value="name">Name</option>
              <option value="years">Age</option>
              <option value="salary">Tipped</option>
              <option value="company">Number of Rides</option>
            </select>
            <select>
              <option value="none">Select a rider...</option>
              {trips.map((rider) => (
                <option key={rider.id} value={rider.id}>
                  {rider.rider.name}
                </option>
              ))}
            </select>
          </>
        )}
      </form>
    </div>
  );
}

export default Filter;
