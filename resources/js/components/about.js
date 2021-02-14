import React, { Component } from 'react'; 

import Nav from "./nav";

class About extends Component {

    componentDidMount() {
        document.title = "About || Demo"
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                        <Nav />

                        <h1>About Page Component</h1>
                         
                    </div>
                </nav>
            </div>
        )
    }
}
export default About;
