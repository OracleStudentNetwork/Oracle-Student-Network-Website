import React from "react";
import { Pane, Heading, Paragraph } from "evergreen-ui";
import Discord from "../assets/discord.png";
import Countdown from "react-countdown";
import Signup from "./Signup";

class Mission extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Pane
                textAlign="center"
                paddingRight="10vw"
                paddingLeft="10vw"
                paddingTop="15vh"
                paddingBottom="15vh"
                backgroundColor="#212121"
            >
                <Heading
                    size={900}
                    fontSize="48px"
                    fontWeight={1500}
                    color="white"
                >
                    Our Mission
                </Heading>
                <Pane marginTop="4vh">
                    <Paragraph
                        size={500}
                        fontSize={mobile ? "18px" : "20px"}
                        lineHeight="28px"
                        color="white"
                    >
                        Oracle Tutoring was founded by a group of volunteer
                        tutors and instructors who want to help students reach
                        their fullest potential during COVID-19 induced distance
                        learning. We seek to revolutionize traditional education
                        through technology.
                    </Paragraph>
                </Pane>
                <Pane marginTop="4vh" display={mobile ? "none" : "inherit"}>
                    <img src={Discord} width="800px"></img>
                </Pane>
                {/* <Pane display="flex" justifyContent="center">
                    <hr className="heading-bar"></hr>
                </Pane>
                <Pane textAlign="center" marginTop="5vh">
                    <Heading size={mobile ? 600 : 700} color="#031b4e">
                        Sign up for our closed-beta and hear the latest news.
                    </Heading>
                    <Heading
                        size={900}
                        fontSize={mobile ? "42px" : "72px"}
                        lineHeight="100%"
                    >
                        <span style={{ color: "#6845c2" }}>
                            <Countdown date={1594839600000} />
                        </span>
                    </Heading>
                    <Pane>
                        <Pane marginTop="3vh" width="100%">
                            <Signup alignment="center" />
                        </Pane>
                    </Pane>
                </Pane> */}
            </Pane>
        );
    }
}
export default Mission;
