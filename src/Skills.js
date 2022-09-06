import React from 'react';
import SkillHolder from "./components/SkillHolder";

const skills = [
    {skill:"Adobe Photoshop", exp: "Graphic designer since 2012."},
    {skill:"Adobe Illustrator", exp: "> 7yrs. Used for presentations, custom icons, logos, svg objects."},
    {skill:"Figma", exp: "Basic. Enough to work as web developer."},
    {skill:"HTML/CSS", exp: "3 years experience of landing pages and corporate site creation"},
    {skill:"JavaScript", exp: "Adding interactivity and work with libraries such as Three.js, GSAP, Particles.js etc."},
    {skill:"React", exp: "Basic, self learning. No commercial experience"}
]

function Skills() {
    return (
        <div className={"skillsGrid"}>
            {skills.map(skill=>{
                return <SkillHolder skill={skill.skill} experience={skill.exp} key={skill.skill}/>
            })}
        </div>
    );
}

export default Skills;