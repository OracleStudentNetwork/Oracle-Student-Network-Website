import React from "react";
import GoogleLogin from "react-google-login";
import { Box } from "@chakra-ui/core";

class Googlesignin extends React.Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        };
        return (
            <Box>
                <GoogleLogin
                    clientId="136122883712-eue6mcej6psh8meqkcemd8sklr277544.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
            </Box>
        );
    }
}

export default Googlesignin;
