import React from 'react';

function SkillHolder({skill, experience, order}) {
    console.log(order)
    return (
        <div className={"skillContainer"} style={{animationDelay: order*0.10 +"s"}}>
            <h4 className={"subheader"}>{skill}</h4>
            <p className={"contText"}>{experience}</p>
        </div>
    );
}

export default SkillHolder;