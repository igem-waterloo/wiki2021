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
import Implementation from "./pages/Implementation/Implementation";
import Inclusivity from "./pages/Inclusivity/Inclusivity";
import Members from "./pages/TeamPage/Members";
import Model from "./pages/Model/Model";
import Parts from "./pages/Parts/Parts";
import Description from "./pages/Description/Description"
import ProofOfConcept from "./pages/ProofOfConcept/ProofOfConcept";
import Safety from "./pages/Safety/Safety";
// utils
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
                    <div style={{borderLeft: '2px solid #E5E5E5'}}>
                        <Switch>
                            <Route exact path="/Team:Waterloo">
                                <HomePage/>
                            </Route>
                            <Route exact path="/Team:Waterloo/Attributions">
                                <Attributions />
                            </Route>
                            <Route exact path="/Team:Waterloo/Collaborations">
                                <Collaborations />
                            </Route>
                            <Route exact path="/Team:Waterloo/Communication">
                                <Communication />
                            </Route>
                            <Route exact path="/Team:Waterloo/Contribution">
                                <Contribution />
                            </Route>
                            <Route exact path="/Team:Waterloo/Description">
                                <Description />
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
                            <Route exact path="/Team:Waterloo/Inclusivity">
                                <Inclusivity />
                            </Route>
                            <Route exact path="/Team:Waterloo/Model">
                                <Model />
                            </Route>
                            <Route exact path="/Team:Waterloo/Parts">
                                <Parts />
                            </Route>
                            <Route exact path="/Team:Waterloo/Proof_Of_Concept">
                                <ProofOfConcept />
                            </Route>
                            <Route exact path="/Team:Waterloo/Safety">
                                <Safety />
                            </Route>
                            <Route exact path="/Team:Waterloo/Team">
                                <Members />
                            </Route>
                        </Switch>
                    </div>
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