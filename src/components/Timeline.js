import React from "react";
import TimelineEvent from "./TimelineEvent";
import Signup from "./Signup";
import { Heading, Box } from "@chakra-ui/core";

class Timeline extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                paddingLeft="10vw"
                paddingRight="10vw"
                paddingTop="15vh"
                paddingBottom="15vh"
                textAlign="center"
                minHeight="400px"
            >
                <Heading fontSize="48px" color="#212121">
                    Road Map
                </Heading>
                <Box
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                >
                    <TimelineEvent
                        icon={<i class="fas fa-user fa-3x fa-gradient"></i>}
                        title="Start of Pilot Program"
                        date="2020 April 15th"
                        complete={true}
                    />
                    <TimelineEvent
                        icon={
                            <i class="fas fa-layer-group fa-3x fa-gradient"></i>
                        }
                        title="Plugin Development"
                        date="2020 July 4th"
                        complete={true}
                    />
                    <TimelineEvent
                        icon={<i class="fas fa-lock fa-3x fa-gradient"></i>}
                        title="Closed Beta"
                        date="2020 July 22nd"
                    />
                    <TimelineEvent
                        icon={
                            <i class="fas fa-user-check fa-3x fa-gradient"></i>
                        }
                        title="Further Development"
                        date="2020 August"
                    />
                    <TimelineEvent
                        icon={
                            <i class="fab fa-canadian-maple-leaf fa-3x fa-gradient"></i>
                        }
                        title="Soft Launch to Ontario"
                        date="2020 September 1st"
                    />
                </Box>
                <Box display="flex" justifyContent="center">
                    <hr className="heading-bar"></hr>
                </Box>
                <Box textAlign="center" marginTop="5vh">
                    <Heading size="lg" color="#212121">
                        Sign up for our closed-beta and hear the latest news.
                    </Heading>
                    <Box>
                        <Box marginTop="3vh" width="100%">
                            <Signup
                                alignment="center"
                                width={mobile ? "100%" : "30%"}
                                mobile={mobile}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default Timeline;
