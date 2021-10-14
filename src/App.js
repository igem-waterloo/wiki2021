import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectDescription from "./pages/ProjectDescription/ProjectDescription"
import Engineering from './pages/Engineering/Engineering';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sticky from 'react-stickynode';
import StickyBox from "react-sticky-box";
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App" style={{background: '#23242D'}}>
            <Router>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                <StickyBox>
                    <Header />
                </StickyBox>
                <Switch>
                    <Route path="/">
                        <Engineering />
                    </Route>
                    <Route path="/team">
                        <TeamPage />
                    </Route>
                    <Route path="/project/description">
                        <ProjectDescription />
                    </Route>
                    <Route path="/project/engineering">
                        <Engineering />
                    </Route>
                </Switch>
                </div>
                <div>
                <Footer />
                </div>
            </Router>
            </div>
          );
    }
}

export default App;