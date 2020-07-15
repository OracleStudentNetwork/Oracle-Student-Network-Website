import React from "react";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Paragraph } from "evergreen-ui";

function InfoCard(props) {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    const content = (
        <Pane width={mobile ? "100%" : "40%"} marginBottom="2em">
            <Heading size={900} textAlign="left" color="#031b4e">
                {props.title}
            </Heading>
            <Paragraph
                size={500}
                marginTop="1em"
                textAlign="left"
                fontSize="18px"
                lineHeight="28px"
                color="#5b6987"
            >
                {props.content}
            </Paragraph>
        </Pane>
    );
    const img = (
        <Pane borderRadius={5} border>
            <img src={props.img} alt={props.alt} width="250px" />
        </Pane>
    );
    const card = [content, img];
    if (props.reverse && !mobile) card.reverse();
    return (
        <Pane
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            marginBottom="12vh"
            flexDirection={mobile ? "column" : "row"}
            data-aos="fade-up"
        >
            {card}
        </Pane>
    );
}

export default InfoCard;
