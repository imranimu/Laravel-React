import React, { Component } from 'react'; 

import { Container, Row, Col} from 'react-bootstrap'

import axios from 'axios';

class ServiceLists extends Component{
     
    constructor(props) {
        super(props);
        this.state = { serviceList: [] };
    }

    componentDidMount() {

        const url = 'data/services.json';

        axios.get(url).then(response => {
            
            const serviceList = response.data.services;                    

            this.setState({ serviceList });
        })

    }

    render() {
        return (
            <div>
                <Container>                
                    <Row className="mrg-top mrg-bottom text-center">
                        { this.state.serviceList.map(value => 
                            <Col key={value.id} md={4} className="pad-bottom icn-hov wow bounceIn animated">
                                <article>
                                    <p className="text-center"> <span className="icons"> <i className={value.icon}></i> </span></p>
                                    <h4>{value.title}</h4>
                                    <p>{value.content}</p>
                                </article>
                            </Col>                       
                        )}                                             
                    </Row> 
                </Container>
            </div>
        )
    }
}

export default ServiceLists;