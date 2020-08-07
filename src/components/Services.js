import React from "react";
import { Pane } from "evergreen-ui";
import { Heading, Text, Badge } from "@chakra-ui/core";

function Services(props) {
    const mobile = props.mobile;
    return (
        <Pane
            paddingTop="15vh"
            paddingBottom="15vh"
            paddingRight="10vw"
            paddingLeft="10vw"
            display="flex"
            flexDirection={mobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            background="#f3f5f9"
        >
            <Pane>
                <Heading fontSize="48px" color="#212121" textAlign="center">
                    What We Do
                </Heading>
                <Text
                    fontSize={mobile ? "18px" : "20px"}
                    lineHeight="28px"
                    color="#5b6987"
                    marginTop="5vh"
                    textAlign="center"
                >
                    Tutoring and homework help services are offered through our
                    platform every weekday at select times. We host workshops,
                    raffles, and community events each week. Oracle is proud to
                    be the first non-profit group to offer on-demand tutoring
                    through the convenience of a messaging platform.
                </Text>
                <Pane
                    display="flex"
                    flexDirection={mobile ? "column" : "row"}
                    justifyContent="space-between"
                >
                    <Pane
                        textAlign={mobile ? "center" : "left"}
                        marginTop="10vh"
                        marginRight={mobile ? "" : "3vw"}
                    >
                        <i class="fas fa-broadcast-tower fa-2x fa-gradient"></i>
                        <Heading size="md" color="#212121" marginTop="2vh">
                            Live Virtual Tutoring
                        </Heading>
                        <Text color="#5b6987" marginTop="2vh">
                            Log on to Oracle to receive on-demand homework help
                            and concept clarification, completely free!
                        </Text>
                    </Pane>
                    <Pane
                        textAlign={mobile ? "center" : "left"}
                        marginTop="10vh"
                        marginLeft={mobile ? "" : "3vw"}
                        marginRight={mobile ? "" : "3vw"}
                    >
                        <i class="far fa-calendar-check fa-2x fa-gradient"></i>
                        <Heading size="md" color="#212121" marginTop="2vh">
                            Community Events
                        </Heading>
                        <Text color="#5b6987" marginTop="2vh">
                            Socialize, share memes, stream music, participate in
                            weekly gift card raffles. It’s important to leave
                            time to relax.
                        </Text>
                    </Pane>
                    <Pane
                        textAlign={mobile ? "center" : "left"}
                        marginTop="10vh"
                        marginLeft={mobile ? "" : "3vw"}
                    >
                        <i class="fas fa-hammer fa-2x fa-gradient"></i>
                        <Heading size="md" color="#212121" marginTop="2vh">
                            Workshops
                        </Heading>
                        <Text color="#5b6987" marginTop="2vh">
                            Oracle will host daily workshops on extracurricular
                            topics led by talented and motivated youth
                            instructors.
                        </Text>
                        <Badge variantColor="purple" marginTop="8px">
                            Coming Soon
                        </Badge>
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    );
}

export default Services;
