import React from "react";
import { Pane } from "evergreen-ui";
import InfoCard from "./InfoCard";
import Logo from "../assets/logo.png";

function Info() {
    return (
        <Pane
            display="flex"
            flexDirection="column"
            background="#e8e9f1"
            paddingTop="15vh"
            paddingBottom="5em"
            paddingRight="10vw"
            paddingLeft="10vw"
        >
            <InfoCard
                title="Title"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
                img={Logo}
                reverse={false}
            />
            <InfoCard
                title="Title"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
                img={Logo}
                reverse={true}
            />
            <InfoCard
                title="Title"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. "
                img={Logo}
                reverse={false}
            />
        </Pane>
    );
}

export default Info;
