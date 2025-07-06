import React, {useEffect, useState} from "react";
import robot2 from "../img/robot2.png"
import robot3 from "../img/robot4.png"
import robot4 from "../img/robot5.png"
import robot6 from "../img/robot6.png"
import triangle1 from "../img/triangle-1.png"
import triangle2 from "../img/triangle-2.png"
import triangle3 from "../img/triangle-3.png"
import triangle4 from "../img/triangle-4.png"

const slides = [
    {
        id: 2,
        content: ["Prototyping"],
        note: ["Experience of creating UI for corporate sites, service portals, mobile apps", "Interactive mockups in Adobe XD, Figma"],
        image: robot3,
        decoration: triangle2,
        color: "#79cfeb",
        grad: `radial-gradient(at 40% 20%, #2196f3 0px, transparent 50%),
                radial-gradient(at 90% 0%, #00bcd4 0px, transparent 50%),
                radial-gradient(at 0% 50%, #1976d2 0px, transparent 50%),
                radial-gradient(at 80% 50%, #64b5f6 0px, transparent 50%),
                radial-gradient(at 0% 100%, #18e5ff 0px, transparent 50%),
                radial-gradient(at 80% 100%, #1565c0 0px, transparent 50%),
                radial-gradient(at 0% 0%, #0d47a1 0px, transparent 50%)`
    },
    {
        id: 3,
        content: ["Design"],
        note: ["Experience in graphic design and photomanipulations", "Animated banners", "svg elements"],
        image: robot2,
        decoration: triangle3,
        color: "#897aff",
        grad: `radial-gradient(at 40% 20%, #b666cb 0px, transparent 50%),
                radial-gradient(at 90% 0%, #ff6ec7 0px, transparent 50%),
                radial-gradient(at 0% 50%, #897aff 0px, transparent 50%),
                radial-gradient(at 80% 50%, #ffb6f9 0px, transparent 50%),
                radial-gradient(at 0% 100%, #e040fb 0px, transparent 50%),
                radial-gradient(at 80% 100%, #ff8ae2 0px, transparent 50%),
                radial-gradient(at 0% 0%, #c471ed 0px, transparent 50%)`
    },
    {
        id: 4,
        content: ["Front-end"],
        note: ["Creation of corporate sites", "Interactive landing pages", "service portals and mobile-first prelanding pages"],
        image: robot6,
        decoration: triangle4,
        color: "#ee8074",
        grad: `radial-gradient(at 40% 20%, #ffb347 0px, transparent 50%),
                radial-gradient(at 90% 0%, #ffcc80 0px, transparent 50%),
                radial-gradient(at 0% 50%, #ff8a65 0px, transparent 50%),
                radial-gradient(at 80% 50%, #ffd1b3 0px, transparent 50%),
                radial-gradient(at 0% 100%, #ffe0b2 0px, transparent 50%),
                radial-gradient(at 80% 100%, #ffb347 0px, transparent 50%),
                radial-gradient(at 0% 0%, #ffccbc 0px, transparent 50%)`
    },
];


const Slider = () => {
    const [frameColor, setFrameColor] = useState("#79cfeb")
    const [homeGrad, setHomeGrad] = useState(slides[0].grad)
    document.documentElement.style.setProperty('--greyed', frameColor)
    useEffect(() => {
        const homeGradElem = document.querySelector('.HomeGrad');
        if (homeGradElem) {
            homeGradElem.style.background = homeGrad;
        }
        return () => {
            // Clean up: remove inline background when Slider unmounts
            if (homeGradElem) {
                homeGradElem.style.background = '';
            }
        };
    }, [homeGrad]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
        setFrameColor(slides[newSlide].color);
        setHomeGrad(slides[newSlide].grad);
    };

    const handleNextSlide = () => {
        const newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
        setFrameColor(slides[newSlide].color);
        setHomeGrad(slides[newSlide].grad);
    };
    const [cursorPosition, setCursorPosition] = useState({x:0,y:0})
useEffect(()=>{
    const handleMouseMove = (e) =>{
        setCursorPosition({x:e.clientX, y: e.clientY})
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
},[])
    return (
        <>
    <div className="slider">
            {slides.map((slide, index) => (

                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? "active" : ""}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slide.content.map((item, itemIndex) => (
                        <h2 data-text={item} key={itemIndex} className="slider__header glitch">
                            {item}
                        </h2>
                    ))}
                    <ul>
                    {slide.note.map((item, itemIndex) => (
                        <li key={itemIndex} className="slider__note">
                            {item}
                        </li>
                    ))}
                    </ul>
                    <img className={"slider__decoration"}  src={slide.decoration} alt=""/>
                </div>
            ))}



            <button className="slider_button prev" onClick={handlePrevSlide}>
                ⮜
            </button>
            <button className="slider_button next" onClick={handleNextSlide}>
                ⮞
            </button>
        </div>
    <div className={"fixedSlide"}>
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{ transform: `translateX(${currentSlide * 100}%)` }}
            >


                <img style={{transform: `translate(${-cursorPosition.x * 0.05}px, 0)`}} className={"slider_Image"}  src={slide.image} alt=""/>

            </div>


        ))}
    </div>
    </>
    );
};

export default Slider;