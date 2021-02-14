import React, { Component } from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends Component{
    render() {
        return(
            <div>
                <div className="copyright-wrap">
                    <Container>
                        <Row>
                            <Col md={12} className="copyright">
                                <p>&copy;  Systway.com. All Rights Reserved. Crafted with <i className="icon-heart"></i> as always. </p>
                                <p> Thanks to <a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>, 
                                <a target="_blank" rel="noopener noreferrer" href="http://fontawesome.io/"> Fontawesome</a>, 
                                <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/"> ReactJs</a></p>                            
                            </Col>
                        </Row>
                    </Container>
                </div>    
            </div>
        )
    } 
}

export default Footer;