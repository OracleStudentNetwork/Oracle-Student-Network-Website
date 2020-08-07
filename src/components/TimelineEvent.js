import React from "react";
import { Pane } from "evergreen-ui";
import { Heading, Badge, Icon } from "@chakra-ui/core";

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
                {this.props.icon}
                <Heading size="md" marginTop={4} color="#212121">
                    {this.props.title}
                    <Icon name="check" marginLeft={2} color="purple.500" />
                </Heading>
                <Pane>
                    <Badge
                        variantColor={this.props.complete ? "blue" : "purple"}
                        marginTop={2}
                    >
                        {this.props.date}
                    </Badge>
                </Pane>
            </Pane>
        );
    }
}
export default TimelineEvent;
