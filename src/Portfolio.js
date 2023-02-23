import React from 'react';
import Workpreview from "./components/Workpreview";
import radinetImg from "./img/portfolio/radinet.jpg"
import mindsBoomImg from "./img/portfolio/mindsboom.jpg"
import iLandImg from "./img/portfolio/landing1.jpg"
import brainImg from "./img/portfolio/brainstove.jpg"
import oksiImg from "./img/portfolio/oksi.jpg"
const works = [
    {name:"Arya Mg - Corp. Site",image: radinetImg,link:"https://concorder.github.io/Arya/"},
    {name:"Portal (in progress)",image: oksiImg,link:"https://www.oksigames.com/"},
    {name:"Gaming Portal",image: brainImg,link:"https://brainstove.com/"},
    {name:"Recipes Portal",image: mindsBoomImg,link:"https://mindsboom.com/"},
    {name:"iPhone Landing",image: iLandImg,link:"https://concorder.github.io/pf/iphone_pl_1.html"},

    ]

function Portfolio(props) {
    let i = 0;
    return (
        <div className={"portfolio__gridContainer"}>

            {works.map(work=>{ i++
                return <Workpreview order={i} work={work} key={work.name + work.link}/>
            })}
        </div>
    );
}

export default Portfolio;