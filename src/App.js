import React from "react";
import "./App.css";
import { Pane } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import ScrollableAnchor from "react-scrollable-anchor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import About from "./components/About";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
    offset: 400,
    once: true,
    delay: 200,
});

function App() {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    return (
        <Pane>
            <Navbar mobile={mobile} />
            <Hero />
            <ScrollableAnchor id={"info"}>
                <div>
                    <About />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"about"}>
                <div>
                    <Info />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"contact"}>
                <div>
                    <Contact mobile={mobile} />
                </div>
            </ScrollableAnchor>
        </Pane>
    );
}

export default App;
