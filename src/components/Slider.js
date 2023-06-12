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
        id: 1,
        content: ["Prototype", "Design", "Front-end"],
        note: [""],
        image: robot2,
        decoration: triangle1,
        color: "#b666cb"

    },
    {
        id: 2,
        content: ["Prototype"],
        note: ["Experience of creating UI for corporate sites, service portals, mobile apps", "Interactive mockups in Adobe XD, Figma"],
        image: robot3,
        decoration: triangle2,
        color: "#67dce7"
    },
    {
        id: 3,
        content: ["Design"],
        note: ["Experience in graphic design and photomanipulations", "Animated banners", "svg elements"],
        image: robot4,
        decoration: triangle3,
        color: "#897aff"
    },
    {
        id: 4,
        content: ["Front-end"],
        note: ["Creation of corporate sites", "Interactive landing pages", "service portals and mobile-first prelanding pages"],
        image: robot6,
        decoration: triangle4,
        color: "#ee8074"
    },
];


const Slider = () => {
    const [frameColor, setFrameColor] = useState("#b666cb")
    document.documentElement.style.setProperty('--greyed', frameColor)

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1);
        setFrameColor(currentSlide === 0 ?  slides[slides.length-1].color : slides[currentSlide-1].color);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide === slides.length -1 ? 0 : prevSlide + 1);
        setFrameColor(currentSlide === slides.length -1 ? slides[0].color : slides[currentSlide+1].color);
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
                        <h2 key={itemIndex} className="slider__header">
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