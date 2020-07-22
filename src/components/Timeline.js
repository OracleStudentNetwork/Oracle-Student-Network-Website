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
                paddingLeft="15vw"
                paddingRight="15vw"
                paddingTop="15vh"
                paddingBottom="15vh"
                textAlign="center"
                minHeight="400px"
            >
                <Heading
                    size={900}
                    fontSize={mobile ? "32px" : "48px"}
                    color="#031b4e"
                >
                    Road Map
                </Heading>
                <Pane
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                >
                    <TimelineEvent
                        icon={<i class="fas fa-user fa-3x"></i>}
                        title="Start of Pilot Program"
                        date="2020 April 15th"
                    />
                    <TimelineEvent
                        icon={<i class="fas fa-layer-group fa-3x"></i>}
                        title="Plugin Development"
                        date="2020 July 4th"
                    />
                    <TimelineEvent
                        icon={<i class="fas fa-lock fa-3x"></i>}
                        title="Closed Beta"
                        date="2020 July 22nd"
                    />
                    <TimelineEvent
                        icon={<i class="fas fa-user-check fa-3x"></i>}
                        title="Further Development"
                        date="2020 August"
                    />
                    <TimelineEvent
                        icon={<i class="fab fa-canadian-maple-leaf fa-3x"></i>}
                        title="Soft Launch to Ontario"
                        date="2020 September 1st"
                    />
                </Pane>
                <Pane display="flex" justifyContent="center">
                    <hr className="heading-bar"></hr>
                </Pane>
                <Pane textAlign="center" marginTop="5vh">
                    <Heading size={mobile ? 600 : 700} color="#031b4e">
                        Sign up for our closed-beta and hear the latest news.
                    </Heading>
                    <Pane>
                        <Pane marginTop="3vh" width="100%">
                            <Signup alignment="center" />
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}

export default Timeline;
