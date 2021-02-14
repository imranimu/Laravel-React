import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './homepage'
import About from './about'
import Services from './services'
import Projects from './projects'
import Contact from './contact'

class Bodycontent extends Component {    
    render() {        
        return (
            <div>
                <Router>                                        
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/projects" component={Projects} />                        
                        <Route path="/contact" component={Contact} />                        
                    </div>
                </Router>                              
            </div>
        );
    }
} 

export default Bodycontent;