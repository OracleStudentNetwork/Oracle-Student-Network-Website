import React from "react";
import { Image, Box, Heading, Link } from "@chakra-ui/core";
import Logo from "../assets/logo_transparent.png";

class Footer extends React.Component {
    render() {
        return (
            <Box
                paddingRight="15vw"
                paddingLeft="15vw"
                paddingTop="5vh"
                paddingBottom="5vh"
                background="#212121"
                minHeight="60vh"
                borderTop="1px white solid"
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                >
                    <Box display="flex" flexDirection="column">
                        <Heading size="lg" color="white" marginBottom="18px">
                            About Us
                        </Heading>
                        <Link href="/#mission" className="footer-links">
                            Our Mission
                        </Link>
                        <Link href="/#services" className="footer-links">
                            What We Do
                        </Link>
                        <Link href="/#learn-more" className="footer-links">
                            Learn More
                        </Link>
                        <Link href="/#contact" className="footer-links">
                            Contact Us
                        </Link>
                    </Box>
                </Box>
                <hr
                    style={{
                        border: "0px",
                        borderTop: "1px white solid",
                        opacity: "0.5",
                        marginTop: "32px",
                    }}
                ></hr>
                <Box
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                    justifyContent="space-between"
                    marginTop="24px"
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Image src={Logo} height="30px" />
                        <Link
                            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@osn-reo.org&tf=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="white"
                            marginLeft="16px"
                        >
                            info@osn-reo.org
                        </Link>
                    </Box>
                    <Box
                        textAlign="right"
                        marginTop={this.props.mobile ? "5vh" : ""}
                    >
                        <Box display="flex" justifyContent="center">
                            <a
                                href="https://www.instagram.com/oraclestudentnetwork/"
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
                                href="https://www.facebook.com/Oracle-Student-Network-110914474028700/"
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
                        </Box>
                    </Box>

                    {/* <Box textAlign="center" flexGrow="1">
                        <Heading
                            size={700}
                            color="white"
                            marginTop="1em"
                            marginBottom="1em"
                        >
                            Join our mailing list
                        </Heading>
                        <Box
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
                        </Box>
                    </Box> */}
                </Box>
            </Box>
        );
    }
}

export default Footer;
