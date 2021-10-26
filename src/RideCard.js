import React from "react";

function RideCard({ first_name, last_name, distance, amount, tipped }) {
  return (
    <div>
      <p>I am your rides</p>
      <h2>
        `${first_name} ${last_name}`
      </h2>
      <h2>Distance: `${distance}`</h2>
      <h2>Amount: `${amount}`</h2>
      <h2>Tipped: `${tipped}`</h2>
    </div>
  );
}

export default RideCard;
