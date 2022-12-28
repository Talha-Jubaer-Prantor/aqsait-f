
import React from "react";
import Carousell from "react-bootstrap/Carousel";
import "./Carousel.css";


const Carousel = () => {

  
  return (
    <div style={{paddingTop:"30px"}}>
      <Carousell>
        <Carousell.Item>
          <div className="carousel-content">
          <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              quaerat facere nulla ab. Animi ab quod eligendi nobis eum magnam
              dolor aliquam cum iure deserunt vitae ea, sint esse. Voluptate!
            </p>
          </div>

          <Carousell.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousell.Caption>
        </Carousell.Item>
        <Carousell.Item>
          <div className="carousel-content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              quaerat facere nulla ab. Animi ab quod eligendi nobis eum magnam
              dolor aliquam cum iure deserunt vitae ea, sint esse. Voluptate!
            </p>
          </div>

          <Carousell.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousell.Caption>
        </Carousell.Item>
        <Carousell.Item>
          <div className="carousel-content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              quaerat facere nulla ab. Animi ab quod eligendi nobis eum magnam
              dolor aliquam cum iure deserunt vitae ea, sint esse. Voluptate!
            </p>
          </div>

          <Carousell.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousell.Caption>
        </Carousell.Item>
      </Carousell>
    </div>
  );
};

export default Carousel;
