import React from "react";
import { useMediaQuery } from "react-responsive";
import { Pane } from "evergreen-ui";
import { Text, Link, Icon } from "@chakra-ui/core";
import InfoCard from "./InfoCard";
import Vault from "../assets/vault.svg";
import Terms from "../assets/terms.svg";
import Team from "../assets/team.svg";

function LearnMore() {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    const team = (
        <Text
            marginTop="1em"
            textAlign="left"
            fontSize="18px"
            lineHeight="28px"
            color="#5b6987"
        >
            Are you a secondary or post-secondary student interested in helping
            students succeed during distance learning? We are looking for
            tutors, instructors, moderators, and developers.{" "}
            <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScbDPN5zFmR-B0wLHDYEDIM4Moctt-2JATirh8ejLkHZrizkA/viewform?usp=sf_link"
                fontSize="18px"
                target="_blank"
                isExternal
                rel="noopener noreferrer"
            >
                Sign up here
                <Icon name="external-link" mx="2px" />
            </Link>
        </Text>
    );
    const policy = (
        <Text
            marginTop="1em"
            textAlign="left"
            fontSize="18px"
            lineHeight="28px"
            color="#5b6987"
        >
            Students must abide by all applicable policies related to academic
            honesty. Our volunteer tutors are instructed to guide a student’s
            thinking in the right direction. We do not write essays and tests;
            we provide peer editing, brainstorming feedback, and homework help.
        </Text>
    );
    const donate = (
        <Text
            marginTop="1em"
            textAlign="left"
            fontSize="18px"
            lineHeight="28px"
            color="#5b6987"
        >
            Oracle Tutoring offers all of its services completely free of
            charge. We rely on donations and grants to sustain our operations.
        </Text>
    );
    return (
        <Pane
            display="flex"
            flexDirection="column"
            paddingTop="10vh"
            paddingBottom="5em"
            paddingRight="10vw"
            paddingLeft="10vw"
            background="#f3f5f9"
        >
            <InfoCard
                title="Join Our Team"
                content={team}
                img={Team}
                alt="Join our Team"
                reverse={false}
            />
            <InfoCard
                title="Content Policy"
                content={policy}
                img={Terms}
                alt="Content Policy"
                reverse={true}
            />
            <InfoCard
                title="Donate"
                content={donate}
                img={Vault}
                alt="Donate"
                reverse={false}
            />
        </Pane>
    );
}

export default LearnMore;
