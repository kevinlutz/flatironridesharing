import  React, { useState }  from 'react';

function Filter() {
    
    const [showDrivers, SetShowDrivers] = useState(false)
    const [showRiders, SetShowRiders] = useState(false)

    function setDriverList(){
        SetShowDrivers(!showDrivers)
        SetShowRiders(false)
    }

    function setRiderList(){
        SetShowRiders(!showRiders)
        SetShowDrivers(false)
    }
    return (
       <div style={{border: "1px solid black", margin: "5px", padding: "15px", width: "60%"}}>
           <form>
                <input type="text" placeholder="Filter by name..."/>
                <input onChange={setDriverList} name="drivers" checked={showDrivers} type="checkbox" disabled ={showRiders} label="Drivers"/>Drivers
                <input onChange={setRiderList} name="drivers" checked={showRiders} type="checkbox" disabled = {showDrivers} label="Drivers"/>Riders
                {showDrivers === false && showRiders === false ? null
                : showDrivers ?
                <select>
                    <option value="default">Sort by...</option>
                    <option value="name">Name</option>
                    <option value="years">Years of Experience</option>
                    <option value="salary">Salary</option>
                    <option value="company">Company</option> 
                </select> :
                <select>
                    <option value="default">Sort by...</option>
                    <option value="name">Name</option>
                    <option value="years">Age</option>
                    <option value="salary">Tipped</option>
                    <option value="company">Number of Rides</option>
                </select>
                }
            </form>
       </div>
    );
}

export default Filter;
