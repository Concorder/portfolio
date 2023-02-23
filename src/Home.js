import React, {useRef, useEffect} from "react";
import development from "./img/development.mp4"
import prototype from "./img/prototype.mp4"
import design from "./img/design.mp4"
import VideoBackground from "./Videobackground";


function Home(props) {
    const videoRef = useRef(null);


    return (
        <div className={"slider"}>
            <div className={"slide_1"}>

                <div className="grid-container">
                    <div className={"grid-item"}><h2 className={"home_heading"}>Prototype</h2></div>
                    <div className={"grid-item"}>
                 <VideoBackground videoPath={prototype}/>

                    </div>
                    <div className={"grid-item"}>
                        <VideoBackground videoPath={design}/>
                    </div>
                    <div className={"grid-item"}><h2 className={"home_heading"}>Design</h2></div>
                    <div className={"grid-item"}><h2 className={"home_heading"}>Develop</h2></div>
                    <div className={"grid-item"}>
                        <VideoBackground videoPath={development}/>
                    </div>
                </div>
            </div>
            <div className="slide_2"></div>
            <div className="slide_3"></div>

        </div>
    );
}

export default Home;