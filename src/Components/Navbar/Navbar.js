import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar-container'>

<nav class="navbar navbar-expand-lg" >
  <div class="container-fluid" >
  
  <a class="navbar-brand text-light" href="/" style={{fontSize:""}}><b>Aqsa IT</b></a>

    <button class="navbar-toggler" style={{backgroundColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* <a class="nav-link active text-light" aria-current="page" href="/"><b>Home</b></a> */}
        {/* <a class="nav-link text-light" href="/"><b>Features </b></a> */}
        {/* <a class="nav-link text-light" href="/"><b>Pricing</b></a> */}
        <a class="nav-link text-light" href="/contact"><b>Contact Us</b></a>
      </div>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;