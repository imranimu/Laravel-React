import React, { Component } from 'react'

import {Link } from "react-router-dom"

import { Container, Row, Col} from 'bootstrap-4-react' 
import Slideshow from './elements/textslider'
 

class Home extends Component{

    componentDidMount(){
        document.title = "Home || Systway"
    }
    
    render() {

        const bgImageStyle = {
            backgroundImage: "url(img/background/home_bg.jpg)",
            opacity: '1'
        };

        return(
            <div>
                <div id="home" className="section">
                    <div className="pattern">
                        <Container>
                            <Row>
                                <Col md={12} className="text-center">                                
                                    <article>
                                        <p className="logo"><img src="img/logo.png" alt="Systway"/></p>
                                        
                                        <div id="fade">
                                            <Slideshow/>
                                        </div>                                        

                                    </article>
                                    <div className="clear"></div>
                                    <article>
                                        <p className="welcome-btn">                                            
                                            <Link className="active-links" to={"/about"}>Go Ahead <i className="icon-chevron-right"></i></Link>
                                        </p>
                                    </article>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>	            
                <article>
                    <ul id="cbp-bislideshow" className="cbp-bislideshow">
                        <li style={bgImageStyle}></li>
                    </ul>
                </article>                
            </div>
        )
    } 
}

export default Home;