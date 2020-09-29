import React from "react";
import { Box } from "@chakra-ui/core";
import { useMediaQuery } from "react-responsive";
import ScrollableAnchor from "react-scrollable-anchor";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Services from "../components/Services";
import Timeline from "../components/Timeline";
import LearnMore from "../components/LearnMore";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Home() {
    const mobile = useMediaQuery({ query: "(max-width: 900px)" });
    return (
        <Box>
            <SEO />
            <Hero mobile={mobile} />
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
        </Box>
    );
}

export default Home;
