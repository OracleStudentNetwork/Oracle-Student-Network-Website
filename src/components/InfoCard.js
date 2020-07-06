import React from "react";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Paragraph } from "evergreen-ui";

function InfoCard(props) {
    const mobile = useMediaQuery({ query: "(max-width: 1000px)" });
    const content = (
        <Pane width={mobile ? "100%" : "30%"} marginBottom="1em">
            <Heading
                size={900}
                textAlign={props.reverse ? "right" : "left"}
                color="#6845c2"
            >
                {props.title}
            </Heading>
            <Paragraph
                size={600}
                marginTop="1em"
                textAlign={props.reverse ? "right" : "left"}
                fontSize="18px"
            >
                {props.content}
            </Paragraph>
        </Pane>
    );
    const img = (
        <Pane elevation={2} borderRadius={5} border marginBottom="1em">
            <img src={props.img} />
        </Pane>
    );
    if (props.reverse) {
        return (
            <Pane
                display="flex"
                justifyContent="space-evenly"
                margin={32}
                flexDirection={mobile ? "column" : "row"}
            >
                {img}
                {content}
            </Pane>
        );
    }
    return (
        <Pane
            display="flex"
            justifyContent="space-evenly"
            margin={32}
            flexDirection={mobile ? "column" : "row"}
        >
            {content}
            {img}
        </Pane>
    );
}

export default InfoCard;
