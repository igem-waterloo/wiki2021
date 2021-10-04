import React, {Component} from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import TeamPage from "./components/TeamPage.js";
import HomePage from "./components/HomePage.js";
import './App.css';
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectDescription from "./pages/ProjectDescription/ProjectDescription"
import Engineering from './pages/Engineering/Engineering';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> af23ec7b8a87136bef40716e8b1451ba3e9514ff

class App extends Component {
    render() {
        return (
            <div className="App" style={{background: '#23242D'}}>
            <Router>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <Header />
                <Switch>
<<<<<<< HEAD
                    {/* <Route exact path="/">
                        <HomePage />
=======
                    <Route path="/">
                        <Engineering />
>>>>>>> af23ec7b8a87136bef40716e8b1451ba3e9514ff
                    </Route>
                    <Route path="/team">
                        <TeamPage />
<<<<<<< HEAD
                    </Route> */}
                    <Route exact path="/" component={withRouter(HomePage)} />
                    <Route exact path="/Team" component={withRouter(TeamPage)} />
=======
                    </Route>
                    <Route path="/project/description">
                        <ProjectDescription />
                    </Route>
                    <Route path="/project/engineering">
                        <Engineering />
                    </Route>
>>>>>>> af23ec7b8a87136bef40716e8b1451ba3e9514ff
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