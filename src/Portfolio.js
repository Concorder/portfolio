import React from 'react';
import Workpreview from "./components/Workpreview";
import radinetImg from "./img/portfolio/radinet.jpg"
// import mindsBoomImg from "./img/portfolio/mindsboom.jpg"
import iLandImg from "./img/portfolio/iphone_pl_2.jpg"
// import retroforex from "./img/portfolio/retroforex.jpg"
import iphone3d from "./img/portfolio/iPhone3d.jpg"
import brainImg from "./img/portfolio/brainstove.jpg"
import bloomBlossom from "./img/portfolio/bloom&blossom.jpg"
// import oksiImg from "./img/portfolio/oksi.jpg"
import levelguidz from "./img/portfolio/lvlguidz.jpg"
const works = [
    
    {name:"Coaching Portal",image: levelguidz,link:"https://adavice.github.io/levelguidz/index.html"},
    {name:"Brewery - Landing",image: bloomBlossom,link:"https://concorder.github.io/locolanding/"},
    {name:"Arya Mg - Corp. Site",image: radinetImg,link:"https://concorder.github.io/Arya/"},
    // {name:"HTML Games portal",image: oksiImg,link:"https://www.oksigames.com/"},
    {name:"Gaming Portal",image: brainImg,link:"https://brainstove.com/"},
    // {name:"Recipes Portal",image: mindsBoomImg,link:"https://mindsboom.com/"},
    {name:"iPhone Landing",image: iLandImg,link:"https://concorder.github.io/pf/iphone_pl_2.html"},
    {name:"iPhone 3d",image: iphone3d,link:"https://concorder.github.io/pf/iPhone3d.html"},
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