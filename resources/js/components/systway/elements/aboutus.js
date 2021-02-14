import React from 'react';

import ReactWOW from 'react-wow'

import { Container, Row, Col} from 'react-bootstrap'  
 
const Aboutus = () => {    
    return (
        <div>
            <header>
                <Container className="header">
                    <Row>
                        <Col md={12}>
                            <article>                                        
                                <ReactWOW animation='fadeInDown'>
                                    <h1><span>who</span> are we</h1>
                                </ReactWOW>
                                <ReactWOW animation='fadeInUp'>
                                    <h4 className="sub-title">Just a <strong>brief</strong></h4>
                                </ReactWOW>                                        
                                <span className="breaker">
                                    <span></span>
                                </span>
                            </article>
                        </Col>
                    </Row>
                </Container>                            
            </header>                    
            
            <div className="videos">
                <Container>                        
                    <Row>
                        <ReactWOW animation='fadeInRightBig'>
                            <Col md={6}>
                                <h2 className="section-title-left ice">Systway <span> a journey with dream</span></h2>
                                <p className="ice">With skill and determination our dream began in 2011. Systway was born. It hasn't been a long Journey yet, but we have a great combination of resources - programmers, developers, designers and analysts. We are very proud of the high volume of high quality projects we have completed in this short time.</p>
                                <p className="ice">With every project, our mission is to exceed expectations; our clients, our industry and our own. We offer a great depth of experience developing and engineering Web Apps and Software, aswell as Consultancy Services for Project Management, Business Analysis and general Software Services.</p>
                            </Col>
                        </ReactWOW>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Aboutus;