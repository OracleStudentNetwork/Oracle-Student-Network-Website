import React from "react";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Paragraph } from "evergreen-ui";

function InfoCard(props) {
    const mobile = useMediaQuery({ query: "(max-width: 1000px)" });
    if (props.reverse) {
        return (
            <Pane
                display="flex"
                justifyContent="space-evenly"
                margin={32}
                flexDirection={mobile ? "column" : "row"}
            >
                <Pane elevation={2} borderRadius={5} border marginBottom="1em">
                    <img src={props.img} />
                </Pane>
                <Pane width={mobile ? "100%" : "30%"} marginBottom="1em">
                    <Heading size={900} textAlign="right">
                        {props.title}
                    </Heading>
                    <Paragraph size={600} marginTop="1em" textAlign="right">
                        {props.content}
                    </Paragraph>
                </Pane>
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
            <Pane width={mobile ? "100%" : "30%"} marginBottom="1em">
                <Heading size={900}>{props.title}</Heading>
                <Paragraph size={600} marginTop="1em">
                    {props.content}
                </Paragraph>
            </Pane>
            <Pane elevation={2} borderRadius={5} border marginBottom="1em">
                <img src={props.img} />
            </Pane>
        </Pane>
    );
}

export default InfoCard;
