import React, {useState} from 'react';

function EditAmount({ trip, handleUpdateTrip, setIsEditing }) {
    const {id, driver, rider, date, distance, amount, tip } = trip;
    const [updatedAmount, setUpdatedAmount] = useState(amount);

    function handleEditForm(e) {
      e.preventDefault();
      
      fetch(`http://localhost:9292/trips/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: updatedAmount }),
      })
        .then((resp) => resp.json())
        .then((updatedAmount) => handleUpdateTrip(updatedAmount));

        setIsEditing(false)
    }
  
    return (
      <form onSubmit={handleEditForm}>
        <input
          id="amount"
          type="number"
          name="amount"
          value={updatedAmount}
          onChange={(e) => setUpdatedAmount(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }

export default EditAmount;
