import React from "react";
import Config from "./Config";
import Firebase from "firebase";
import { Pane, TextInput, Button, toaster } from "evergreen-ui";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            lastSubmission: Date.now() - 5000,
        };
        if (!Firebase.apps.length) {
            Firebase.initializeApp(Config);
            Firebase.analytics();
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.writeToDataBase = this.writeToDataBase.bind(this);
    }
    updateEmail(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }
    writeToDataBase() {
        const timeElapsed = (Date.now() - this.state.lastSubmission) / 1000;
        if (timeElapsed < 5) {
            toaster.warning("You can only only sign up once every 5 seconds");
            return;
        }
        Firebase.database().ref("/").push(this.state.email);
        Firebase.analytics().logEvent("sign_up");
        this.setState(
            {
                email: "",
                lastSubmission: Date.now(),
            },
            () => {
                toaster.success("Sign up successful!");
            }
        );
    }
    render() {
        return (
            <Pane textAlign={this.props.alignment}>
                <Pane
                    display="flex"
                    flexDirection="row"
                    justifyContent={this.props.alignment}
                >
                    <TextInput
                        width="50%"
                        name="email"
                        value={this.state.email}
                        onChange={this.updateEmail}
                        placeholder="someone@example.com"
                        height={38}
                    />
                    <Button
                        iconAfter="envelope"
                        appearance="primary"
                        intent="success"
                        onClick={this.writeToDataBase}
                        height={38}
                        marginLeft="10px"
                    >
                        Sign Up
                    </Button>
                </Pane>
            </Pane>
        );
    }
}

export default Signup;
