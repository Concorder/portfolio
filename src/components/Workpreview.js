import React from 'react';

function Workpreview({work}) {


    return (
        <div data-name={work.name} className={"workPreview"} style={{backgroundImage: `url(${work.image})`}}>
            <a target={"_blank"} href={work.link}>

            </a>

        </div>
    );
}

export default Workpreview;