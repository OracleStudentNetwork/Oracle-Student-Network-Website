import React from "react";
import { Pane, Heading, Text, Paragraph } from "evergreen-ui";

class Mission extends React.Component {
    render() {
        const mobile = this.props.mobile;
        return (
            <Pane
                textAlign="center"
                paddingRight="15vw"
                paddingLeft="15vw"
                paddingTop="10vh"
                paddingBottom="10vh"
                background="#f3f5f9"
            >
                <Heading
                    size={900}
                    fontSize={mobile ? "32px" : "48px"}
                    color="#6845c2"
                >
                    Our Mission
                </Heading>
                <Pane marginTop="4vh">
                    <Paragraph
                        size={500}
                        fontSize={mobile ? "18px" : "20px"}
                        color="#6845c2"
                        lineHeight="150%"
                        color="#5b6987"
                    >
                        Oracle Tutoring was founded by a group of volunteer
                        tutors and instructors passionate about supporting
                        students achieve to their fullest potential during CoVID
                        induced distance learning. We want to revolutionize how students 
                        experience the intersection of technology and education.
                    </Paragraph>
                </Pane>
            </Pane>
        );
    }
}
export default Mission;
