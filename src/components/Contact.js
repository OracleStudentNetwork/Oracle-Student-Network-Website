import React from "react";
import { Pane, Heading, Button } from "evergreen-ui";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Pane
                background="#121212"
                paddingTop="15vh"
                paddingRight="15vw"
                paddingLeft="15vw"
                textAlign="center"
                display="flex"
                flexDirection="column"
                height="40vh"
                minHeight="350px"
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
                    <Button
                        marginTop="5vh"
                        iconAfter="arrow-right"
                        appearance="primary"
                        intent="success"
                        height={48}
                    >
                        Join our Discord
                    </Button>
                </Pane>
            </Pane>
        );
    }
}

export default Contact;
