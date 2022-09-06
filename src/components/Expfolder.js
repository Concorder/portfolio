import React from 'react';

function Expfolder({company, years, title}) {
    return (
        <div className={"expContainer"}>
<h3 className={"subheader-exp"}>{company}</h3>
            <p className={"contText"}>{title}</p>
            <p className={"contText"}>{years}</p>
        </div>
    );
}

export default Expfolder;