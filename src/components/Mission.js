import React from "react";
import { Heading, Text, Box } from "@chakra-ui/core";
import Discord from "../assets/discord.png";
import Countdown from "react-countdown";
import Signup from "./Signup";

class Mission extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Box
                textAlign="center"
                paddingRight="10vw"
                paddingLeft="10vw"
                paddingTop="15vh"
                paddingBottom="15vh"
                backgroundColor="#212121"
            >
                <Heading fontSize="48px" color="white">
                    Our Mission
                </Heading>
                <Box marginTop="4vh">
                    <Text
                        fontSize={mobile ? "18px" : "20px"}
                        lineHeight="28px"
                        color="white"
                    >
                        Oracle Tutoring was founded by a group of volunteer
                        tutors and instructors who want to help students reach
                        their fullest potential during COVID-19 induced distance
                        learning. We seek to revolutionize traditional education
                        through technology.
                    </Text>
                </Box>
                <Box
                    marginTop="4vh"
                    display={mobile ? "none" : "flex"}
                    justifyContent="center"
                >
                    <img src={Discord} width="800px" height="auto"></img>
                </Box>
                {/* <Box display="flex" justifyContent="center">
                    <hr className="heading-bar"></hr>
                </Box>
                <Box textAlign="center" marginTop="5vh">
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
                    <Box>
                        <Box marginTop="3vh" width="100%">
                            <Signup alignment="center" />
                        </Box>
                    </Box>
                </Box> */}
            </Box>
        );
    }
}
export default Mission;
