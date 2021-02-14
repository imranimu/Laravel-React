import React, { Component } from 'react';

import Sidebar from "./sidebar";
import Footer from "./footer";
import Aboutus from "./elements/aboutus"
import Whyus from "./elements/whyus"
import QuotesSlider from './elements/quotesu-slider'
import ReactWOW from 'react-wow'

class About extends Component{

    componentDidMount(){
        document.title = "About || Systway"
    }

    render() {
        return(
            <div>
                
                <Sidebar pageName ='About'/>

                <section id="about" className="section">                        
                    
                    <Aboutus/>
                                        
                    <Whyus/>
                                        
                    <div className="testimonials">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mrg-bottom">
                                    <ReactWOW animation='bounceIn'>
                                        <h2 className="section-title ice">Quotes by Our Clients</h2>
                                    </ReactWOW>
                                </div>
                                <div className="col-md-12">
                                    <article>                                        
                                        <div className="cbp-qtrotator">
                                            <QuotesSlider/> 
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                                                
                    <div className="comment">
                        <div className="container">
                            <div className="row"> 
                                <div className="col-md-12 " >
                                    <article>
                                        <ReactWOW animation='bounceIn'>
                                            <h1 className="section-title">Find Us Elsewhere on the Web</h1>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp'>
                                        <p className=" text-center sociaL-icon mrg-top">
                                            <a href="https://www.facebook.com/systway" target="_blank" rel="noopener noreferrer" className="facebook"><i className="icon-facebook"></i> Facebook</a>
                                            <a href="https://twitter.com/Systway" target="_blank" rel="noopener noreferrer" className="twitter"><i className="icon-twitter"></i> Twitter</a>                                        
                                            <a href="https://plus.google.com/114139777237055745288" target="_blank" rel="noopener noreferrer" className="google-plus"><i className="icon-google-plus"></i> Google +</a>                                        
                                        </p>
                                        </ReactWOW>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                                        
                    <Footer/> 

                </section> 
            </div>
        )
    } 
}

export default About;