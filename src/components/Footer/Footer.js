import React from 'react';
import PropTypes from 'prop-types';
import "./style.css";
Footer.propTypes = {

};

function Footer(props) {
    return (
        <>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify"><h1>Apple Store</h1></p>
                        </div>

                        <div class="col-xs-6 col-md-3">

                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><a>About Us</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">

                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="https://www.facebook.com/profile.php?id=100006884797334"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="linkedin" href="https://www.linkedin.com/in/t%C3%BA-nguy%E1%BB%85n-anh-39b68b1b0/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;