import React from "react";
import Classroom from "../assets/classroom.svg";
import Logo from "../assets/logo.png";
import {
    Pane,
    Heading,
    Text,
    Avatar,
    UnorderedList,
    ListItem,
    Badge,
} from "evergreen-ui";

function About(props) {
    const mobile = props.mobile;
    return (
        <Pane
            paddingTop="12vh"
            paddingBottom="12vh"
            paddingRight={mobile ? "10vw" : ""}
            paddingLeft="10vw"
            background="#7050c2"
            display="flex"
            flexDirection={mobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
        >
            <Pane
                width={mobile ? "100%" : "40%"}
                data-aos="fade-right"
                minWidth="30vw"
            >
                <Pane display="flex" alignItems="center" marginBottom="2.5em">
                    <Avatar
                        src={Logo}
                        size={mobile ? "64px" : "96px"}
                        marginRight="2em"
                    />
                    <Heading
                        size={900}
                        fontSize={mobile ? "32px" : "48px"}
                        color="white"
                        textAlign="left"
                        verticalAlign="text-top"
                    >
                        Who Are We?
                    </Heading>
                </Pane>
                <Text size={500} color="white">
                    We host a variety of workshops and community activities each
                    week, with tutoring and homework help offered at select
                    times every single day. Our platform is a heavily modified
                    messaging chatroom and allows students to effectively and
                    anonymously access our services. In fact, we are the first
                    non-profit group in North America to offer tutoring through
                    the convenience of a messaging platform.
                </Text>
                <UnorderedList
                    icon="tick-circle"
                    iconColor="success"
                    size={600}
                    marginTop="3em"
                >
                    <ListItem color="white">
                        <Heading size={700} color="#00d7d2">
                            Live Virtual Tutoring
                        </Heading>
                        <Text color="white" size={500}>
                            Log on to Oracle to receive on-demand homework help
                            and concept clarification, completely free!
                        </Text>
                    </ListItem>
                    <ListItem color="white">
                        <Heading size={700} color="#00d7d2" marginTop="1em">
                            Community Events
                        </Heading>
                        <Text color="white" size={500}>
                            Socialize, share memes, stream music, participate in
                            weekly gift card raffles. It’s important to leave
                            time to relax.
                        </Text>
                    </ListItem>
                    <ListItem color="white">
                        <Pane
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            marginTop="1em"
                        >
                            <Heading size={700} color="#00d7d2">
                                Workshops
                            </Heading>
                            <Badge
                                color="blue"
                                marginLeft="10px"
                                marginTop="6px"
                                isSolid
                            >
                                Coming Soon
                            </Badge>
                        </Pane>

                        <Text color="white" size={500}>
                            Oracle will host daily workshops on extracurricular
                            topics lead by talented and motivated youth
                            instructors.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Pane>
            <Pane
                marginLeft="5em"
                borderTopLeftRadius={50}
                borderBottomLeftRadius={50}
                overflow="hidden"
                display={mobile ? "none" : ""}
            >
                <img src={Classroom} alt="Classroom" />
            </Pane>
        </Pane>
    );
}

export default About;
