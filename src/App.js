import './App.css';
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Skills from "./Skills";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Home from "./Home";

function App() {
    const [vh, setVh] = useState(window.innerHeight * 0.01)
    let style = {"--vh": vh}
    const [title, setTitle] = useState("Home")

    const useReactPath = () => {
        const [path, setPath] = useState(window.location.pathname);
        const listenToPopstate = () => {
            const winPath = window.location.pathname;
            setPath(winPath);
        };
        useEffect(() => {
            window.addEventListener("popstate", listenToPopstate);

            return () => {
                window.removeEventListener("popstate", listenToPopstate);
            };
        }, []);
        return path;
    };
    const path = useReactPath();
    const setTitleHandler = () => {
        switch (window.location.pathname) {
            case  "/":
                document.documentElement.style.setProperty('--greyed', "#77270a");
                setTitle("Home")

                break;
            case "/portfolio":
                document.documentElement.style.setProperty('--greyed', "#ffeb3b");
                setTitle("Portfolio")
                break;
            case "/skills":
                document.documentElement.style.setProperty('--greyed', "#d3eb43");
                setTitle("Skills")
                break;
            case "/experience":
                document.documentElement.style.setProperty('--greyed', "#ffc107");
                setTitle("Experience")
                break;
            default:
                document.documentElement.style.setProperty('--greyed', "#77270a");
                setTitle("Home")

        }
    }
    useEffect(setTitleHandler, [path])
    return (
        <div className="App">
            <Router>
                <main className={"mainFrame"}>
                    <div className="mainFrame__flex-top">
                        <div className={"mainFrame__nameHolder"}>
                            <h2 className={"mainFrame__name"}>Alexander Bondarenko</h2>
                            <span className={"mainFrame__jobTitle"}>Web Developer</span>

                        </div>
                        <div className="mainFrame__horLine"></div>
                    </div>
                    <div className="mainFrame__flex-vertLeft">
                        <div className="mainFrame__vertLine"></div>
                        <ul onClick={setTitleHandler} className={"navBar"}>
                            <Link to={'/'} className={`${title === "Home"? "active":""}`} >Home</Link>
                            <Link to={'/portfolio'} className={`${title === "Portfolio"? "active":""}`}>Portfolio</Link>
                            <Link to={'/skills'} className={`${title === "Skills"? "active":""}`}>Skills</Link>
                            <Link to={'/experience'} className={`${title === "Experience"? "active":""}`}>Experience</Link>
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
                            <Route path={"/"} exact element={<Home/>}/>
                            <Route path={"/portfolio"} element={<Portfolio/>}/>
                            <Route path={"/skills"} element={<Skills/>}/>
                            <Route path={"/experience"} element={<Experience/>}/>
                        </Routes>
                    </section>
                    <div className="mainFrame__horLine_bottom"></div>
                </main>
            </Router>
        </div>

    );
}

export default App;
