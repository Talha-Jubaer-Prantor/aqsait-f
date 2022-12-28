import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Review from "../Review/Review";

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
          <h3>PORTFOLIO</h3>
          <h6>Website</h6>
          <span style={{ color: "#0ec60e" }}>Available</span>
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
          <h3>BLOG</h3>
          <h6>Website</h6>
          <span style={{ color: "#0ec60e" }}>Available</span>
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
          <h3>NEWS</h3>
          <h6>Website</h6>
          <span style={{ color: "#0ec60e" }}>Available</span>
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
          <h3>E-COMMERCE</h3>
          <h6>Website</h6>
          <span style={{ color: "rgb(198 14 19)" }}>Coming soon</span>
        </Link>
      </div>

      {/* Identify section */}


      <div className="identify-sec">
        <h1 style={{textAlign:'center',color:"white"}}>We Create Identify...</h1><br /><br />
        <div className="identify container" style={{ textAlign: "center" }}>
          <div>
            <img
              className="img-fluid"
              src="/img/portfolio.png"
              style={{ height: "400px", width: "350px" }}
              alt="portfolio"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h1>For You</h1>
            <p style={{ justifyContent: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="identify container">
          <div style={{ textAlign: "center" }}>
            <h1>For Your Shop</h1>
            <p style={{ justifyContent: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              className="img-fluid"
              src="/img/bikeShop.png"
              style={{ height: "400px", width: "350px" }}
              alt="portfolio"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="identify container">
          <div style={{ textAlign: "center" }}>
            <img
              className="img-fluid"
              src="/img/e-commerce.png"
              style={{ height: "400px", width: "500px" }}
              alt="portfolio"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h1>For Your Buissness</h1>
            <p style={{ justifyContent: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!
            </p>
          </div>
        </div>
      </div>

      

{/* for small device */}


      <div className="identify-sec-sm">
      <h1 style={{textAlign:'center',color:"white"}}>We Create Identify...</h1><br /><br />
        <div className="identify-sm container" style={{ textAlign: "center" }}>
          <div>
            <img
              className="img-fluid"
              src="/img/portfolio.png"
              style={{ height: "400px", width: "350px" }}
              alt="portfolio"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h1>For You</h1>
            <p style={{ justifyContent: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="identify-sm container">
          <div style={{ textAlign: "center" }}>

          <img
              className="img-fluid"
              src="/img/bikeShop.png"
              style={{ height: "400px", width: "350px" }}
              alt="portfolio"
            />
            
          </div>
          <div style={{ textAlign: "center" }}>
          <h1>For Your Shop</h1>
            <p style={{ justifyContent: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="identify-sm container">
          <div style={{ textAlign: "center" }}>
            <img
              className="img-fluid"
              src="/img/e-commerce.png"
              style={{ height: "400px", width: "500px" }}
              alt="portfolio"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h1>For Your Buissness</h1>
            <p style={{ justifyContent: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facere sit est aut dolorem praesentium sunt fugiat tenetur ad esse
              magni!
            </p>
          </div>
        </div>
      </div>



      <Review></Review>
    </div>
  );
};

export default Home;
