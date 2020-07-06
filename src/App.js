import React from "react";
import "./App.css";
import { Pane } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import Hero from "./components/Hero";
import Info from "./components/Info";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    const mobile = useMediaQuery({ query: "(max-width: 680px)" });
    return (
        <Pane>
            <Hero />
            <About />
            <Info />
            <Contact mobile={mobile} />
        </Pane>
    );
}

export default App;
