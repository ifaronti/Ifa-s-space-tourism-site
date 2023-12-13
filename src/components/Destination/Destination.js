import React, { useState, useEffect } from "react"

export default function Destination(){
    let[destination, setDestination] = useState([])
    let [current, setCurrent] = useState(0)

useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then((json) => setDestination(json.destinations))
    }, [])

let dap = destination.map((object, index) => {
    return index === current ? 
        <div className="destination_details" key={index}>
            <img className="location_image" src={object.images.png} alt="" />
            <div className="name_description">
                <div className="destinations">
                    <button className={index === 0 ? 'current theCurrent': 'current'} onClick={()=> setCurrent(0)}>Moon</button>
                    <button className={index === 1 ? 'current theCurrent': 'current'} onClick={()=> setCurrent(1)}>Mars</button>
                    <button className={index === 2 ? 'current theCurrent': 'current'} onClick={()=> setCurrent(2)}>Europa</button>
                    <button className={index === 3 ? 'current theCurrent': 'current'} onClick={()=> setCurrent(3)}>Titan</button>
                </div>

                <h1 className="location_name">{object.name}</h1>
                <p className="location_description">{object.description}</p>
                <div className="details_line"></div>

                <div className="time_distance">
                    <div className="distance_travel">
                        <p className="avg_time">AVG. DISTANCE</p>
                        <p className="avgTime_values">{object.distance}</p>
                    </div>
                    <div className="avgTime_values est_time">
                        <p className="avg_time">EST. TRAVEL TIME</p>
                        <p className="avgTime_values">{object.travel}</p>
                    </div>
                </div>
            </div>
        </div>
        :
        ''
})

return(
    <div className="destination">
        <div className="pick_destination">
            <p className="zero1">01</p>
            <p>PICK YOUR DESTINATION</p>
        </div>
        <img className="home_img" src={`${process.env.PUBLIC_URL}/assets/images/destinationDesktop.jpg`} alt="" />
        <div className="destination_info">
            {dap}
        </div>
    </div>
)
}