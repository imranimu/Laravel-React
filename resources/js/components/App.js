import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom'; 
import Home from "./systway/homepage";
import AboutPage from "./systway/about";
import Contact from "./systway/contact"; 
import Services from './systway/services'
import Projects from "./systway/projects";


export default class App extends Component {
    render() {
        return (
            <div>   
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={AboutPage} /> 
                            <Route path="/contact" component={Contact} />
                            <Route path="/services" component={Services} />
                            <Route path="/projects" component={Projects} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
