import React from "react";
import { Heading, Badge, Icon, Box } from "@chakra-ui/core";

class TimelineEvent extends React.Component {
    render() {
        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop="8vh"
                width="100%"
            >
                {this.props.icon}
                <Heading size="md" marginTop={4} color="#212121">
                    {this.props.title}
                    <Icon
                        name="check"
                        marginLeft={2}
                        color="purple.500"
                        display={this.props.complete ? "inline-block" : "none"}
                    />
                </Heading>
                <Box>
                    <Badge
                        variantColor={this.props.complete ? "blue" : "purple"}
                        marginTop={2}
                    >
                        {this.props.date}
                    </Badge>
                </Box>
            </Box>
        );
    }
}
export default TimelineEvent;
