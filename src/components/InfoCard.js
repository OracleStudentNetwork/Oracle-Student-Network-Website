import React from "react";
import { useMediaQuery } from "react-responsive";
import { Pane, Heading, Paragraph } from "evergreen-ui";

function InfoCard(props) {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    const content = (
        <Pane width={mobile ? "100%" : "40%"} marginBottom="2em">
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
                textAlign="justify"
                fontSize="18px"
            >
                {props.content}
            </Paragraph>
        </Pane>
    );
    const img = (
        <Pane elevation={2} borderRadius={5} border>
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
