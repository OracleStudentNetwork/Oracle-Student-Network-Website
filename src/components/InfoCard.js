import React from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Heading } from "@chakra-ui/core";

function InfoCard(props) {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    const content = (
        <Box width={mobile ? "100%" : "50%"} marginBottom="2em">
            <Heading fontSize="32px" textAlign="left" color="#212121">
                {props.title}
            </Heading>
            {props.content}
        </Box>
    );
    const img = (
        <Box>
            <img src={props.img} alt={props.alt} width="250px" />
        </Box>
    );
    const card = [content, img];
    if (props.reverse && !mobile) card.reverse();
    return (
        <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            marginBottom="12vh"
            flexDirection={mobile ? "column" : "row"}
        >
            {card}
        </Box>
    );
}

export default InfoCard;
