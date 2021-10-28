import  React, {useEffect, useState }  from 'react';
import "./Filter_Header.css"

function Filter({setSearch, setDriverOrRider}) {
    
    const [showDrivers, SetShowDrivers] = useState(false)
    const [showRiders, SetShowRiders] = useState(false)
    const [drivers, setDrivers] = useState([])
    const [riders, setRiders] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/drivers")
        .then((r) => r.json())
        .then((all_drivers) => setDrivers(all_drivers))
    }, []);

    useEffect(() => {
        fetch("http://localhost:9292/riders")
        .then((r) => r.json())
        .then((all_riders) => setRiders(all_riders))
    }, []);

    function setDriverList(){
        if(showDrivers === true){
            SetShowDrivers(false)
            SetShowRiders(false)
            // setDriverOrRider("drivers")
        } else {
            SetShowDrivers(true)
            // setDriverOrRider("trips")
        }
    }

    function setRiderList(){
        if(showRiders === true){
            SetShowDrivers(false)
            SetShowRiders(false)
            // setDriverOrRider("riders")
        } else {
            SetShowRiders(true)
            // setDriverOrRider("trips")
        }
    }
    return (
       <div id = "filter-bar">
           <form>
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Filter by date..."/>
                <input onChange={setDriverList} name="drivers" checked={showDrivers} type="checkbox" disabled ={showRiders} label="Drivers"/>Drivers
                <input onChange={setRiderList} name="drivers" checked={showRiders} type="checkbox" disabled = {showDrivers} label="Drivers"/>Riders
                {showDrivers === false && showRiders === false ? null
                : showDrivers ?
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
                    {drivers.map((driver) => (
                    <option key={driver.id} value={driver.id}>
                        {driver.name}
                    </option>
                    ))}
                </select>
                </> :
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
                    {riders.map((rider) => (
                    <option key={rider.id} value={rider.id}>
                        {rider.name}
                    </option>
                    ))}
                </select>
            </>
                }
            </form>
       </div>
    );
}

export default Filter;
