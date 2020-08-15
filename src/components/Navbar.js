import React from "react";
import {
    Image,
    Text,
    Drawer,
    Button,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    Heading,
} from "@chakra-ui/core";
import NavLogo from "../assets/nav_logo.png";
import Logo from "../assets/logo.png";
import Googlesignin from "./Googlesignin";

function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    if (!props.mobile) {
        return (
            <nav
                height="5vh"
                style={{
                    justifyContent: "space-between",
                }}
            >
                <Box display="flex" alignItems="center">
                    <a href="/" style={{ marginLeft: "1vw" }}>
                        <Image
                            src={NavLogo}
                            alt="logo"
                            width="auto"
                            height="40px"
                        />
                    </a>
                    <ul className="navbar-links">
                        <Text fontSize="md" color="#212121">
                            <a href="/#mission">Our Mission</a>
                        </Text>
                        <Text fontSize="md" color="#212121">
                            <a href="/#services">What We Do</a>
                        </Text>
                        <Text fontSize="md" color="#212121">
                            <a href="/#roadmap">Road Map</a>
                        </Text>
                        <Text fontSize="md" color="#212121">
                            <a href="/#learn-more">Learn More</a>
                        </Text>
                        <Text fontSize="md" color="#212121">
                            <a href="/#contact">Contact Us</a>
                        </Text>
                    </ul>
                </Box>
                <Box>
                    <Googlesignin />
                </Box>
            </nav>
        );
    } else {
        return (
            <nav
                height="5vh"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <a href="/">
                    <Image src={Logo} alt="logo" width="auto" height="40px" />
                </a>
                <Button ref={btnRef} onClick={onOpen}>
                    <i class="fas fa-bars"></i>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="full"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Box display="flex" flexDirection="column">
                                <Box mt="10px">
                                    <a href="/">
                                        <Image
                                            src={Logo}
                                            alt="logo"
                                            width="auto"
                                            height="40px"
                                        />
                                    </a>
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="flex-start"
                                    textAlign="left"
                                    mt="20px"
                                >
                                    <Box borderBottom="1px grey solid">
                                        <Text
                                            fontSize="xl"
                                            color="#212121"
                                            py="3vh"
                                        >
                                            <a href="/#mission">Our Mission</a>
                                        </Text>
                                    </Box>
                                    <Box borderBottom="1px grey solid">
                                        <Text
                                            fontSize="xl"
                                            color="#212121"
                                            py="3vh"
                                        >
                                            <a href="/#services">What We Do</a>
                                        </Text>
                                    </Box>
                                    <Box borderBottom="1px grey solid">
                                        <Text
                                            fontSize="xl"
                                            color="#212121"
                                            py="3vh"
                                        >
                                            <a href="/#roadmap">Road Map</a>
                                        </Text>
                                    </Box>
                                    <Box borderBottom="1px grey solid">
                                        <Text
                                            fontSize="xl"
                                            color="#212121"
                                            py="3vh"
                                        >
                                            <a href="/#learn-more">
                                                Learn More
                                            </a>
                                        </Text>
                                    </Box>
                                    <Box borderBottom="1px grey solid">
                                        <Text
                                            fontSize="xl"
                                            color="#212121"
                                            py="3vh"
                                        >
                                            <a href="/#contact">Contact Us</a>
                                        </Text>
                                    </Box>
                                    <Box py="3vh">
                                        <Googlesignin />
                                    </Box>
                                </Box>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </nav>
        );
    }
}

export default Navbar;
