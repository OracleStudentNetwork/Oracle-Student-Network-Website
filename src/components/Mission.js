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
                <Heading
                    size={900}
                    fontSize={mobile ? "32px" : "48px"}
                    color="#031b4e"
                >
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
                        tutors and instructors passionate about supporting
                        students achieve to their fullest potential during CoVID
                        induced distance learning. We want to revolutionize how
                        students experience the intersection of technology and
                        education.
                    </Paragraph>
                </Pane>
                <Pane textAlign="center" marginTop="15vh">
                    <Heading size={mobile ? 500 : 700} color="#031b4e">
                        Sign up for our closed-beta, available in
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
                        <Pane marginTop="1vh" width="100%">
                            <Signup alignment="center" />
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}
export default Mission;
