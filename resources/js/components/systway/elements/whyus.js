import React, { Component } from 'react';

import ReactWOW from 'react-wow'

import { Container, Row, Col} from 'react-bootstrap'  

import axios from 'axios';

 
class Whyus extends Component{

    constructor(props) {
        super(props);
        this.state = { whyusdata: [] };
    }

    WhyUsList(){      
        if(this.state.whyusdata){
            return(
                <div>
                    <Row className="mrg80 align-center">
                        { this.state.whyusdata.map(value => 
                            <Col key={value.id} md={6} className="pad-bottom">
                                <div className="row icn-hov">
                                    <ReactWOW animation='bounceIn'>
                                        <div className="col-md-2">
                                            <span className="icons"><i className={value.icon}></i></span>
                                        </div>
                                    </ReactWOW>
                                    
                                    <ReactWOW animation='fadeInRight'>
                                        <div className="col-md-10">
                                            <article>
                                                <h4>{value.title}</h4>
                                                <p>{value.content}</p>
                                            </article>
                                        </div>
                                    </ReactWOW>                                    
                                </div>
                            </Col>      
                        )}
                    </Row>
                </div>                
            )        
        }
    }

    componentDidMount() {

        const url = 'data/whyus.json';

        axios.get(url).then(response => {
            
            const whyusdata = response.data.whyUs;       
            
            console.log(whyusdata);

            this.setState({ whyusdata });
        })

    }  

    render() {
        return (
            <div>
                <Container>                                                
                    <header>
                        <Container className="header">
                            <Row>
                                <Col md={12}>
                                    <article>
                                        <ReactWOW animation='bounceIn'>
                                            <h1><span>why</span> us</h1>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp'>
                                            <h4 className="sub-title">But not just why us, it's what makes us <strong>special</strong></h4>
                                        </ReactWOW>
                                        <span className="breaker">
                                            <span></span>
                                        </span>
                                    </article>
                                </Col>
                            </Row>
                        </Container>
                    </header>                        
                    
                    { this.WhyUsList() }
                     
                </Container>
            </div>
        )
    }
}

export default Whyus;