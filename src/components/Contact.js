import React from "react";
import { Pane, Heading, Button, TextInput, toaster } from "evergreen-ui";
import Config from "./Config";
import Firebase from "firebase";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            lastSubmission: Date.now() - 5000,
        };
        if (!Firebase.apps.length) {
            Firebase.initializeApp(Config);
            Firebase.analytics();
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.writeToDataBase = this.writeToDataBase.bind(this);
    }
    updateEmail(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }
    writeToDataBase() {
        const timeElapsed = (Date.now() - this.state.lastSubmission) / 1000;
        if (timeElapsed < 5) {
            toaster.warning("You can only only sign up once every 5 seconds");
            return;
        }
        Firebase.database().ref("/").push(this.state.email);
        Firebase.analytics().logEvent("sign_up");
        this.setState(
            {
                email: "",
                lastSubmission: Date.now(),
            },
            () => {
                toaster.success("Sign up successful!");
            }
        );
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
                height="100vh"
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
                </Pane>
                <Pane display="flex" flexDirection="column" marginTop="3vh">
                    <Pane textAlign="center">
                        <Heading
                            size={this.props.mobile ? 600 : 900}
                            color="white"
                            marginTop="1em"
                        >
                            Join our mailing list
                        </Heading>
                        <TextInput
                            width="60%"
                            name="email"
                            value={this.state.email}
                            onChange={this.updateEmail}
                            placeholder="someone@example.com"
                            marginTop="5vh"
                            height={48}
                        />
                        <Button
                            iconAfter="envelope"
                            appearance="primary"
                            intent="success"
                            marginLeft="1em"
                            onClick={this.writeToDataBase}
                            height={48}
                        >
                            Sign Up
                        </Button>
                    </Pane>
                    <Pane marginTop="2em">
                        {/* <iframe
                            src="https://discordapp.com/widget?id=726625462083649637&theme=dark"
                            width={this.props.mobile ? "250" : "350"}
                            height="auto"
                            allowtransparency="true"
                            frameborder="0"
                        ></iframe> */}
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}

export default Contact;
