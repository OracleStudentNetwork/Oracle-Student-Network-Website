import React from "react";
import { Pane, Heading, TextInput, Button, toaster, Text } from "evergreen-ui";
import Config from "./Config";
import Firebase from "firebase";

class Footer extends React.Component {
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
                paddingRight="5vw"
                paddingLeft="5vw"
                background="#121212"
                minHeight="60vh"
            >
                <hr></hr>
                <Pane
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                    justifyContent="space-around"
                    marginTop="5vh"
                >
                    <Pane textAlign="center" flexGrow="1">
                        <Heading
                            size={700}
                            color="white"
                            marginTop="1em"
                            marginBottom="1em"
                        >
                            Contact Us
                        </Heading>
                        <Text color="white" size={700}>
                            someone@example.com
                        </Text>
                    </Pane>
                    <Pane textAlign="center" flexGrow="1">
                        <Heading
                            size={700}
                            color="white"
                            marginTop="1em"
                            marginBottom="1em"
                        >
                            Connect with us
                        </Heading>
                        <Pane display="flex" justifyContent="space-evenly">
                            <a
                                href="https://www.instagram.com/"
                                rel="noopener"
                                target="_blank"
                            >
                                <i
                                    class="fab fa-instagram fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                            <a
                                href="https://discord.com/new"
                                rel="noopener"
                                target="_blank"
                            >
                                <i
                                    class="fab fa-discord fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                            <a
                                href="https://twitter.com/"
                                rel="noopener"
                                target="_blank"
                            >
                                <i
                                    class="fab fa-twitter fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                rel="noopener"
                                target="_blank"
                            >
                                <i
                                    class="fab fa-linkedin fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                            <a
                                href="https://www.github.com/"
                                rel="noopener"
                                target="_blank"
                            >
                                <i
                                    class="fab fa-github fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                        </Pane>
                    </Pane>
                    <Pane textAlign="center" flexGrow="1">
                        <Heading
                            size={700}
                            color="white"
                            marginTop="1em"
                            marginBottom="1em"
                        >
                            Join our mailing list
                        </Heading>
                        <Pane
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                        >
                            <TextInput
                                width="50%"
                                name="email"
                                value={this.state.email}
                                onChange={this.updateEmail}
                                placeholder="someone@example.com"
                                height={38}
                            />
                            <Button
                                iconAfter="envelope"
                                appearance="primary"
                                intent="success"
                                onClick={this.writeToDataBase}
                                height={38}
                            >
                                Sign Up
                            </Button>
                        </Pane>
                    </Pane>
                    <Pane marginTop="2em">
                        {/* <iframe
                            src="https://discordapp.com/widget?id=726625462083649637&theme=dark"
                            wid th={this.props.mobile ? "250" : "350"}
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

export default Footer;
