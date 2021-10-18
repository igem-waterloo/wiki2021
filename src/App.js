import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import ProjectDescription from "./pages/ProjectDescription/ProjectDescription"
import Engineering from './pages/Engineering/Engineering';
import HumanPractices from "./pages/HumanPractices/HumanPractices";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sticky from 'react-stickynode';
import StickyBox from "react-sticky-box";
import styles from './App.css';
import Accessibility from './toolbar/Accessibility';
import { keepTheme, keepSize } from "./utils/themes.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [fontSizeMult, setFontSizeMult] = useState(1);

    useEffect(() => {
        keepTheme();
        keepSize();
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
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                <StickyBox style={{zIndex: "5", position: "relative"}}>
                    <Header />
                </StickyBox>
                <Switch>
                    <Route exact path="/Team:Waterloo">
                        <HomePage/>
                    </Route>
                    <Route exact path="/Team:Waterloo/Team">
                        <TeamPage />
                    </Route>
                    <Route exact path="/Team:Waterloo/Description">
                        <ProjectDescription />
                    </Route>
                    <Route exact path="/Team:Waterloo/Engineering">
                        <Engineering />
                    </Route>
                    <Route exact path="/Team:Waterloo/Human_Practices">
                        <HumanPractices />
                    </Route>
                </Switch>
                </div>
                <div>
                    <Footer />
                </div>
            </Router>
            <div>
            
            <Accessibility/>
            </div>
            
        </div>
    );
}

export default App;