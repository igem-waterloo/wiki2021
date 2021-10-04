import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectDescription from "./pages/ProjectDescription/ProjectDescription"
import Engineering from './pages/Engineering/Engineering';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Accessibility from './toolbar/Accessibility';
import { keepTheme } from "./utils/themes.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [fontSizeMult, setFontSizeMult] = useState(1);

    useEffect(() => {
        keepTheme();
    });

    const changeFontSizeMult = (newMult) => {
        console.log(fontSizeMult);
        if (fontSizeMult > 0.5 && fontSizeMult < 1.5) {
            setFontSizeMult(fontSizeMult + newMult);
        }
    }

    return (
        <div className="App">
            <Router>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Engineering />
                    </Route>
                    <Route exact path="/team">
                        <HomePage />
                    </Route>
                    <Route exact path="/project/description">
                        <ProjectDescription />
                    </Route>
                    <Route exact path="/project/engineering">
                        <Engineering />
                    </Route>
                </Switch>
                </div>
                <div>
                <Footer />
                </div>
            </Router>
            <Accessibility changeFontSizeMult={changeFontSizeMult}></Accessibility>
        </div>
    );
}

export default App;