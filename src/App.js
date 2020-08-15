import React from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Navbar from "./components/Navbar";
import Config from "./util/Config";
import Firebase from "firebase/app";
import "firebase/analytics";
import "aos/dist/aos.css";

function App() {
    if (!Firebase.apps.length) Firebase.initializeApp(Config);
    Firebase.analytics();
    const mobile = useMediaQuery({ query: "(max-width: 900px)" });
    return (
        <Router>
            <Navbar mobile={mobile} />
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/terms" component={Terms} /> */}
            </Switch>
        </Router>
    );
}

export default App;
