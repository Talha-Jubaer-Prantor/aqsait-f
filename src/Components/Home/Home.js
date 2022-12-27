import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <br />
      <h1 style={{ textAlign: "center", color: "white" }}>PAKAGES</h1>
      <br />
      <div className="pakages container">
        <Link
          className="single-pakage"
          to="/portfolio"
          style={{ textDecoration: "none", color: "white" }}
        >
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/ljvjsnvh.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>PORTFOLIO</h3>Website
        </Link>

        <Link
          className="single-pakage"
          to="/blog"
          style={{ textDecoration: "none", color: "white" }}
        >
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/ggqtvqxi.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>BLOG</h3>Website
        </Link>

        <Link
          className="single-pakage"
          to="/news"
          style={{ textDecoration: "none", color: "white" }}
        >
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/alnsmmtf.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>NEWS</h3>Website
        </Link>

        <Link
          className="single-pakage"
          to="/ecommerce"
          style={{ textDecoration: "none", color: "white" }}
        >
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/lpddubrl.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>E-COMMERCE</h3>Website
        </Link>
      </div>

      {/* Customer Review */}
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

export default Home;
