import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App" style={{background: '#23242D'}}>
            <Router>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <Header />
                <Switch>
                    {/* <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/team">
                        <TeamPage />
                    </Route> */}
                    <Route exact path="/" component={withRouter(HomePage)} />
                    <Route exact path="/Team" component={withRouter(TeamPage)} />
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