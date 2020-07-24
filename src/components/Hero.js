import React from "react";
import HeroImage from "../assets/hero.png";
import Logo from "../assets/logo.png";
import Signup from "./Signup";
import { Pane, Heading, Button, Paragraph, Avatar } from "evergreen-ui";

class Hero extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Pane
                display="flex"
                paddingBottom="10vh"
                justifyContent="center"
                alignItems="center"
                height={mobile ? "100vh" : "95vh"}
                paddingRight="40px"
                paddingLeft="40px"
                flexDirection={mobile ? "column" : "row"}
                background="#6845c2"
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
                    <Pane display={mobile ? "" : "none"} marginBottom="20px">
                        <Avatar src={Logo} size={200} />
                    </Pane>
                    <Pane textAlign={mobile ? "center" : ""} width="100%">
                        <Heading
                            size={900}
                            fontSize={mobile ? "42px" : "90px"}
                            color="white"
                            lineHeight="95%"
                        >
                            Oracle Tutoring
                        </Heading>
                        <Paragraph
                            color="white"
                            size={500}
                            fontSize={mobile ? "18px" : "24px"}
                            marginTop="10px"
                        >
                            Getting help with homework has never been so easy.
                        </Paragraph>
                        <Heading
                            color="#89CCFF"
                            size={mobile ? 500 : 700}
                            marginTop="5vh"
                        >
                            Get involved by signing up for our closed beta
                            below.
                        </Heading>
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
        );
    }
}
export default Hero;
