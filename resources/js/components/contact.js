import React, { Component } from 'react'; 
import Nav from "./nav";

class Contact extends Component {

    componentDidMount() {
        document.title = "Contact || Demo"
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <Nav />

                        <h1>Contact Component</h1>
                         
                    </div>
                </nav>
            </div>
        )
    }
}
export default Contact;
