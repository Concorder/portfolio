import React from "react";
import robot2 from "../img/plane1.png";
import robot3 from "../img/plane2.png";
import robot4 from "../img/robot5.png";
import triangle1 from "../img/triangle-1.png";
import triangle2 from "../img/triangle-2.png";
import triangle3 from "../img/triangle-3.png";
import ThreeScene from "./ThreeScene";
const Playground = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <div className="slider playground">
                <div
                    className={`slide ${currentSlide === 0 ? "active" : ""}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <h2 data-text="Prototype" className="slider__header glitch">
                        Prototype
                    </h2>
                    <img className={"slider__decoration"} src={triangle1} alt="" />
                </div>
                <div
                    className={`slide ${currentSlide === 1 ? "active" : ""}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <h2 data-text="Design" className="slider__header glitch">
                        Design
                    </h2>
                    <ul>
                        <li className="slider__note">
                            Experience of creating UI for corporate sites, service portals, mobile apps
                        </li>
                        <li className="slider__note">
                            Interactive mockups in Adobe XD, Figma
                        </li>
                    </ul>
                    <img className={"slider__decoration"} src={triangle2} alt="" />
                </div>
                <div
                    className={`slide ${currentSlide === 2 ? "active" : ""}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <h2 data-text="Frontend" className="slider__header glitch">
                        Frontend
                    </h2>
                    <ul>
                        <li className="slider__note">
                            Experience in graphic design and photomanipulations
                        </li>
                        <li className="slider__note">
                            Animated banners
                        </li>
                        <li className="slider__note">
                            svg elements
                        </li>
                    </ul>
<ThreeScene/>
                </div>
                <button className="slider_button prev" onClick={handlePrevSlide}>
                    ⮜
                </button>
                <button className="slider_button next" onClick={handleNextSlide}>
                    ⮞
                </button>
            </div>
            <div className={"fixedSlide"}>
                <div
                    className={`slide ${currentSlide === 0 ? "active" : ""}`}
                    style={{ transform: `translateX(${currentSlide * 100}%)` }}
                >
                    <img className={`playground_Image1`} src={robot2} alt="" />
                </div>
                <div
                    className={`slide ${currentSlide === 1 ? "active" : ""}`}
                    style={{ transform: `translateX(${currentSlide * 100}%)` }}
                >
                    <img className={`playground_Image2`} src={robot3} alt="" />
                </div>
                <div
                    className={`slide ${currentSlide === 2 ? "active" : ""}`}
                    style={{ transform: `translateX(${currentSlide * 100}%)` }}
                >

                </div>
            </div>
        </>
    );
};

export default Playground;
