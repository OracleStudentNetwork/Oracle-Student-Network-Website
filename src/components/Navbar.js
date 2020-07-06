import React from "react";
import { Pane, Heading } from "evergreen-ui";

class Navbar extends React.Component {
    render() {
        // TODO
        // Add footer to fix anchor scrolling
        return (
            <nav>
                <ul className="navbar-links">
                    <Heading size={this.props.mobile ? 500 : 600}>
                        <li>
                            <a href="#info">Our Mission</a>
                        </li>
                    </Heading>
                    <Heading size={this.props.mobile ? 500 : 600}>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                    </Heading>
                    <Heading size={this.props.mobile ? 500 : 600}>
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
