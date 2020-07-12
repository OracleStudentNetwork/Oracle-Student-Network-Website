import React from "react";
import HeroImage from "../assets/hero.svg";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Button } from "evergreen-ui";

function Hero() {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    return (
        <Pane
            display="flex"
            paddingBottom="10vh"
            justifyContent="center"
            height="95vh"
            paddingRight="10vw"
            paddingLeft="10vw"
            flexDirection={mobile ? "column" : "row"}
        >
            <Pane
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width={mobile ? "100%" : ""}
            >
                <Pane textAlign={mobile ? "center" : ""}>
                    <Heading
                        size={900}
                        fontSize="48px"
                        verticalAlign="middle"
                        color="#6845c2"
                    >
                        Oracle Student Network
                    </Heading>
                    <Heading size={800} marginTop="0.5em">
                        Slogan Here
                    </Heading>
                    <a href="https://google.com" rel="noopener" target="_blank">
                        <Button
                            iconAfter="arrow-right"
                            appearance="primary"
                            marginTop="2em"
                            height={40}
                        >
                            <Pane marginRight={10}>
                                <i className="fab fa-discord fa-lg"></i>
                            </Pane>
                            Join our Discord
                        </Button>
                    </a>
                    <a
                        href="https://discord.com/why-discord-is-different"
                        rel="noopener"
                        target="_blank"
                    >
                        <Button
                            iconBefore="info-sign"
                            appearance="default"
                            marginTop="2em"
                            marginLeft={mobile ? "" : "1em"}
                            height={40}
                        >
                            What is Discord?
                        </Button>
                    </a>
                </Pane>
            </Pane>
            <Pane
                display={mobile ? "none" : "flex"}
                justifyContent="center"
                marginLeft="10vw"
                alignItems="center"
            >
                <img
                    src={HeroImage}
                    height="442px"
                    width="auto"
                    className="hero-image"
                    alt="Hero Image"
                />
            </Pane>
        </Pane>
    );
}
export default Hero;
