import React from "react";
import HeroImage from "../assets/hero.png";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Button } from "evergreen-ui";

function Hero() {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    return (
        <Pane
            display="flex"
            padding={20}
            justifyContent="center"
            marginTop="5em"
            flexDirection={mobile ? "column" : "row"}
        >
            <Pane
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width={mobile ? "100%" : ""}
            >
                <Pane textAlign={mobile ? "center" : ""}>
                    {/* <img src={Logo} width="57" height="51" verticalAlign="middle" /> */}
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
                </Pane>
            </Pane>
            <Pane
                display={mobile ? "none" : "flex"}
                justifyContent="center"
                marginLeft="5%"
            >
                <img src={HeroImage} className="hero-image" />
            </Pane>
        </Pane>
    );
}
export default Hero;
