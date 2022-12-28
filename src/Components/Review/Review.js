import React from 'react';
import "./Review.css"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Review = () => {
    return (
        <div>
            
            <div className="container" style={{paddingTop:"80px"}}>
        <h1 style={{color:"white",textAlign:"center"}}>Customer Review</h1><br />
        <OwlCarousel
          className="owl-theme"
          style={{ color: "white" }}
          loop={true}
          margin={20}
          autoplay={true}
          slideTransition={"linear"}
          autoplayTimeout={4000}
          smartSpeed={6000}
          nav>
          <div class="item">
            <div className="review">
              <h3>Name</h3>
              <h6>Company</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto eos laborum soluta veritatis ipsam non nulla magni deserunt eum?</p> 
            </div>
          </div>
          <div class="item">
            <div className="review">
            <h3>Name</h3>
            <h6>Company</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto eos laborum soluta veritatis ipsam non nulla magni deserunt eum?</p> 
            </div>
          </div>
          <div class="item">
            <div className="review">
            <h3>Name</h3>
            <h6>Company</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto eos laborum soluta veritatis ipsam non nulla magni deserunt eum?</p> 
            </div>
          </div>
          <div class="item">
            <div className="review">
            <h3>Name</h3>
            <h6>Company</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto eos laborum soluta veritatis ipsam non nulla magni deserunt eum?</p> 
            </div>
          </div>
          <div class="item">
            <div className="review">
            <h3>Name</h3>
            <h6>Company</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto eos laborum soluta veritatis ipsam non nulla magni deserunt eum?</p> 
            </div>
          </div>
        </OwlCarousel>
      </div>
        </div>
    );
};

export default Review;