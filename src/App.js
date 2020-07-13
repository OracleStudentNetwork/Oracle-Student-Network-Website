import React from "react";
import "./App.css";
import { Pane } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import ScrollableAnchor from "react-scrollable-anchor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";
import LearnMore from "./components/LearnMore";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import Config from "./components/Config";
import Firebase from "firebase";
import "aos/dist/aos.css";
AOS.init({
    offset: 400,
    once: true,
    delay: 200,
});

function App() {
    if (!Firebase.apps.length) Firebase.initializeApp(Config);
    Firebase.analytics();
    const mobile = useMediaQuery({ query: "(max-width: 800px)" });
    return (
        <Pane>
            <Navbar mobile={mobile} />
            <Hero />
            <Mission />
            <ScrollableAnchor id={"services"}>
                <div>
                    <Services mobile={mobile} />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"learn-more"}>
                <div>
                    <LearnMore />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"contact"}>
                <div>
                    <Contact mobile={mobile} />
                </div>
            </ScrollableAnchor>
            <Footer mobile={mobile} />
        </Pane>
    );
}

export default App;
