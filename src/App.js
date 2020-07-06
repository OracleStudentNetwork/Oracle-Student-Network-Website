import React from "react";
import "./App.css";
import { Pane } from "evergreen-ui";
import Hero from "./components/Hero";
import Info from "./components/Info";

function App() {
    return (
        <Pane>
            <Hero />
            <Info />
        </Pane>
    );
}

export default App;
