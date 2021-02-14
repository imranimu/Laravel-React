import React from 'react'; 

const AccordionStyle = () => {
    return(
        <div>
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                            Responsive Design
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p> Device and resolution independent web design is called Responsive Design.  There are several well known frameworks for that. Twitter Bootstrap is one of the best.  We normally use Bootstrap to make responsive design. </p>
                            <p>We are expert with that. </p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                        CI, Laravel</a>
                    </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                            <p>CodeIgniter and Laravel are the mostly used PHP frameworks now a day. We have already done 10+ high volume project. But our new favorite is Laravel, an Artisan PHP framework really worthy. </p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        eCommerce</a></h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse">
                        <div className="panel-body">
                            <p>We have done 10+ eCommerce site. Mostly with WordPress wooCommerce, the best eCommerce WordPress plugin. We have also done eCommerce solution with Open Cart and CodeIgniter. </p> 
                            <p> We can assure you security, customizability and user friendly admin panel for reporting.</p>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                        WordPress Themes and Plugin</a></h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse">
                        <div className="panel-body">
	                        <p>WordPress is the best CMS ever.  We are expert with WordPress themes and Plugins. We have done 40+ WordPress custom and premium themes and 10+ plugins. We also have some free plugin on WordPress repository. </p>
	                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionStyle;