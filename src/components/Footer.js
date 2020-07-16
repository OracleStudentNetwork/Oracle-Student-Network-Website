import React from "react";
import { Pane, Heading, Text, Link } from "evergreen-ui";
import Logo from "../assets/logo_transparent.png";

class Footer extends React.Component {
    render() {
        return (
            <Pane
                paddingRight="15vw"
                paddingLeft="15vw"
                paddingTop="5vh"
                paddingBottom="5vh"
                background="#222"
                minHeight="60vh"
                borderTop="1px white solid"
            >
                <Pane
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                >
                    <Pane display="flex" flexDirection="column">
                        <Heading size={700} color="white" marginBottom="18px">
                            About Us
                        </Heading>
                        <a href="/#mission" className="footer-links">
                            <Heading color="white" size={500}>
                                Our Mission
                            </Heading>
                        </a>
                        <a href="/#services" className="footer-links">
                            <Heading color="white" size={500}>
                                What We Do
                            </Heading>
                        </a>
                        <a href="/#learn-more" className="footer-links">
                            <Heading color="white" size={500}>
                                Learn More
                            </Heading>
                        </a>
                        <a href="/#contact" className="footer-links">
                            <Heading color="white" size={500}>
                                Contact Us
                            </Heading>
                        </a>
                    </Pane>
                    {/* <Pane display="flex" flexDirection="column">
                        <Heading size={700} color="white" marginBottom="18px">
                            Terms of Use
                        </Heading>
                        <a href="/terms" className="footer-links">
                            <Heading color="white" size={500}>
                                Terms of Service
                            </Heading>
                        </a>
                    </Pane> */}
                </Pane>
                <hr
                    style={{
                        border: "0px",
                        borderTop: "1px white solid",
                        opacity: "0.5",
                        marginTop: "48px",
                    }}
                ></hr>
                <Pane
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                    justifyContent="space-between"
                    marginTop="24px"
                >
                    <Pane
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <img src={Logo} height="30px" />
                        <Text color="white" size={500} marginLeft="16px">
                            info@osn-reo.org
                        </Text>
                    </Pane>
                    <Pane
                        textAlign="right"
                        marginTop={this.props.mobile ? "2vh" : ""}
                    >
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
                </Pane>
            </Pane>
        );
    }
}

export default Footer;
