import React from 'react';
import "./style.css";
Footer.propTypes = {

};

function Footer(props) {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>Contact</h6>
                            <h1 className='h1-footer'>Apple Store</h1>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Location</h6>
                            <ul className="footer-links">
                                <li><span>Store 1</span>: Rạch Bùng Binh,Phường 9, Quận 3</li>
                                <li><span>Store 2</span>: Trần Đình Xu, phường Nguyễn Cư Trinh, Quận 1</li>
                                <li><span>Store 3</span>: Điện Biên Phủ, phường 17, Quận Bình Thạnh</li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <div class="email-phone">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span> Email:</span> abcd123456@gmail.com
                            <br />
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span> Hotline: </span> 0232-412-24124
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/profile.php?id=100006884797334"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href=" #"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/in/t%C3%BA-nguy%E1%BB%85n-anh-39b68b1b0/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;