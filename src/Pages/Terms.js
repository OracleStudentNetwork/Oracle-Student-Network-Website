import React from "react";
import { Pane, Heading, Paragraph } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";

function Terms() {
    const mobile = useMediaQuery({ query: "(max-width: 800px)" });
    return (
        <Pane>
            <Pane
                paddingTop="10vh"
                paddingLeft="15vw"
                paddingRight="15vw"
                paddingBottom="10vh"
            >
                <Heading size={900} color="#031b4e">
                    Terms and Conditions
                </Heading>
                <Paragraph size={500} marginTop="4vh" color="#5b6987">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Paragraph>
            </Pane>
            <Footer mobile={mobile} />
        </Pane>
    );
}

export default Terms;
