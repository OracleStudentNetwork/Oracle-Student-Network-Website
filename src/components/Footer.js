import React from "react";
import { Pane, Heading, Text } from "evergreen-ui";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Pane
                paddingRight="5vw"
                paddingLeft="5vw"
                background="#222"
                minHeight="60vh"
            >
                <hr></hr>
                <Pane
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                    justifyContent="space-around"
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
                                href="https://www.instagram.com/oracletutoring/"
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
                        </Pane>
                    </Pane>
                    {/* <Pane textAlign="center" flexGrow="1">
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
                    </Pane> */}
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
