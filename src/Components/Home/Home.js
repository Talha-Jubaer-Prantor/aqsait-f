import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
// import Review from "../Review/Review";

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
        <h1 style={{ textAlign: "center", color: "white" }}>
          We Create Identify...
        </h1>
        <br />
        <br />
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
              Are you looking for a portfolio website that will make your
              projects stand out? Look no further. Aqsa IT is offering a
              portfolio website for sale, with everything you need to make your
              projects shine. Our website is easy to use and customize, so you
              can make it your own. It also comes with a range of features,
              including a blog, contact page, and gallery. This is the perfect
              way to show off your work and impress potential employers. Get
              your portfolio website today!
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
            Are you looking to start an niche business? Now's your chance
              to get a jump on the competition. Aqsa IT is selling a fully
              operational niche website, loaded with features and ready to
              go. We've put a lot of work into this website, and we're confident
              that it can provide a great foundation for your business. It's a
              turnkey solution, so you don't have to worry about a long setup
              process. If you're interested, reach out to us and we'll send you
              more information. We look forward to hearing from you!
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
              Are you looking to start an e-commerce business? Now's your chance
              to get a jump on the competition. Aqsa IT is selling a fully
              operational e-commerce website, loaded with features and ready to
              go. We've put a lot of work into this website, and we're confident
              that it can provide a great foundation for your business. It's a
              turnkey solution, so you don't have to worry about a long setup
              process. If you're interested, reach out to us and we'll send you
              more information. We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>

      {/* for small device */}

      <div className="identify-sec-sm">
        <h1 style={{ textAlign: "center", color: "white" }}>
          We Create Identify...
        </h1>
        <br />
        <br />
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
              Are you looking for a portfolio website that will make your
              projects stand out? Look no further. Aqsa IT is offering a
              portfolio website for sale, with everything you need to make your
              projects shine. Our website is easy to use and customize, so you
              can make it your own. It also comes with a range of features,
              including a blog, contact page, and gallery. This is the perfect
              way to show off your work and impress potential employers. Get
              your portfolio website today!
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
              Are you looking to start an niche business? Now's your chance
              to get a jump on the competition. Aqsa IT is selling a fully
              operational niche, loaded with features and ready to
              go. We've put a lot of work into this website, and we're confident
              that it can provide a great foundation for your business. It's a
              turnkey solution, so you don't have to worry about a long setup
              process. If you're interested, reach out to us and we'll send you
              more information. We look forward to hearing from you!
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
              Are you looking to start an e-commerce business? Now's your chance
              to get a jump on the competition. Aqsa IT is selling a fully
              operational e-commerce website, loaded with features and ready to
              go. We've put a lot of work into this website, and we're confident
              that it can provide a great foundation for your business. It's a
              turnkey solution, so you don't have to worry about a long setup
              process. If you're interested, reach out to us and we'll send you
              more information. We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>

      {/* <Review></Review> */}
    </div>
  );
};

export default Home;
