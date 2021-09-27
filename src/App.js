import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import TeamPage from "./components/TeamPage.js";
import HomePage from "./components/HomePage.js";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/Team">
                        <TeamPage />
                    </Route> */}
                    <Route exact path="/" component={withRouter(HomePage)} />
                    <Route exact path="/Team" component={withRouter(TeamPage)} />
                </Switch>
            </Router>
          );
    }
}

export default App;