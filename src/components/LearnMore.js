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
                title="Become a Volunteer Scholar or team member"
                content="Are you a secondary or post-secondary student interested in helping students across North America succeed during distance learning? Volunteer hours will be provided if requested. We are also looking for workshop leaders, platform moderators, and python developers comfortable with using Discord’s API. Express interest to join us in this form."
                img={Team}
                alt="placeholder"
                reverse={false}
            />
            <InfoCard
                title="Content Policy"
                content="We want to ensure students follow all required policies related to academic honesty and plagiarism. Our volunteer scholars are instructed to not just answer questions, but rather guide a student’s thinking in the right direction. Help for essays or other written works only consist of suggestions made during the brainstorming or peer editing process. View our full content policy here."
                img={Terms}
                alt="placeholder"
                reverse={true}
            />
            <InfoCard
                title="Donate"
                content="Oracle Tutoring offers all its services completely free of charge. We rely on donations, grants, and partnerships to sustain our operations. If you would like to help us continue to provide educational aids and workshops to students, we are accepting donations through PayPal."
                img={Vault}
                alt="placeholder"
                reverse={false}
            />
        </Pane>
    );
}

export default LearnMore;
