import React from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";
import Navbar from "./components/Navbar";
import AOS from "aos";
import Config from "./components/Config";
import Firebase from "firebase/app";
import "firebase/analytics";
import "aos/dist/aos.css";
AOS.init({
    offset: 400,
    once: true,
    delay: 200,
});

function App() {
    if (!Firebase.apps.length) Firebase.initializeApp(Config);
    Firebase.analytics();
    const mobile = useMediaQuery({ query: "(max-width: 800px)" });
    return (
        <Router>
            <Navbar mobile={mobile} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/terms" component={Terms} />
            </Switch>
        </Router>
    );
}

export default App;
