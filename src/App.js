import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamPage from "./components/TeamPage.js";
import HomePage from "./components/HomePage.js";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/Editor/Team">
                        <TeamPage />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
          );
    }
}

export default App;
