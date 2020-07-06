import React from "react";
import Hero from "../assets/hero.png";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Button } from "evergreen-ui";

function Landing() {
    const mobile = useMediaQuery({ query: "(max-width: 1000px)" });
    return (
        <Pane
            display="flex"
            padding={20}
            marginTop="5em"
            justifyContent="center"
            flexDirection={mobile ? "column" : "row"}
        >
            <Pane
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width={mobile ? "100%" : ""}
            >
                <Pane>
                    {/* <img src={Logo} width="57" height="51" verticalAlign="middle" /> */}
                    <Heading size={900} fontSize="48px" verticalAlign="middle">
                        Oracle Student Network
                    </Heading>
                    <Heading size={800} marginTop="0.5em">
                        Slogan Here
                    </Heading>
                    <Button
                        iconAfter="arrow-right"
                        appearance="primary"
                        marginTop="2em"
                        height="40px"
                        padding={14}
                    >
                        Join our Discord
                    </Button>
                </Pane>
            </Pane>
            <Pane display="flex" justifyContent="center" marginLeft="5%">
                <img src={Hero} className="hero-image" />
            </Pane>
        </Pane>
    );
}
export default Landing;
