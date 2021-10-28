import React, { useState } from 'react';

function AddTrip() {
        // const [driverName, setDriverName] = useState("");
        // const [riderName, setRiderName] = useState("");
        // const [distance, setDistance] = useState(0);
        // const [tip, setTip] = useState(false);
        // const [date, setDate] = useState("");
      
        // function handleSubmit(e) {
        //   e.preventDefault();
      
        //   const newPlant = {
        //     name: name,
        //     image: image,
        //     price: price,
        //   };
      
        //   fetch("http://localhost:6001/plants", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newPlant),
        //   })
        //     .then((response) => response.json())
        //     .then((newPlant) => {
        //       addNewPlant(newPlant);
        //     });
        // }
    return (
        <div className="new-trip-form">
            {/* <h2>New Trip</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Driver Name:"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <input
                type="number"
                name="price"
                step="0.01"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add Plant</button>
            </form> */}
        </div>
    );
}

export default AddTrip;
