import React from "react";
import { Pane } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import ScrollableAnchor from "react-scrollable-anchor";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Services from "../components/Services";
import Timeline from "../components/Timeline";
import LearnMore from "../components/LearnMore";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
    offset: 400,
    once: true,
    delay: 200,
});

function Home() {
    const mobile = useMediaQuery({ query: "(max-width: 900px)" });
    return (
        <Pane>
            <ScrollableAnchor id={"hero"}>
                <div>
                    <Hero mobile={mobile} />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"mission"}>
                <div>
                    <Mission mobile={mobile} />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"services"}>
                <div>
                    <Services mobile={mobile} />
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"roadmap"}>
                <div>
                    <Timeline mobile={mobile} />
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

export default Home;
