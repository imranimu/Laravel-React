import React, { Component } from 'react';
import ReactWOW from 'react-wow'
import { Fade } from 'react-slideshow-image'; 

import axios from 'axios';
 
 
const fadeProperties = {
    duration: 9000,
    autoplay: true, 
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    indicators: true
}

class QuotesSlideshow extends Component{    
    
    constructor(props) {
        super(props);
        this.state = { clientquotes: [] };
    } 

    componentDidMount() {

        const url = 'data/clientquotes.json';

        axios.get(url).then(response => {
            const clientquotes = response.data.quotes;                    

            this.setState({ clientquotes });
        })

    } 

    render() {
        return (
            <div>
                <Fade {...fadeProperties}>                    
                    { this.state.clientquotes.map(value => 
                        <div key={value.id} className="each-fade">         
                            <div className="cbp-qtcontent">
                                <ReactWOW animation='bounceIn'>
                                    <img src={value.image} alt={value.name} className="img-circle"/>
                                </ReactWOW>
                                <blockquote>
                                    <p>{value.quote}</p>
                                    <small className="pull-right">{value.name}, 
                                        <cite title="Joe Manning">{value.address} {(value.webUrl? ( <a href={value.webUrl} title={value.website} target="_blank" rel="noopener noreferrer">({value.website})</a>) : null)}</cite>
                                    </small>
                                </blockquote>
                            </div>
                        </div>                             
                    )}                    
                </Fade>
            </div>
        )
    }
}

export default QuotesSlideshow;