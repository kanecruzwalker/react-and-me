import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import About from "./pages/About.js"
import Contact from "./pages/ContactMe"
import Portfolio from "./pages/Portfolio"
import "./styles/App.css";
import Navbar from "./components/NavBar";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio/>
                </Route>
            </div>
        </Router>
    );
}

export default App;