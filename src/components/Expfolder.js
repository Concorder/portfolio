import React from 'react';

function Expfolder({order, company, years, title}) {
    return (
        <div className={"expContainer"} style={{animationDelay: order*0.10 +"s"}}>
<h3 className={"subheader-exp"}>{company}</h3>
            <p className={"contText"}>{title}</p>
            <p className={"contText-years"}>{years}</p>
        </div>
    );
}

export default Expfolder;