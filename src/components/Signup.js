import React from "react";
import Config from "../util/Config";
import Firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";
import { Pane, TextInput, toaster } from "evergreen-ui";
import { Button, Input } from "@chakra-ui/core";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            valid: false,
            lastSubmission: Date.now() - 5000,
        };
        this.validator = require("email-validator");
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
            valid: this.validator.validate(value),
        });
    }
    writeToDataBase() {
        const timeElapsed = (Date.now() - this.state.lastSubmission) / 1000;
        // get current time
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "/" + mm + "/" + yyyy;
        if (timeElapsed < 5) {
            toaster.warning("You can only only sign up once every 5 seconds");
            return;
        }
        if (!this.state.valid) {
            toaster.warning("You must input a valid email address!");
            return;
        }
        Firebase.database()
            .ref("/")
            .push({
                email: this.state.email,
                time: hour + "h " + minute + "m " + second + "s",
                date: today,
            });
        Firebase.analytics().logEvent("sign_up");
        this.setState(
            {
                email: "",
                lastSubmission: Date.now(),
            },
            () => {
                toaster.success("Sign up successful!", {
                    description: "We will be in contact with you shortly",
                });
            }
        );
    }
    render() {
        return (
            <Pane textAlign={this.props.alignment}>
                <Pane
                    display="flex"
                    flexDirection={this.props.mobile ? "column" : "row"}
                    justifyContent={this.props.alignment}
                    width="100%"
                >
                    <Input
                        size="lg"
                        width={this.props.width}
                        minWidth="150px"
                        name="email"
                        value={this.state.email}
                        onChange={this.updateEmail}
                        placeholder="someone@example.com"
                        borderTopRightRadius="none"
                        borderBottomRightRadius="none"
                    />
                    <Button
                        variantColor="purple"
                        size="lg"
                        onClick={this.writeToDataBase}
                        minWidth={130}
                        marginTop={this.props.mobile ? "10px" : ""}
                        borderTopLeftRadius="none"
                        borderBottomLeftRadius="none"
                    >
                        Sign Up
                    </Button>
                </Pane>
            </Pane>
        );
    }
}

export default Signup;
