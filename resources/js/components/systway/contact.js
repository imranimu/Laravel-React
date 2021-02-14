import React, { Component } from 'react'; 
import Sidebar from "./sidebar";
import Footer from "./footer";
import Maps from './elements/maps'
import { Container, Row, Col} from 'react-bootstrap' 

class Contact extends Component{

    componentDidMount(){
        document.title = "Contact || Systway"
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <Sidebar pageName ='Contact' />

                <section id="contact" className="section">                    
                    <header>
                        <Container className="header">
                            <Row>
                                <Col md={12} >
                                    <article>
                                        <h1 className="wow fadeInDownBig"><span>Keep</span> in touch</h1>
                                        <h4 className="sub-title wow fadeInUpBig">Don't worry about the map, We'll show you ! <strong>the way</strong></h4>
                                        <span className="breaker wow fadeInLeftBig">
                                            <span></span>
                                        </span>
                                    </article>
                                </Col>
                            </Row>                        
                        </Container>
                    </header>                        
                    
                    <Maps/>
                    
                    <Container>
                        <Row className="mrg80 contact-details">                            
                        
                            <Col md={12} className="mrg-bottom">
                                <article>
                                    <h2 className="section-title wow fadeInUpBig">Contact <span>Information</span></h2>
                                </article>
                            </Col>
                            <Col md={4} className="wow flipInX">
                                <article>
                                    <h3><i className="icon-road colorful"></i> Visit Us</h3>
                                    <h5>Khulna 9100, Bangladesh</h5>
                                    <address>Road #2, House #4, Nirala R/A</address>
                                </article>
                            </Col>
                            <Col md={4} className="wow bounceIn">
                                <article>
                                    <h3><i className="icon-road colorful"></i> Call Us</h3>
                                    <p><strong>Mobile: </strong>+880 1710 23 96 97</p>
                                    <p><strong>Telephone: </strong>+880 41 XXXXX</p> 
                                </article>
                            </Col>
                            <Col md={4} className="flipInY wow">
                                <article>
                                    <h3><i className="icon-road colorful"></i> Mail Us</h3>
                                    <p><strong>Support: </strong><a href="mailto:hello@systway.com">hello@systway.com</a></p>
                                    <p><strong>Sales: </strong><a href="mailto:support@systway.com">support@systway.com</a></p>                                    
                                </article>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <span className="breaker2">
                                    <span></span>
                                </span>
                            </Col>
                        </Row>
                        <Row className="mrg80">
                            <Col md={12} className="mrg-bottom">
                                <article>
                                    <h2 className="section-title wow rotateIn">SEND  <span>A MESSAGE</span></h2>
                                    <h4 className="sub-title mrg-bottom wow fadeInUp">We would love to help you with your next project, leave us <strong> a message </strong>and we will contact you.</h4>
                                </article>
                            </Col>
                            <Col md={12} className="pad-top contactForm" id="contactForm">
                                <div className="done ">
                                    <strong>Thank you!</strong> We have received your message. 
                                </div>
                                <div className="form">
                                    <form method="post" action="process.php">
                                        <div className="element wow slideInLeft">
                                            <input type="text" name="name" className="text" placeholder="Your name*" />
                                        </div>
                                        <div className="element wow slideInRight">
                                            <input type="text" name="email" className="text" placeholder="Your E-mail*" />
                                        </div>
                                        <div className="element wow slideInLeft">
                                            <input type="text" name="website" className="text" placeholder="Your Subject" />
                                        </div>
                                        <div className="element wow slideInRight">
                                            <textarea name="comment" className="text textarea" placeholder="Your message*"></textarea>
                                        </div>
                                        <div className="element wow slideInLeft">
                                            <input type="submit" id="submit" value="Send"/>
                                            <div className="loading"></div>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>                        
                    </Container>
                    
                    <Footer/> 

                </section>
                
            </div>
        )
    } 
}

export default Contact;