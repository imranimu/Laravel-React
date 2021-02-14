import React, { Component } from 'react'; 

import Sidebar from "./sidebar";
import Footer from "./footer";
import ServiceLists from "./elements/service-lists"
import Process from './elements/process' 
import AccordionStyle from './elements/accordion'
import { Container, Row, Col, Tabs, Tab} from 'react-bootstrap' 

class Services extends Component{
    
    componentDidMount(){
        document.title = "Services || Systway"         
    }

    render() {
        return(
            <div>

                <Sidebar pageName ='Services'/>

                <section id="services" className="section">                        
                    <header>
                        <Container className="header">
                            <Row>
                                <Col md={12}>
                                    <article>
                                        <h1 className="wow fadeInDown"><span>What</span> we Do</h1>
                                        <h4 className="sub-title wow fadeInUp">In order to succeed, your desire for <strong>success </strong>should be greater than your fear of <strong>failure.</strong></h4>
                                        <span className="breaker">
                                            <span></span>
                                        </span>
                                    </article>
                                </Col>
                            </Row>
                        </Container>
                    </header>                                    
                    
                    <ServiceLists/>

                    <Process/>

                    <Container>
                        <Row className="mrg80 ds">
                            <Col md={6} className="wow fadeInLeftBig">
                                <Row>
                                    <Col md={12}>
                                        <h2 className="section-title mrg-bottom">At a Glance</h2>
                                    </Col>                                    

                                    <Col md={12}>
                                        <Tabs defaultActiveKey="WebApps" id="uncontrolled-tab-example">
                                            <Tab eventKey="WebApps" title="Web Apps">
                                                <article>                                                
                                                    <p>We provide a complete range of comprehensive solutions to deploy a powerful presence of your business on the World Wide Web. Deploying Feature rich dynamic sites, e-commerce websites, intranet applications, content management systems etc. using latest web standards, with right blend of creativity and search engine optimized scripts. Our expert web developers know how to meet optimum solution.</p>
                                                    <p>We pride ourselves to fully understand that the face of your design is important as the brand and want to promote that in all of your efforts, through both the web and applications.</p>
                                                </article>
                                            </Tab>
                                            <Tab eventKey="UI/UX" title="UI/UX">
                                                <article>                                                
                                                    <p> Interactive features and functional tools are important to keep interest of users intact and ensure their visits unending on the website. In this age of competition, it is predefined that a visitor will stay your site for some moment. So you have some special things that this user will attract and contact and visit again and again. A nice design is mandatory for online business. Our experts know how to achieve this. </p>
                                                    <h4>We Provide: </h4>
                                                    <ul>
                                                        <li>User Interface Design</li>
                                                        <li>Logo Design &amp; Branding</li>
                                                        <li>Website Beautification</li>
                                                    </ul>
                                                </article>
                                            </Tab>
                                            <Tab eventKey="OnlineMarketing" title="Online Marketing">
                                                <article>
                                                    <p>Internet marketing is considered to be broad in scope because it not only refers to marketing on the Internet, but also includes marketing done via e-mail and wireless media. Digital customer data and electronic customer relationship management (ECRM) systems are also often grouped together under internet marketing.</p><p>Internet marketing ties together the creative and technical aspects of the Internet, including design, development, advertising and sales. Internet marketing also refers to the placement of media along many different stages of the customer engagement cycle through search engine marketing (SEM), search engine optimization (SEO), banner ads on specific websites, email marketing, mobile advertising, and Web 2.0 strategies </p>
                                                </article>
                                            </Tab>
                                        </Tabs>                                       
                                        
                                    </Col>
                                </Row>
                            </Col>
                            
                            <Col md={6} className="wow fadeInRightBig">
                                <Row>
                                    <Col md={12}>
                                        <h2 className="section-title mrg-bottom">Special Expertise</h2>
                                    </Col>
                                    <Col md={12}>

                                        <AccordionStyle/>
                                        
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                                                        
                    <Footer/>
                            
                </section>
                
            </div>
        )
    } 
}

export default Services;