import React, { Component } from 'react'; 

import Nav from "./nav";

class Header extends Component {

    componentDidMount() {
        document.title = "Home || Demo"
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid"> 
                        <Nav />

                        <h1>Home Component</h1>                        
                         
                    </div>
                </nav>                 
            </div>
        )
    }
}
export default Header;
