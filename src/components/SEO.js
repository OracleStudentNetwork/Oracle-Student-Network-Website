import React from "react";
import { Helmet } from "react-helmet";

export default () => (
    <Helmet>
        <title>Oracle Student Network</title>
        <meta
            name="description"
            content="Oracle Tutoring was founded by a group of volunteer tutors and instructors passionate about supporting students achieve to their fullest potential during CoVID induced distance learning."
        />
        {/* open graph protocol */}
        <meta property="og:url" content="https://osn-reo.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oracle Student Network" />
        <meta
            property="og:description"
            content="Oracle Tutoring was founded by a group of volunteer tutors and instructors passionate about supporting students achieve to their fullest potential during CoVID induced distance learning."
        />
        <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/oracle-student-network.appspot.com/o/banner.png?alt=media&token=a5bae3ff-9f96-4852-a397-3cedd792263c"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://osn-reo.org/" />
        <meta property="twitter:title" content="Oracle Student Network" />
        <meta
            property="twitter:description"
            content="Oracle Tutoring was founded by a group of volunteer tutors and instructors passionate about supporting students achieve to their fullest potential during CoVID induced distance learning."
        />
        <meta
            property="twitter:image"
            content="https://firebasestorage.googleapis.com/v0/b/oracle-student-network.appspot.com/o/banner.png?alt=media&token=a5bae3ff-9f96-4852-a397-3cedd792263c"
        />
    </Helmet>
);
