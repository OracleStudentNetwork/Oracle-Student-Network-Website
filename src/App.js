import React from "react";
import "./App.css";
import { Pane } from "evergreen-ui";
import Hero from "./components/Hero";
import Info from "./components/Info";
import About from "./components/About";

function App() {
    return (
        <Pane>
            <Hero />
            <About />
            <Info />
        </Pane>
    );
}

export default App;
