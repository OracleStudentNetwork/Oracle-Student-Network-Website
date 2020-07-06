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
        if (!Firebase.apps.length) Firebase.initializeApp(Config);
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
                background="#333"
                paddingTop="12vh"
                paddingBottom="12vh"
                paddingRight="15vw"
                paddingLeft="15vw"
                textAlign="center"
                display="flex"
                flexDirection="column"
            >
                <Pane>
                    <Heading
                        size={900}
                        fontSize="48px"
                        textAlign="center"
                        color="white"
                    >
                        So What Are You Waiting For?
                    </Heading>
                </Pane>
                <Pane
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                    marginTop="4em"
                    justifyContent="space-evenly"
                >
                    <Pane textAlign={this.props.mobile ? "center" : "left"}>
                        <Heading size={900} color="white" marginTop="1em">
                            Sign up for our mailing list
                        </Heading>
                        <TextInput
                            width="60%"
                            name="email"
                            value={this.state.email}
                            onChange={this.updateEmail}
                            placeholder="someone@example.com"
                            marginTop="2em"
                        />
                        <Button
                            iconAfter="envelope"
                            appearance="primary"
                            intent="success"
                            marginLeft="1em"
                            onClick={this.writeToDataBase}
                        >
                            Sign Up
                        </Button>
                    </Pane>
                    <Pane marginTop={this.props.mobile ? "1em" : ""}>
                        <iframe
                            src="https://discordapp.com/widget?id=726625462083649637&theme=dark"
                            width="350"
                            height="500"
                            allowtransparency="true"
                            frameborder="0"
                        ></iframe>
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}

export default Contact;
