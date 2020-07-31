import React from "react";
import { Pane } from "evergreen-ui";
import InfoCard from "./InfoCard";
import Vault from "../assets/vault.svg";
import Terms from "../assets/terms.svg";
import Team from "../assets/team.svg";

function LearnMore() {
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
                content="Are you a secondary or post-secondary student interested in helping students succeed during distance learning? We are looking for tutors, instructors, moderators, and developers."
                img={Team}
                alt="Join our Team"
                reverse={false}
            />
            <InfoCard
                title="Content Policy"
                content="Students must abide by all applicable policies related to academic honesty. Our volunteer tutors are instructed to guide a student’s thinking in the right direction. We do not write essays and tests; we provide peer editing, brainstorming feedback, and homework help."
                img={Terms}
                alt="Content Policy"
                reverse={true}
            />
            <InfoCard
                title="Donate"
                content="Oracle Tutoring offers all of its services completely free of charge. We rely on donations and grants to sustain our operations."
                img={Vault}
                alt="Donate"
                reverse={false}
            />
        </Pane>
    );
}

export default LearnMore;
