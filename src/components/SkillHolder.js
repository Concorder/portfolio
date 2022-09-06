import React from 'react';

function SkillHolder({skill, experience}) {
    return (
        <div className={"skillContainer"}>
            <h4 className={"subheader"}>{skill}</h4>
            <p className={"contText"}>{experience}</p>
        </div>
    );
}

export default SkillHolder;