import React, {useState, useEffect} from "react";

export default function Crew(){
    let [crew, setCrew] = useState([])
    let [current, setCurrent] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then((json) => setCrew(json.crew))
    }, [])

    let dap = crew.map((object, index) => {
        return index === current ? 
            <div className="crew_details" key={index}>
                <div className="crew_description">
                    <div className="role_bio_name">
                        <h1 className="role">{object.role}</h1>
                        <p className="crew_name">{object.name}</p>
                        <p className="crew_bio">{object.bio}</p>
                    </div>
                    <div className="crew_btn">
                        <button className={index === 0 ? 'crew_dot theDot': 'crew_dot'} onClick={()=> setCurrent(0)}></button>
                        <button className={index === 1 ? 'crew_dot theDot': 'crew_dot'} onClick={()=> setCurrent(1)}></button>
                        <button className={index === 2 ? 'crew_dot theDot': 'crew_dot'} onClick={()=> setCurrent(2)}></button>
                        <button className={index === 3 ? 'crew_dot theDot': 'crew_dot'} onClick={()=> setCurrent(3)}></button>
                    </div>
                </div>
                <img className="crew_image" src={object.images.png} alt="" />
                <div className="crew_mobile_line"></div>
            </div>
            :
            ''
    })

    return(
        <div className="crew">
            <div className="meet_crew">
                <p className="zero1">02</p>
                <p>MEET YOUR CREW</p>
            </div>
            <img className="home_img" src={`${process.env.PUBLIC_URL}/assets/images/crewDesktop.jpg`} alt="" />
            <div className="crew_info">
                {dap}
            </div>
        </div>
    )
}