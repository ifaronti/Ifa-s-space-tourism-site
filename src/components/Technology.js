import React, { useState, useEffect } from "react";

export default function Technology(){
    let [tech, setTech] = useState([])
    let[current, setCurrent] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then((json) => setTech(json.technology))
    }, [])

    let dap = tech.map((object, index) => {
        return index === current ? 
                <div className="technology" key={index}>
                    <div className="techs">
                        <button className={index === 0 ? 'tech_dot techD': 'tech_dot'} onClick={()=> setCurrent(0)}>1</button>
                        <button className={index === 1 ? 'tech_dot techD': 'tech_dot'} onClick={()=> setCurrent(1)}>2</button>
                        <button className={index === 2 ? 'tech_dot techD': 'tech_dot'} onClick={()=> setCurrent(2)}>3</button>
                    </div>
                    <div className="tech_description">
                        <p className="terminology">THE TERMINOLOGY..</p>
                        <p className="tech_name">{object.name}</p>
                        <p className="tech_details">{object.description}</p>
                    </div>
                    <img className="tech_image" src={object.images.portrait} alt="" />
                </div>
            :
            ''
    })

    return(
        <div className="tech_page">
            <div className="pick_destination tech_intro">
                <p className="zero1">03</p>
                <p>SPACE LAUNCH 101</p>
            </div>
            <img className="home_img" src={`${process.env.PUBLIC_URL}/assets/images/techDesktop.jpg`} alt="" />
            <div className="tech_info">
                {dap}
            </div>
        </div>
    )
}