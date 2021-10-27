import React , {useState, useEffect} from 'react';
import TripCard from './TripCard';
import Filter from './Filter';
import TripDetailModal from './TripDetailModal';
import './Trips.css'

function TripContainer() {

    const [trips, setTrips] = useState([]);
    const [showModal, SetShowModal] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/trips")
        .then((r) => r.json())
        .then((all_trips) => setTrips(all_trips))
    }, []);

    return (
       <div id = "trip-container">
           <h2>Your Trips</h2>
           <Filter/>
           {trips.map((trip) => (
            <TripCard SetShowModal = {SetShowModal} key={trip.id} {...trip}/>
           ))}
            {showModal ? <TripDetailModal showModal={showModal} SetShowModal={SetShowModal} tripsInfo={trips}/>: null}
       </div>
    );
}

export default TripContainer;