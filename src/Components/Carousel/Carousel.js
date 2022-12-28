
import React from "react";
import Carousell from "react-bootstrap/Carousel";
import "./Carousel.css";


const Carousel = () => {

  
  return (
    <div style={{paddingTop:"30px"}}>
      <Carousell>
        <Carousell.Item>
          <div className="carousel-content">
              <img style={{width:"100%",borderRadius:"20px"}} src="/img/aqsait cp.png" alt="" />            
          </div>

          {/* <Carousell.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousell.Caption> */}
        </Carousell.Item>
        <Carousell.Item>
          <div className="carousel-content">
          <img style={{width:"100%",borderRadius:"20px"}} src="/img/aqsa it.png" alt="" />            
          </div>

          {/* <Carousell.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousell.Caption> */}
        </Carousell.Item>
        
      </Carousell>
    </div>
  );
};

export default Carousel;
