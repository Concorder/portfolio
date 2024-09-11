import './App.css';
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contacts from "./components/Contacts";
import Skills from "./Skills";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {useEffect, useState, useLayoutEffect} from "react";
import Home from "./Home";
import Playground from "./components/Playground";

function App() {
    function setVh() {
        document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + "px");
    }

    setVh();
    useLayoutEffect(() => {

        window.addEventListener('resize', setVh);

        return () => window.removeEventListener('resize', setVh);
    }, []);
    const [frameColor, setFrameColor] = useState("#b666cb")
    document.documentElement.style.setProperty('--greyed', frameColor)
    const [title, setTitle] = useState("Home")
    const setTitleAndFrameColor = () => {
        switch (window.location.pathname) {
            case  "/portfolio/":
                setFrameColor("#b666cb");
                setTitle("Home")
                break;
            case "/portfolio/works":
                setFrameColor("#ffeb3b");
                setTitle("Portfolio")
                break;
            case "/portfolio/skills":
                setFrameColor("#d3eb43");
                setTitle("Skills")
                break;
            case "/portfolio/experience":
                setFrameColor("#ffc107");
                setTitle("Experience")
                break;
            case "/portfolio/contacts":
                setFrameColor("#8b78ff");
                setTitle("Contacts")
                break;
            case "/portfolio/playground":
                setFrameColor("#e2ff78");
                setTitle("Playground")
                break;
            default:
                setFrameColor("#b666cb");
                setTitle("Home")

        }
    }
    useEffect(() => {
        window.addEventListener("popstate", setTitleAndFrameColor);
        return () => {
            window.removeEventListener("popstate", setTitleAndFrameColor);
        };
    }, [title, frameColor]);
    const [playgroundCounter, setPlaygroundCounter] = useState(0)

    const playgroundCounterTrigger = () => {
        setPlaygroundCounter(PrevPlaygroundCounter => PrevPlaygroundCounter + 1)
    }
    return (
        <div className="App">
            <Router>
                <main className={"mainFrame"}>
                    <div className="mainFrame__flex-top">
                        <div className={"mainFrame__nameHolder"}>
                            <h2 className={"mainFrame__name"}>Olexandr Bondarenko</h2>
                            <span className={"mainFrame__jobTitle"}>Designer | Web Developer</span>

                            <nav className={"navBar mobile"}>
                                <ul onClick={setTitleAndFrameColor} className={"navBar"}>
                                    <Link to={'/portfolio/'}
                                          className={`${title === "Home" ? "active" : ""}`}>Home</Link>
                                    <Link to={'/portfolio/works'}
                                          className={`${title === "Portfolio" ? "active" : ""}`}>Portfolio</Link>
                                    <Link to={'/portfolio/skills'}
                                          className={`${title === "Skills" ? "active" : ""}`}>Skills</Link>
                                    <Link to={'/portfolio/experience'}
                                          className={`${title === "Experience" ? "active" : ""}`}>Experience</Link>
                                    <Link to={'/portfolio/contacts'}
                                          className={`${title === "Contacts" ? "active" : ""}`}>Contacts</Link>


                                </ul>
                            </nav>

                        </div>
                        <div className="mainFrame__horLine"></div>
                    </div>
                    <div className="mainFrame__flex-vertLeft">
                        <div className="mainFrame__vertLine"></div>
                        <ul onClick={setTitleAndFrameColor} className={"navBar"}>
                            <Link to={'/portfolio/'} className={`${title === "Home" ? "active" : ""}`}>Home</Link>
                            <Link to={'/portfolio/works'}
                                  className={`${title === "Portfolio" ? "active" : ""}`}>Portfolio</Link>
                            <Link onClick={playgroundCounterTrigger} to={'/portfolio/skills'}
                                  className={`${title === "Skills" ? "active" : ""}`}>Skills</Link>
                            <Link to={'/portfolio/experience'}
                                  className={`${title === "Experience" ? "active" : ""}`}>Experience</Link>
                            <Link to={'/portfolio/contacts'}
                                  className={`${title === "Contacts" ? "active" : ""}`}>Contacts</Link>
                            <Link to={'/portfolio/playground'}
                                  style={{"display": `${playgroundCounter >= 5 ? "block" : "none"}`}}
                                  className={`${title === "Playground" ? "active" : ""}`}>Playground</Link>
                        </ul>
                        <div className="mainFrame__vertLine"></div>
                    </div>
                    <div className="mainFrame__flex-vertRight">
                        <div className="mainFrame__vertLine">

                        </div>
                        <h4 className={"mainFrame__title"}>{title}</h4>
                        <div className="mainFrame__vertLine">

                        </div>
                    </div>

                    <section className={`contentHolder ${title + "Grad"}`}>
                        <Routes>
                            <Route path={"/portfolio/"} exact element={<Home/>}/>
                            <Route path={"/portfolio/works"} element={<Portfolio/>}/>
                            <Route path={"/portfolio/skills"} element={<Skills/>}/>
                            <Route path={"/portfolio/experience"} element={<Experience/>}/>
                            <Route path={"/portfolio/contacts"} element={<Contacts/>}/>
                            <Route path={"/portfolio/playground"} element={<Playground/>}/>
                        </Routes>
                    </section>
                    <div className="mainFrame__horLine_bottom"></div>
                </main>
            </Router>
        </div>

    );
}

export default App;
