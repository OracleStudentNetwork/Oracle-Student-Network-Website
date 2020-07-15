import React from "react";
import { Heading } from "evergreen-ui";
import Logo from "../assets/logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <nav
                height="5vh"
                style={{
                    display: this.props.mobile ? "none" : "flex",
                    justifyContent: "flex-start",
                }}
            >
                <a href="#hero" style={{ marginLeft: "1vw" }}>
                    <img src={Logo} width="40px" height="auto"></img>
                </a>
                <ul className="navbar-links">
                    <Heading size={500}>
                        <li>
                            <a href="#mission">Our Mission</a>
                        </li>
                    </Heading>
                    <Heading size={500}>
                        <li>
                            <a href="#services">What We Do</a>
                        </li>
                    </Heading>
                    <Heading size={500}>
                        <li>
                            <a href="#learn-more">Learn More</a>
                        </li>
                    </Heading>
                    <Heading size={500}>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </Heading>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
