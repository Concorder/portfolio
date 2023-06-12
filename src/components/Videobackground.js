import React, { useRef, useEffect } from "react";

const VideoBackground = ({ videoPath }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.play();
    }, []);

    return (
        <video ref={videoRef} autoPlay loop muted>
            <source src={videoPath} type="video/mp4" />
        </video>
    );
};

export default VideoBackground;