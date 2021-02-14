import React, { Component } from 'react'; 
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Container, Row, Col} from 'react-bootstrap' 
import axios from 'axios'

class Projects extends Component{

    constructor(props){
        super(props); 
        this.state = { projectsList: [] }
    } 

	componentDidMount(){
		document.title = "Projects || Systway"
		
		const url = 'data/projects.json';

        axios.get(url).then(response => {
            const projectsList = response.data.projects;                    

            this.setState({ projectsList });
        })
	}
	
    render() {
        return(
            <div>

                <Sidebar pageName='Projects'/>

                <section id="portfolio" className="section">
                    <header>
                        <Container className="header">
                            <Row>
                                <Col md={12}>
                                    <article>
                                        <h1 className="ice wow fadeInLeftBig"><span>Latest</span> Work</h1>
                                        <h4 className="sub-title wow bounceIn">Access to <strong>excellence</strong></h4>
                                        <span className="breaker wow fadeInUpBig">
                                            <span></span>
                                        </span>
                                    </article>
                                </Col>
                            </Row>
                        </Container>
                    </header>                    
                     
                    <Container>
                        <Row>
                            <div className="portfolioContainer"> 
                            <Col md={12} className="mrg80">
                                <Row> 
                                                                       
										{ this.state.projectsList.map(value => 
											<Col key={value.id} md={4} lg={3} sm={6} xs={12}>
												<div className="view view-tenth">
													<img className="img-responsive" alt={value.title} src={value.image}/>
													<div className="mask">
														<h3>{value.title}</h3>
														<p>{value.content}</p>                                    
														<a target="_blank" rel="noopener noreferrer" href={value.weburl} className="info"><i className="icon-link"></i></a>
													</div>
												</div>
											</Col>                       
										)}										 				                     
                                    
                                </Row>
                            </Col>        
                            </div>
                        </Row>                        
                    </Container>
                    
                    <Footer/>   

                </section>
            </div>
        )
    } 
}

export default Projects;