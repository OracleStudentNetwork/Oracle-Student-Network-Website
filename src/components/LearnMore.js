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
            background="#e8e9f1"
            paddingTop="15vh"
            paddingBottom="5em"
            paddingRight="10vw"
            paddingLeft="10vw"
        >
            <InfoCard
                title="Join Our Team"
                content="Are you a secondary or post-secondary student interested in helping students succeed during distance learning? We are looking for tutors, instructors, moderators, and developers. Express interest through this form."
                img={Team}
                alt="Join our Team"
                reverse={false}
            />
            <InfoCard
                title="Content Policy"
                content="Students must abide to their respective  policies related to academic honesty. Our volunteer tutors are instructed to guide a student’s thinking in the right direction. We do not write essays, rather provide peer editing and brainstorming feedback. Content policy found here."
                img={Terms}
                alt="Content Policy"
                reverse={true}
            />
            <InfoCard
                title="Donate"
                content="Oracle Tutoring offers all its services completely free of charge. We rely on donations and grants to sustain our operations. If you would like to support us as we help students tackle distance learning, we are accepting donations through PayPal."
                img={Vault}
                alt="Donate"
                reverse={false}
            />
        </Pane>
    );
}

export default LearnMore;