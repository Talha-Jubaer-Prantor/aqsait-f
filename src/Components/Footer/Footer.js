import React from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
import './Footer.css';

const Footer = () => {
    // const { user } = useAuth()
    return (
        <div className="footer-container ">
            {/* <div className="text-center">
                <h3 className="text-info text-underline"><ins>You can get in touch by subscribing</ins></h3>
                <div className="py-3 px-2">
                    <label htmlFor="#"><input type="email" name="email" placeholder="Enter your email" id="subscribe-email" /></label>
                    <button className="subscribe-btn">Subscribe</button>
                </div>
                <p className="text-info fw-bold">To get the latest news from us please subscribe by your email.</p>
            </div> */}
            {/* <hr className="border my-4" /> */}
            <div className="container mx-auto row text-white text-start">
                <div className="col-lg-3 col-md-6 col-12">
                    <h5 className="mb-4 text-info">About Us</h5>
                    <p className="text-color">We have a great value of customer and we respect it.We have a best team for do this service.We are available all the time for our valuable consumer.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-info">Quick Links</h5>
                    <p><Link className="text-decoration-none text-color link-text" to="/home">Home</Link></p>
                    <p><Link className="text-decoration-none text-color link-text" to="/contact">Contact</Link></p>
                    {/* {
                        user.email
                        &&
                        <p><Link className="text-decoration-none text-color link-text text-info" to="/dashboard">Dashboard</Link></p>
                    } */}
                    <p><Link className="text-decoration-none text-color link-text" to="/allProducts">Explore Product</Link></p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-info">Contact Info</h5>
                    <p className="text-color link-text"><span><i className="fas fa-map-marker-alt me-2"></i></span> Mirpur, Dhaka, Bangladesh</p>
                    <p className="text-color link-text"><span><i className="fas fa-phone-alt me-2"></i></span> +880 1923893242</p>
                    <p className="text-color link-text"><span><i className="fas fa-envelope me-2"></i></span> Aqsait242@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-info">Business Hour</h5>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Monday-Friday:</p>
                        <p>9am - 5pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Saturday:</p>
                        <p>10am - 2pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Sunday:</p>
                        <p>Closed.</p>
                    </div>
                </div>
            </div>

            {/* footer bottom  */}

            <div className="footer-bottom py-4">
                <div className=" container text-center mx-auto">
                    <h2 className="title-follow" style={{color:""}}>Follow Us</h2>
                    <div>
                        <span><a href="https://www.facebook.com/Aqsait2426"><i className="footer-icon fab fa-facebook-square"></i></a></span>
                        <span><a href="https://wa.me/8801760678306"><i className="footer-icon fab fa-whatsapp-square"></i></a></span>
                        {/* <span><a href=""><i className="footer-icon fab fa-instagram-square"></i></a></span> */}
                    </div>
                    <p className="text-color pt-4">Copyright &copy; 2022. All rights reserved || Aqsa IT</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;