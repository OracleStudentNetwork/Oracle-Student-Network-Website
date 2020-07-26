import React from "react";
import { Pane, Heading, Badge, TickCircleIcon } from "evergreen-ui";

class TimelineEvent extends React.Component {
    render() {
        return (
            <Pane
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop="8vh"
                width="100%"
            >
                <Pane color="#6845c2">{this.props.icon}</Pane>
                <Heading size={700} marginTop={10} color="#031b4e">
                    {this.props.title}
                    <TickCircleIcon
                        color="success"
                        display={this.props.complete ? "" : "none"}
                        marginLeft={8}
                    />
                </Heading>
                <Pane>
                    <Badge
                        color={this.props.complete ? "blue" : "purple"}
                        marginTop={10}
                    >
                        {this.props.date}
                    </Badge>
                </Pane>
            </Pane>
        );
    }
}
export default TimelineEvent;
