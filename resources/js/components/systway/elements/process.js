import React from 'react'

import {Container,Row,Col} from 'react-bootstrap'

const Process =() => {

    return(
        <div className="process">
            <Container>	                
                <Row>
                    <Col md={12}>
                        <article>
                            <h2 className="section-title ice wow bounceInDown animated">Our Process</h2>
                            <h4 className="sub-title mrg-bottom wow fadeInUpBig animated">The way, we love to <strong>Work</strong></h4>
                        </article>
                    </Col>
                    
                    <Col md={2} sm={6} className="ca-menu2 wow bounceIn animated">
                        <article>
                            <span><i className="icon-coffee"></i></span>
                            <h4>Coffee</h4>
                            <p> Need some strength. </p>
                        </article>
                    </Col>
                    <Col md={2} sm={6} className="ca-menu2 wow bounceIn animated">
                        <article>
                            <span><i className="icon-edit"></i></span>
                            <h4>Analysis</h4>
                            <p> Very very important. </p>
                        </article>
                    </Col>
                    <Col md={2} sm={6} className="ca-menu2 wow bounceIn animated">
                        <article>
                            <span><i className="icon-asterisk"></i></span>
                            <h4>Design</h4>
                            <p> Aha. Think creatively. </p>
                        </article>
                    </Col>
                    <Col md={2} sm={6} className="ca-menu2 wow bounceIn animated">
                        <article>
                            <span><i className="icon-bolt"></i></span>
                            <h4>Implement</h4>
                            <p> Yeah. It's Showtime. </p>
                        </article>
                    </Col>
                    <Col md={2} sm={6} className="ca-menu2 wow bounceIn animated">
                        <article>
                            <span><i className="icon-stethoscope "></i></span>
                            <h4>Test</h4>
                            <p> That's crazy. </p>
                        </article>
                    </Col>
                    <Col md={2} sm={6} className="ca-menu2 wow bounceIn animated">
                        <article>
                            <span><i className="icon-gift"></i></span>
                            <h4>Delivery</h4>
                            <p> Done! Party time!! </p>
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Process;