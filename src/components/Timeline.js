import React from "react";
import TimelineEvent from "./TimelineEvent";
import Signup from "./Signup";
import { Pane, Heading } from "evergreen-ui";

class Timeline extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Pane
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
                <Heading
                    size={900}
                    fontWeight={1500}
                    fontSize="48px"
                    color="#212121"
                >
                    Road Map
                </Heading>
                <Pane
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
                </Pane>
                <Pane display="flex" justifyContent="center">
                    <hr className="heading-bar"></hr>
                </Pane>
                <Pane textAlign="center" marginTop="5vh">
                    <Heading size={mobile ? 600 : 700} color="#212121">
                        Sign up for our closed-beta and hear the latest news.
                    </Heading>
                    <Pane>
                        <Pane marginTop="3vh" width="100%">
                            <Signup
                                alignment="center"
                                width={mobile ? "100%" : "30%"}
                                mobile={mobile}
                            />
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}

export default Timeline;
