import './App.css';
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contacts from "./components/Contacts";
import Skills from "./Skills";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {useEffect, useState, useLayoutEffect} from "react";
import Home from "./Home";
function App() {
        useLayoutEffect(() => {
            function setVh(){
                document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 +"px");
            }
            window.addEventListener('resize', setVh);

            return () => window.removeEventListener('resize', setVh);
        }, []);

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
            case  "/portfolio/":
                document.documentElement.style.setProperty('--greyed', "#77270a");
                setTitle("Home")

                break;
            case "/portfolio/works":
                document.documentElement.style.setProperty('--greyed', "#ffeb3b");
                setTitle("Portfolio")
                break;
            case "/portfolio/skills":
                document.documentElement.style.setProperty('--greyed', "#d3eb43");
                setTitle("Skills")
                break;
            case "/portfolio/experience":
                document.documentElement.style.setProperty('--greyed', "#ffc107");
                setTitle("Experience")
                break;
            case "/portfolio/contacts":
                document.documentElement.style.setProperty('--greyed', "#8b78ff");
                setTitle("Contacts")
                break;
            default:
                document.documentElement.style.setProperty('--greyed', "#77270a");
                setTitle("Home")

        }
    }
    useEffect(setTitleHandler, [path])
    return (
        <div className="App" >
            <Router>

                <main className={"mainFrame"}>
                    <div className="mainFrame__flex-top">
                        <div className={"mainFrame__nameHolder"}>
                            <h2 className={"mainFrame__name"}>Alexander Bondarenko</h2>
                            <span className={"mainFrame__jobTitle"}>Web Developer</span>
                            <nav className={"navBar mobile"}>
                                <ul onClick={setTitleHandler} className={"navBar"}>
                                    <Link to={'/portfolio/'} className={`${title === "Home"? "active":""}`} >Home</Link>
                                    <Link to={'/portfolio/works'} className={`${title === "Portfolio"? "active":""}`}>Portfolio</Link>
                                    <Link to={'/portfolio/skills'} className={`${title === "Skills"? "active":""}`}>Skills</Link>
                                    <Link to={'/portfolio/experience'} className={`${title === "Experience"? "active":""}`}>Experience</Link>
                                    <Link to={'/portfolio/contacts'} className={`${title === "Contacts"? "active":""}`}>Contacts</Link>
                                </ul>
                            </nav>

                        </div>
                        <div className="mainFrame__horLine"></div>
                    </div>
                    <div className="mainFrame__flex-vertLeft">
                        <div className="mainFrame__vertLine"></div>
                        <ul onClick={setTitleHandler} className={"navBar"}>
                            <Link to={'/portfolio/'} className={`${title === "Home"? "active":""}`} >Home</Link>
                            <Link to={'/portfolio/works'} className={`${title === "Portfolio"? "active":""}`}>Portfolio</Link>
                            <Link to={'/portfolio/skills'} className={`${title === "Skills"? "active":""}`}>Skills</Link>
                            <Link to={'/portfolio/experience'} className={`${title === "Experience"? "active":""}`}>Experience</Link>
                            <Link to={'/portfolio/contacts'} className={`${title === "Contacts"? "active":""}`}>Contacts</Link>
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
                        </Routes>
                    </section>
                    <div className="mainFrame__horLine_bottom"></div>
                </main>
            </Router>
        </div>

    );
}

export default App;
