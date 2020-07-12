import React from "react";
import { Pane, Heading, Button, Text, Paragraph } from "evergreen-ui";
import Appstore from "../assets/appstore.svg";
import Playstore from "../assets/playstore.png";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Pane
                background="#222"
                paddingTop="15vh"
                paddingBottom="10vh"
                paddingRight="15vw"
                paddingLeft="15vw"
                textAlign="center"
                display="flex"
                flexDirection="column"
                minHeight="40vh"
                justifyContent="space-between"
            >
                <Pane>
                    <Heading
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
                    </a>
                </Pane>
                <Pane display="flex" marginTop="2em" justifyContent="center">
                    <Pane margin={10}>
                        <a
                            href="https://apps.apple.com/us/app/discord-chat-for-games/id985746746"
                            rel="noopener"
                            target="_blank"
                        >
                            <img src={Appstore}></img>
                        </a>
                    </Pane>
                    <Pane margin={10}>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.discord&hl=en_CA&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                            rel="noopener"
                            target="_blank"
                        >
                            <img
                                height="40px"
                                alt="Get it on Google Play"
                                src={Playstore}
                            />
                        </a>
                    </Pane>
                </Pane>
                <Pane>
                    <Paragraph color="white">
                        If you’re on mobile, we highly recommend the Discord
                        app, found on all major app stores.
                    </Paragraph>
                </Pane>
            </Pane>
        );
    }
}

export default Contact;
