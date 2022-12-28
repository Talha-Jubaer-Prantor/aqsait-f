import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar-container'>

<nav class="navbar navbar-expand-lg" >
  <div class="container-fluid" >
  
  <Link class="navbar-brand text-light" to="/" style={{fontSize:""}}><b>Aqsa IT</b></Link>

    <button class="navbar-toggler" style={{backgroundColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon "></span> */}
      <lord-icon
    src="https://cdn.lordicon.com/wgwcqouc.json"
    trigger="click"
    style={{width:"30px",height:"30px"}}>
</lord-icon>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* <a class="nav-link active text-light" aria-current="page" href="/"><b>Home</b></a> */}
        {/* <a class="nav-link text-light" href="/"><b>Features </b></a> */}
        <Link class="nav-link text-light" to="/about"><b>About</b></Link>
        <Link class="nav-link text-light" to="/contact"><b>Contact Us</b></Link>
      </div>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;