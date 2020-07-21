import React from "react";
import HeroImage from "../assets/hero.svg";
import { Pane, Heading, Button, Paragraph } from "evergreen-ui";

class Hero extends React.Component {
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
                background="#6845c2"
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
                            fontSize={mobile ? "42px" : "64px"}
                            color="white"
                            lineHeight="95%"
                        >
                            Oracle Tutoring
                        </Heading>
                        <Paragraph
                            color="white"
                            size={500}
                            fontSize="18px"
                            marginTop="5vh"
                        >
                            Getting help with homework has never been so easy.
                            Get involved by signing up for our closed beta
                            below.
                        </Paragraph>
                    </Pane>
                    <Pane
                        display="flex"
                        flexDirection={mobile ? "column" : "row"}
                        marginTop="2vh"
                        width="100%"
                        alignItems="center"
                    >
                        <a href="/#mission">
                            <Button
                                iconAfter="envelope"
                                appearance="primary"
                                height={40}
                                width={240}
                                marginTop={mobile ? "2vh" : ""}
                            >
                                {/* <Pane marginRight={10}>
                                    <i className="fab fa-discord fa-lg"></i>
                                </Pane> */}
                                Sign up for our closed-beta
                            </Button>
                        </a>

                        <a
                            href="https://discord.com/why-discord-is-different"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button
                                iconBefore="info-sign"
                                appearance="default"
                                marginLeft={mobile ? "" : "1em"}
                                height={40}
                                width={200}
                                marginTop={mobile ? "2vh" : ""}
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
                        height="auto"
                        width="400px"
                        className="hero-image"
                        alt="Hero"
                    />
                </Pane>
            </Pane>
        );
    }
}
export default Hero;
