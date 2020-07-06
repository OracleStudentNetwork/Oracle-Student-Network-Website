import React from "react";
import "./App.css";
import { Pane } from "evergreen-ui";
import Landing from "./components/Landing";
import Info from "./components/Info";

function App() {
    return (
        <Pane>
            <Landing />
            <Info />
        </Pane>
    );
}

export default App;
