import React from 'react';

import { Fade } from 'react-slideshow-image'; 
 
 
const fadeProperties = {
  duration: 3000,
  autoplay: true, 
  transitionDuration: 500,
  infinite: true,
  arrows: false,
  indicators: false
}
 
const Slideshow = () => {    
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">         
        <h1>We never compromise <br/> on <span>Quality,</span> ever. </h1>
      </div>
      <div className="each-fade">         
        <h1>Want something <span>Perfect?</span> <br/>Yes!  here you are. </h1>
      </div>
      <div className="each-fade">         
        <h1>We will make you go <span>WOW</span>!<br/>Are you ready?</h1>
      </div>
    </Fade>
  )
}

export default Slideshow;