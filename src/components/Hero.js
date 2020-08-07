import React from "react";
import HeroImage from "../assets/hero.png";
import Logo from "../assets/logo.png";
import Signup from "./Signup";
import { Heading, Text, Avatar, Box } from "@chakra-ui/core";

class Hero extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Box
                display="flex"
                paddingBottom="10vh"
                justifyContent="center"
                alignItems="center"
                height={mobile ? "100vh" : "95vh"}
                paddingRight="20px"
                paddingLeft="20px"
                flexDirection={mobile ? "column" : "row"}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={mobile ? "center" : "flex-start"}
                    width={mobile ? "100%" : "800px"}
                    paddingLeft="20px"
                    paddingRight="20px"
                >
                    <Box display={mobile ? "" : "none"} marginTop="20px">
                        <Avatar src={Logo} size="2xl" />
                    </Box>
                    <Box textAlign={mobile ? "center" : ""} width="100%">
                        <Heading
                            size="2xl"
                            fontSize={mobile ? "42px" : "72px"}
                            color="#212121"
                            marginBottom="20px"
                        >
                            Oracle{" "}
                            <span style={{ color: "#6f42c1" }}>Tutoring</span>
                        </Heading>
                        <Text
                            color="#757575"
                            lineHeight="28px"
                            fontSize={mobile ? "18px" : "20px"}
                            marginRight={mobile ? "" : "30%"}
                            marginBottom="20px"
                        >
                            Getting help with homework has never been so easy.
                            Get involved by signing up for our closed beta
                            below.
                        </Text>
                    </Box>
                    <Box width="100%" marginTop="10px">
                        <Signup
                            alignment={mobile ? "center" : "left"}
                            width={mobile ? "100%" : "50%"}
                            mobile={mobile}
                        />
                    </Box>
                </Box>
                <Box
                    display={mobile ? "none" : "flex"}
                    justifyContent="center"
                    paddingLeft="20px"
                    paddingRight="20px"
                    alignItems="center"
                    width="400px"
                >
                    <Box>
                        <img
                            src={HeroImage}
                            height="auto"
                            width="80%"
                            alt="Hero"
                        />
                    </Box>
                </Box>
            </Box>
        );
    }
}
export default Hero;
