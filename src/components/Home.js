export default function Home(){
    return(
        <div className="home">
            <img className="home_img" src={`${process.env.PUBLIC_URL}/assets/images/homeDesktop.jpg`} alt="" />
            <div className="intro">
                <div className="introPs">
                    <p className="so_you">SO, YOU WANT TO TRAVEL TO</p>
                    <p className="space">SPACE</p>
                    <p className="face_it">Let's face it; if you want to go to space, you might
                        as well go to outter space and not hover kind of on 
                        the edge of it. Well sit back, and relax because we'll
                        give you a truly out of this world experience!
                    </p>
                </div>
            </div>
            <div className="exploreDiv">
                <p className="explore"><p>EXPLORE</p></p>
            </div>
        </div>
    )
}