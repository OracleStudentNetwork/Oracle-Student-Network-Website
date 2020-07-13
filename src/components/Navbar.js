import React from "react";
import { Heading } from "evergreen-ui";

class Navbar extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Navbar;
