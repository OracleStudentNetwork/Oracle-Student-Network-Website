import React from "react";
import HeroImage from "../assets/hero.svg";
import { Pane, Heading, Button } from "evergreen-ui";
import Countdown from "react-countdown";
import Signup from "./Signup";

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const mobile = this.props.mobile;
        return (
            <Pane
                display="flex"
                paddingBottom="10vh"
                justifyContent="center"
                height={mobile ? "100vh" : "95vh"}
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
                            fontSize={mobile ? "42px" : "80px"}
                            verticalAlign="middle"
                            color="#6845c2"
                            lineHeight="95%"
                        >
                            Oracle Tutoring
                        </Heading>
                        <Heading size={mobile ? 500 : 700} marginTop="0.5em">
                            Getting help with homework has never been so easy.
                        </Heading>
                        <Heading
                            size={mobile ? 500 : 700}
                            marginTop="4vh"
                            textAlign="center"
                        >
                            Sign up for our closed-beta, available in
                        </Heading>
                        <Heading
                            size={900}
                            fontSize={mobile ? "42px" : "80px"}
                            lineHeight="100%"
                            textAlign="center"
                        >
                            <span style={{ color: "#6845c2" }}>
                                <Countdown date={1594839600000} />
                            </span>
                        </Heading>
                        <Pane marginTop="1vh">
                            <Signup alignment="center" />
                        </Pane>
                        <Pane textAlign="center">
                            <a
                                href="https://google.com"
                                rel="noopener"
                                target="_blank"
                            >
                                <Button
                                    iconAfter="arrow-right"
                                    appearance="primary"
                                    marginTop="2em"
                                    height={40}
                                    disabled
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
                </Pane>
                <Pane
                    display={mobile ? "none" : "flex"}
                    justifyContent="center"
                    marginLeft="10vw"
                    alignItems="center"
                >
                    <img
                        src={HeroImage}
                        height="auto"
                        width="400px"
                        className="hero-image"
                        alt="Hero Image"
                    />
                </Pane>
            </Pane>
        );
    }
}
export default Hero;
