import React from "react";
import HeroImage from "../assets/hero.png";
import Logo from "../assets/logo.png";
import Signup from "./Signup";
import { Pane, Heading, Button, Paragraph, Avatar, Text } from "evergreen-ui";

class Hero extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Pane>
                <Pane
                    display="flex"
                    paddingBottom="10vh"
                    justifyContent="center"
                    alignItems="center"
                    height={mobile ? "100vh" : "95vh"}
                    paddingRight="40px"
                    paddingLeft="40px"
                    flexDirection={mobile ? "column" : "row"}
                    // backgroundColor="#6f42c1"
                    // backgroundImage="linear-gradient( 135.9deg,  rgba(109,25,252,1) 16.4%, rgba(125,31,165,1) 56.1% )"
                >
                    <Pane
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems={mobile ? "center" : "flex-start"}
                        width={mobile ? "100%" : "800px"}
                        paddingLeft="20px"
                        paddingRight="20px"
                    >
                        <Pane
                            display={mobile ? "" : "none"}
                            marginBottom="20px"
                        >
                            <Avatar src={Logo} size={180} />
                        </Pane>
                        <Pane textAlign={mobile ? "center" : ""} width="100%">
                            <Heading
                                size={900}
                                fontSize={mobile ? "42px" : "72px"}
                                color="#212121"
                                lineHeight="95%"
                                marginBottom="20px"
                                fontWeight={1500}
                            >
                                Oracle{" "}
                                <span style={{ color: "#6f42c1" }}>
                                    Tutoring
                                </span>
                            </Heading>
                            <Paragraph
                                color="#757575"
                                size={500}
                                lineHeight="28px"
                                fontSize={mobile ? "18px" : "20px"}
                                marginRight={mobile ? "" : "30%"}
                                marginBottom="20px"
                            >
                                Getting help with homework has never been so
                                easy. Get involved by signing up for our closed
                                beta below.
                            </Paragraph>
                            {/* <Paragraph
                            color="#E3F2FD"
                            size={500}
                            fontSize={mobile ? "18px" : "24px"}
                            marginTop="5vh"
                        ></Paragraph> */}
                        </Pane>
                        <Pane width="100%" marginTop="10px">
                            <Signup
                                alignment={mobile ? "center" : "left"}
                                width="70%"
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
                        paddingLeft="20px"
                        paddingRight="20px"
                        alignItems="center"
                        width="700px"
                    >
                        <Pane>
                            <img
                                src={HeroImage}
                                height="auto"
                                width="100%"
                                className="hero-image"
                                alt="Hero"
                            />
                        </Pane>
                    </Pane>
                </Pane>
                <hr
                    style={{
                        border: "0px",
                        borderTop: "1px grey solid",
                        opacity: "0.5",
                    }}
                ></hr>
            </Pane>
        );
    }
}
export default Hero;
