import React, { Component } from 'react'; 

import {Link } from "react-router-dom"

import { Tooltip, OverlayTrigger} from 'react-bootstrap'

class Sidebar extends Component{

    
    render() {    

        return(
            <div>
                <div id="fixed-elements">                                        

                    <nav className="main-menu">
                        <ul className="cbp-vimenu sf-menu" id="example">
                            <li className="home-icon">
                                <Link title="Systway" to={"/"}>
                                    <img src="img/logo@2x.png" alt="Systway" width="50" height="80"/>
                                </Link>                                
                            </li>
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>Home</Tooltip>)} placement="right">                               
                                    <Link title="Systway" to={"/"}>
                                        <i className="icon-home"></i>
                                    </Link>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>About</Tooltip>)} placement="right">
                                    <Link title="Systway" to={"/about"} className={"naviteam " + (this.props.pageName === 'About' ? 'active' : 'false')}>
                                        <i className="icon-info-sign"></i>
                                    </Link>
                                </OverlayTrigger>                                                                
                            </li>
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>Services</Tooltip>)} placement="right">
                                    <Link title="Systway" to={"/services"} className={"naviteam " + (this.props.pageName === 'Services' ? 'active' : 'false')}>
                                        <i className="icon-cogs"></i>
                                    </Link>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>Projects</Tooltip>)} placement="right">
                                    <Link title="Systway" to={"/projects"} className={"naviteam " + (this.props.pageName === 'Projects' ? 'active' : 'false')}>
                                        <i className="icon-suitcase"></i>
                                    </Link>
                                </OverlayTrigger>
                            </li>
                        
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>Contact</Tooltip>)} placement="right">
                                    <Link title="Systway" to={"/contact"} className={"naviteam " + (this.props.pageName === 'Contact' ? 'active' : 'false')}>
                                        <i className="icon-envelope-alt"></i>
                                    </Link>                        
                                </OverlayTrigger>
                            </li>
                        </ul>

                        <div className="clear"></div>

                        <ul className="social-list">
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>Facebook</Tooltip>)} placement="right">
                                    <a href="https://www.facebook.com/systway" target="_blank" rel="noopener noreferrer" title="Facebook">
                                        <i className="icon-facebook"></i>
                                    </a>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>Twitter</Tooltip>)} placement="right">
                                    <a href="https://twitter.com/Systway" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="icon-twitter"></i></a>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger overlay={(<Tooltip>Google+</Tooltip>)} placement="right">
                                    <a href="https://plus.google.com/114139777237055745288" target="_blank" rel="noopener noreferrer" title="Google+"><i className="icon-google-plus"></i></a>
                                </OverlayTrigger>
                            </li>
                        </ul>                        
                    </nav>
                    
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <ul className="navbar-nav sf-menu2" id="example2">
                            <li className="home-icon">
                                <Link title="Systway" to={"/"}>
                                    <img src="img/logo@2x.png" alt="Systway" width="50" height="50" title="Systway"/>
                                </Link>                                 
                            </li>

                            <li>
                                <Link title="Systway" to={"/"}>
                                    <i className="icon-home"></i>
                                </Link>                                
                            </li>
                            <li>
                                <Link title="Systway" to={"/about"}>
                                    <i className="icon-info-sign"></i>
                                </Link>                                
                            </li>
                            <li>
                                <Link title="Systway" to={"/services"}>
                                    <i className="icon-cogs"></i>
                                </Link>
                            </li>
                            <li>
                                <Link title="Systway" to={"/projects"}>
                                    <i className="icon-suitcase"></i>
                                </Link>
                            </li>                        
                            <li>
                                <Link title="Systway" to={"/contact"}>
                                    <i className="icon-envelope-alt"></i>
                                </Link>                        
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    } 
}

export default Sidebar;