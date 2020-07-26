import React from "react";
import { Pane, Heading, Badge, Paragraph } from "evergreen-ui";

function Services(props) {
    const mobile = props.mobile;
    return (
        <Pane
            paddingTop="15vh"
            paddingBottom="15vh"
            paddingRight="15vw"
            paddingLeft="15vw"
            display="flex"
            flexDirection={mobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            background="#f3f5f9"
        >
            <Pane>
                <Heading
                    size={900}
                    fontSize="48px"
                    color="#031b4e"
                    textAlign="center"
                >
                    What We Do
                </Heading>
                <Paragraph
                    size={500}
                    fontSize="18px"
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
                </Paragraph>
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
                        <Pane color="#6845c2">
                            <i class="fas fa-broadcast-tower fa-2x"></i>
                        </Pane>
                        <Heading size={700} color="#031b4e" marginTop="2vh">
                            Live Virtual Tutoring
                        </Heading>
                        <Paragraph color="#5b6987" size={500} marginTop="2vh">
                            Log on to Oracle to receive on-demand homework help
                            and concept clarification, completely free!
                        </Paragraph>
                    </Pane>
                    <Pane
                        textAlign={mobile ? "center" : "left"}
                        marginTop="10vh"
                        marginLeft={mobile ? "" : "3vw"}
                        marginRight={mobile ? "" : "3vw"}
                    >
                        <Pane color="#6845c2">
                            <i class="far fa-calendar-check fa-2x"></i>
                        </Pane>

                        <Heading size={700} color="#031b4e" marginTop="2vh">
                            Community Events
                        </Heading>
                        <Paragraph color="#5b6987" size={500} marginTop="2vh">
                            Socialize, share memes, stream music, participate in
                            weekly gift card raffles. It’s important to leave
                            time to relax.
                        </Paragraph>
                    </Pane>
                    <Pane
                        textAlign={mobile ? "center" : "left"}
                        marginTop="10vh"
                        marginLeft={mobile ? "" : "3vw"}
                    >
                        <Pane color="#6845c2">
                            <i class="fas fa-hammer fa-2x"></i>
                        </Pane>
                        <Heading size={700} color="#031b4e" marginTop="2vh">
                            Workshops
                        </Heading>

                        <Paragraph color="#5b6987" size={500} marginTop="2vh">
                            Oracle will host daily workshops on extracurricular
                            topics lead by talented and motivated youth
                            instructors.
                        </Paragraph>
                        <Badge color="purple" marginTop="8px">
                            Coming Soon
                        </Badge>
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
    );
}

export default Services;
