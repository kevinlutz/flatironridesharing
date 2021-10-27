import React , {useState, useEffect} from 'react';
import TripCard from './TripCard';
import Filter from './Filter';
import TripDetailModal from './TripDetailModal';
import './Trips.css'

function TripContainer() {

    const [trips, setTrips] = useState([]);
    const [showModal, SetShowModal] = useState(false);
    const [searchTerm, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:9292/trips")
        .then((r) => r.json())
        .then((all_trips) => setTrips(all_trips))
    }, []);

    const filteredTrips = trips.filter((trip) =>
    trip.date.includes(searchTerm))

    return (
       <div id = "trip-container">
           <h2>Your Trips</h2>
           <Filter setSearch={setSearch}/>
           {filteredTrips.map((trip) => (
            <TripCard SetShowModal = {SetShowModal} key={trip.id} {...trip}/>
           ))}
            {showModal ? <TripDetailModal showModal={showModal} SetShowModal={SetShowModal} tripsInfo={trips}/>: null}
       </div>
    );
}

export default TripContainer;