import React from "react";
import { Image, Heading, Box, Text } from "@chakra-ui/core";
import Appstore from "../assets/appstore.svg";
import Playstore from "../assets/playstore.png";
import Signup from "./Signup";

class Contact extends React.Component {
    render() {
        return (
            <Box
                background="#212121"
                paddingTop="15vh"
                paddingBottom="10vh"
                paddingRight="10vw"
                paddingLeft="10vw"
                textAlign="center"
                display="flex"
                flexDirection="column"
                minHeight="40vh"
                justifyContent="space-between"
            >
                <Box>
                    <Box textAlign="center" flexGrow="1">
                        <Heading color="white" size="xl" marginBottom="5vh">
                            Sign up for our closed-beta!
                        </Heading>
                        <Signup
                            alignment="center"
                            width={this.props.mobile ? "100%" : "50%"}
                            mobile={this.props.mobile}
                        />
                    </Box>
                    {/* <Heading
                        size={900}
                        fontSize={this.props.mobile ? "32px" : "48px"}
                        textAlign="center"
                        color="white"
                    >
                        So What Are You Waiting For?
                    </Heading>
                    <a href="https://google.com" rel="noopener" target="_blank">
                        <Button
                            iconAfter="arrow-right"
                            appearance="primary"
                            intent="success"
                            height={48}
                            marginTop="5vh"
                        >
                            Join our Discord
                        </Button>
                    </a> */}
                </Box>
                <Box display="flex" marginTop="2em" justifyContent="center">
                    <Box margin="10px">
                        <a
                            href="https://apps.apple.com/us/app/discord-chat-for-games/id985746746"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Image src={Appstore} alt="Get it on App Store" />
                        </a>
                    </Box>
                    <Box margin="10px">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.discord&hl=en_CA&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Image
                                height="40px"
                                alt="Get it on Google Play"
                                src={Playstore}
                            />
                        </a>
                    </Box>
                </Box>
                <Box>
                    <Text color="white">
                        If you’re on mobile, we highly recommend the Discord
                        app, found on all major app stores.
                    </Text>
                </Box>
            </Box>
        );
    }
}

export default Contact;
