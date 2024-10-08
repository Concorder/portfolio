import React from 'react';
import Expfolder from "./components/Expfolder";
const experience = [
    {company:"Kinjo", years:"2023-Present",response:"Designer, Web Developer"},
    {company:"Adavice Media", years:"2019-2022",response:"Design TL, Web Developer"},
    {company:"Netpeak", years:"2016-2019",response:"Graphic Designer"},
    {company:"Whitestyle Design", years:"2017",response:"Web Designer"},
    {company:"Mayzus Investment Ltd.", years:"2012-2014",response:"Graphic Designer"}
]
function Experience(props) {
    let i = 0
    return (
            <div className={"skillsGrid"}>
                {experience.map(work=>{
                    i++
                    return <Expfolder order={i} company={work.company} years={work.years} title={work.response} key={work.company + work.years}/>

                })}
            </div>
    );
}

export default Experience;