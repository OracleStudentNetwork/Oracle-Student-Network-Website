import React from "react";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Paragraph } from "evergreen-ui";

function InfoCard(props) {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    const content = (
        <Pane width={mobile ? "100%" : "50%"} marginBottom="2em">
            <Heading size={900} textAlign="left" color="#212121">
                {props.title}
            </Heading>
            {props.content}
        </Pane>
    );
    const img = (
        <Pane>
            <img src={props.img} alt={props.alt} width="250px" />
        </Pane>
    );
    const card = [content, img];
    if (props.reverse && !mobile) card.reverse();
    return (
        <Pane
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            marginBottom="12vh"
            flexDirection={mobile ? "column" : "row"}
        >
            {card}
        </Pane>
    );
}

export default InfoCard;
