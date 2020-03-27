import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footerSection">
                <div className="footerTop p70-0 ">
                    <div className="wrapper">
                        <div className="clearfix noListStyle fortopInner">            
                            <div className="footerNav ib w25 vt pr15 tabw50 xmw100 xmr0">
                                <h6 className="titleHeight">Main Content</h6>
                                <ul>
                                    <li><a href="javascript:void(0)">Home</a></li>
                                    <li><a href="javascript:void(0)">Services</a></li>
                                    <li><a href="javascript:void(0)">Contact Us</a></li>
                                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                </ul>
                            </div>
                            
                            <div className="footerNav ib w25 vt pr15 withSocial tabw50 xmw100 xmr0">
                                <h6 className="titleHeight">Connect with us</h6>
                                <ul>
                                    <li><a href="javascript:void(0)"><i className="fa fa-google-plus"></i>Google</a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i>Twitter</a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i>Facebook</a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i>Linkdin</a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-pinterest"></i>Pintrest</a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i>instagram</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerBottom p20-0 text-center">
                    <div className="wrapper">
                    <p> &copy; 2020 Hawk Security. All rights has been reserved.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;