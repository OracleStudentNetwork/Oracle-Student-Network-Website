import React from "react";
import { Image, Heading, Link } from "@chakra-ui/core";
import Logo from "../assets/nav_logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <nav
                height="5vh"
                style={{
                    display: this.props.mobile ? "none" : "flex",
                    justifyContent: "flex-start",
                    alignItems: this.props.mobile ? "flex-start" : "",
                }}
            >
                <a href="/" style={{ marginLeft: "1vw" }}>
                    <Image src={Logo} alt="logo" width="auto" height="40px" />
                </a>
                <ul className="navbar-links">
                    <Link href="/#mission">Our Mission</Link>
                    <Link href="/#services">What We Do</Link>
                    <Link href="/#roadmap">Road Map</Link>
                    <Link href="/#learn-more">Learn more</Link>
                    <Link href="/#contact">Contact Us</Link>
                    {/* <Heading size={500}>
                        <li>
                            <a href="terms">Terms</a>
                        </li>
                    </Heading> */}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
