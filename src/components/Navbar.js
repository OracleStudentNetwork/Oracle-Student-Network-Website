import React from "react";
import { Heading, Pane } from "evergreen-ui";

class Navbar extends React.Component {
    render() {
        return (
            <Pane display={this.props.mobile ? "none" : ""}>
                <nav height="5vh">
                    <ul className="navbar-links">
                        <Heading size={this.props.mobile ? 500 : 600}>
                            <li>
                                <a href="#services">What We Do</a>
                            </li>
                        </Heading>
                        <Heading size={this.props.mobile ? 500 : 600}>
                            <li>
                                <a href="#learn-more">Learn More</a>
                            </li>
                        </Heading>
                        <Heading size={this.props.mobile ? 500 : 600}>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </Heading>
                    </ul>
                </nav>
            </Pane>
        );
    }
}

export default Navbar;
