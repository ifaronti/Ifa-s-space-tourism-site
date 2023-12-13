import React, {useState, useEffect} from "react"
// import Navbar from "./components/NavBar"
import Destination from "./components/Destination/Destination"
import Home from "./components/Home"
import Crew from "./components/Crew"
import Technology from "./components/Technology"

export default function App(){
    let[current, setCurrent] = useState(() => 
    JSON.parse(localStorage.getItem('current'))|| 0)

    let [showNav, setShowNav] = useState(false)

    useEffect(()=> {
        JSON.stringify(localStorage.setItem('current', current))
    }, [current])

    let allPages = [<Home/>, <Destination/>, <Crew/>, <Technology/>]

    let NavBar =     
        <nav>
            <div className="navItems">
                <img className="logoDiv" src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
                <div className="navLine"></div>
                <div className={showNav ? "nav_links mobile_nav": "nav_links" }>
                    <p onClick={() => setCurrent(0)} className={current === 0 ? 'navLink currentLink': 'navLink'}>00 HOME</p>
                    <p onClick={() => setCurrent(1)} className={current === 1 ? 'navLink currentLink': 'navLink'}>01 DESTINATION</p>
                    <p onClick={() => setCurrent(2)} className={current === 2 ? 'navLink currentLink': 'navLink'}>02 CREW</p>
                    <p onClick={() => setCurrent(3)} className={current === 3 ? 'navLink currentLink': 'navLink'}>03 TECHNOLOGY</p>
                </div>
            </div>
            <div onClick={() => setShowNav(prevShow => !prevShow)} className={showNav ? "wendys tripple_whopper": 'wendys'}>
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
        </nav>

let currentPage = allPages.map((page, index) =>{
    return current === index ? page:''
})

    return(
        <div className="container">
            <div className="app">
                {NavBar}
                {currentPage}
            </div>
        </div>
    )
}