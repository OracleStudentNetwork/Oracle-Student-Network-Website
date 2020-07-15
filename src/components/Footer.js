import React from "react";
import { Pane, Heading, Text, Link } from "evergreen-ui";

class Footer extends React.Component {
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
                        <Text color="white" size={500}>
                            <Link
                                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=oraclestudentnetwork@gmail.com&tf=1"
                                rel="noopener noreferrer"
                                target="_blank"
                                color="green"
                            >
                                oraclestudentnetwork@gmail.com
                            </Link>
                        </Text>
                    </Pane>
                    <Pane textAlign="center" flexGrow="1">
                        <Heading
                            size={700}
                            color="white"
                            marginTop="1em"
                            marginBottom="1em"
                        >
                            Connect With Us
                        </Heading>
                        <Pane display="flex" justifyContent="center">
                            <a
                                href="https://www.instagram.com/oracletutoring/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="social-logos"
                            >
                                <i
                                    class="fab fa-instagram fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                            <a
                                href="https://discord.com/new"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="social-logos"
                            >
                                <i
                                    class="fab fa-discord fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="social-logos"
                            >
                                <i
                                    class="fab fa-facebook-square fa-2x"
                                    style={{ color: "white" }}
                                ></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/osn-reo/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="social-logos"
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
