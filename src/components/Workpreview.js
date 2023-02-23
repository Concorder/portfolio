import React from 'react';

function Workpreview({work, order}) {


    return (
        <div data-name={work.name} className={"workPreview"} style={{backgroundImage: `url(${work.image})`, animationDelay: order*0.10 +"s"}}>
            <a target={"_blank"} href={work.link}>

            </a>

        </div>
    );
}

export default Workpreview;