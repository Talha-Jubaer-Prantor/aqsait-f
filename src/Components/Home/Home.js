import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>

      <div className="pakages container">
        <Link className="single-pakage" to="/portfolio" style={{textDecoration:"none",color:"white"}}>
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/ljvjsnvh.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>PORTFOLIO</h3>
        </Link>

        <Link className="single-pakage" to="/blog" style={{textDecoration:"none",color:"white"}}>
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/ggqtvqxi.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>BLOG</h3>
        </Link>

        <Link className="single-pakage" to="/news" style={{textDecoration:"none",color:"white"}}>
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/alnsmmtf.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>NEWS</h3>
        </Link>

        <Link className="single-pakage" to="/ecommerce" style={{textDecoration:"none",color:"white"}}>
          <br />
          <lord-icon
            src="https://cdn.lordicon.com/lpddubrl.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <h3>E-COMMERCE</h3>
        </Link>
      </div>


    </div>
  );
};

export default Home;
