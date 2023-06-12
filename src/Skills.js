import React from 'react';

import VideoBackground from "./components/Videobackground";
import prototype from "./img/prototype.mp4";
import design from "./img/design.mp4";
import development from "./img/development.mp4";


function Skills() {

    return (


        <div className="skills__gridContainer">
            <div className={"skills__gridItem"}>
                <h2 className={"skill_heading"}>Prototype</h2>
                <span className={"slider__subheader"}>Adobe XD | Figma</span>
            </div>
            <div className={"skills__gridItem"}>
                <VideoBackground videoPath={prototype}/>

            </div>
            <div className={"skills__gridItem"}>
                <VideoBackground videoPath={design}/>
            </div>
            <div className={"skills__gridItem"}><h2 className={"skill_heading"}>Design</h2><span
                className={"slider__subheader"}>Photoshop | Illustrator</span></div>
            <div className={"skills__gridItem"}><h2 className={"skill_heading"}>Develop</h2>
                <span className={"slider__subheader"}>JavaScript | React | Sass | GSAP | Three.js</span>
            </div>
            <div className={"skills__gridItem"}>
                <VideoBackground videoPath={development}/>
            </div>
        </div>


    );
}

export default Skills;