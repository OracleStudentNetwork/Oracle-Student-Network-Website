import React from "react";
import HeroImage from "../assets/hero.png";
import Signup from "./Signup";
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
                    alignItems={mobile ? "center" : "flex-start"}
                    width={mobile ? "100%" : "50vw"}
                    paddingLeft="2vw"
                    paddingRight="2vw"
                >
                    <Pane textAlign={mobile ? "center" : ""} width="100%">
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
                            fontSize="20px"
                            marginTop="10px"
                        >
                            Getting help with homework has never been so easy.
                        </Paragraph>
                        <Heading color="#89CCFF" size={700} marginTop="5vh">
                            Get involved by signing up for our closed beta
                            below.
                        </Heading>
                    </Pane>
                    <Pane width="100%" marginTop="10px">
                        <Signup
                            alignment={mobile ? "center" : "left"}
                            width="50%"
                        />
                    </Pane>

                    {/* <Pane
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
                                marginTop={mobile ? "2vh" : ""}
                            >
                                <Pane marginRight={10}>
                                    <i className="fab fa-discord fa-lg"></i>
                                </Pane>
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
                    </Pane> */}
                </Pane>
                <Pane
                    display={mobile ? "none" : "flex"}
                    justifyContent="center"
                    paddingLeft="2vw"
                    paddingRight="2vw"
                    alignItems="center"
                >
                    <Pane borderRadius={3}>
                        <img
                            src={HeroImage}
                            height="auto"
                            width="700px"
                            className="hero-image"
                            alt="Hero"
                        />
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}
export default Hero;
