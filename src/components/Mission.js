import React from "react";
import { Pane, Heading, Paragraph } from "evergreen-ui";
import Countdown from "react-countdown";
import Signup from "./Signup";

class Mission extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Pane
                textAlign="center"
                paddingRight="15vw"
                paddingLeft="15vw"
                paddingTop="15vh"
                paddingBottom="15vh"
            >
                <Heading size={900} fontSize="48px" color="#031b4e">
                    Our Mission
                </Heading>

                <Pane marginTop="4vh">
                    <Paragraph
                        size={500}
                        fontSize="18px"
                        lineHeight="28px"
                        color="#5b6987"
                    >
                        Oracle Tutoring was founded by a group of volunteer
                        tutors and instructors who want to help students reach
                        their fullest potential during COVID-19 induced distance
                        learning. We seek to revolutionize traditional education
                        through technology.
                    </Paragraph>
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
