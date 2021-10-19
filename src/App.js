import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Attributions from "./pages/Attributions/Attributions";
import Collaborations from "./pages/Collaborations/Collaborations";
import Communication from "./pages/Communication/Communication";
import Contribution from "./pages/Contribution/Contribution";
import Education from "./pages/Education/Education";
import Engineering from './pages/Engineering/Engineering';
import Finance from "./pages/Finance/Finance";
import Hardware from "./pages/Hardware/Hardware";
import HomePage from "./pages/HomePage/HomePage";
import HumanPractices from "./pages/HumanPractices/HumanPractices";
<<<<<<< HEAD
import Implementation from "./pages/Implementation/Implementation";
import Improvement from "./pages/Improvement/Improvement";
import Model from "./pages/Model/Model";
import ProjectDescription from "./pages/ProjectDescription/ProjectDescription"
import ProofOfConcept from "./pages/ProofOfConcept/ProofOfConcept";
import Safety from "./pages/Safety/Safety";
import TeamPage from "./pages/TeamPage/TeamPage";
// utils
=======
import Finance from "./pages/Finance/Finance";
>>>>>>> 0fad2a8637f754ae2c9240dcfbaa92500d9986b0
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import StickyBox from "react-sticky-box";
import Accessibility from './toolbar/Accessibility';
import { keepTheme, keepSize } from "./utils/themes.js";
import RedirectScrollToTop from "./utils/RedirectScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    useEffect(() => {
        keepTheme();
        keepSize();
    });

    return (
        <div className="App">
            <Router>
                <RedirectScrollToTop />
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                <StickyBox style={{zIndex: "5", position: "relative"}}>
                    <Header />
                </StickyBox>
                <Switch>
                    <Route exact path="/Team:Waterloo">
                        <HomePage/>
                    </Route>
                    <Route exact path="/Team:Waterloo/Attributions">
                        <Attributions />
                    </Route>
                    <Route exact path="/Team:Waterloo/Collaborations">
                        <Communication />
                    </Route>
                    <Route exact path="/Team:Waterloo/Communication">
                        <Communication />
                    </Route>
                    <Route exact path="/Team:Waterloo/Contribution">
                        <Contribution />
                    </Route>
                    <Route exact path="/Team:Waterloo/Description">
                        <ProjectDescription />
                    </Route>
                    <Route exact path="/Team:Waterloo/Education">
                        <Education />
                    </Route>
                    <Route exact path="/Team:Waterloo/Engineering">
                        <Engineering />
                    </Route>
                    <Route exact path="/Team:Waterloo/Finance">
                        <Finance />
                    </Route>
                    <Route exact path="/Team:Waterloo/Hardware">
                        <Hardware />
                    </Route>
                    <Route exact path="/Team:Waterloo/Human_Practices">
                        <HumanPractices />
                    </Route>
                    <Route exact path="/Team:Waterloo/Implementation">
                        <Implementation />
                    </Route>
                    <Route exact path="/Team:Waterloo/Improvement">
                        <Improvement />
                    </Route>
                    <Route exact path="/Team:Waterloo/Model">
                        <Model />
                    </Route>
                    <Route exact path="/Team:Waterloo/Proof_Of_Concept">
                        <ProofOfConcept />
                    </Route>
                    <Route exact path="/Team:Waterloo/Safety">
                        <Safety />
                    </Route>
                    <Route exact path="/Team:Waterloo/Team">
                        <TeamPage />
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