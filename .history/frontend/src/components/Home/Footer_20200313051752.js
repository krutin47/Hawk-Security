import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <footer className="footerSection">
            //     <div className="footerTop p70-0 ">
            //         <div className="wrapper">
            //             <div className="clearfix noListStyle fortopInner">            
            //                 <div className="footerNav ib w25 vt pr15 tabw50 xmw100 xmr0">
            //                     <h6 className="titleHeight">Main Content</h6>
            //                     <ul>
            //                         <li><a href="javascript:void(0)">Home</a></li>
            //                         <li><a href="javascript:void(0)">Services</a></li>
            //                         <li><a href="javascript:void(0)">Contact Us</a></li>
            //                         <li><a href="javascript:void(0)">Privacy Policy</a></li>
            //                     </ul>
            //                 </div>
                            
            //                 <div className="footerNav ib w25 vt pr15 withSocial tabw50 xmw100 xmr0">
            //                     <h6 className="titleHeight">Connect with us</h6>
            //                     <ul>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-google-plus"></i>Google</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i>Twitter</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i>Facebook</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i>Linkdin</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-pinterest"></i>Pintrest</a></li>
            //                         <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i>instagram</a></li>
            //                     </ul>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="footerBottom p20-0 text-center">
            //         <div className="wrapper">
            //         <p> &copy; 2020 Hawk Security. All rights has been reserved.</p>
            //         </div>
            //     </div>
            // </footer>

            // <!-- Footer -->
            <footer className="page-footer font-small unique-color-dark">

                <div>
                    
                    <div className="container">

                    {/* <!-- Grid row--> */}
                    <div className="row py-4 d-flex align-items-center">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-6 col-lg-7 text-center text-md-right">

                            {/* <!-- Facebook --> */}
                            <a className="fb-ic">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            {/* <!-- Twitter --> */}
                            <a className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            {/* <!-- Google +--> */}
                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            {/* <!--Linkedin --> */}
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            {/* <!--Instagram--> */}
                            <a className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row--> */}

                    </div>
                </div>

                {/* <!-- Footer Links --> */}
                <div className="container text-center text-md-left mt-5">

                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase font-weight-bold">Company name</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.</p>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p>
                                <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!">Bootstrap Angular</a>
                            </p>

                        </div>
                        {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                        <p>
                        <a href="#!">Your Account</a>
                        </p>
                        <p>
                        <a href="#!">Become an Affiliate</a>
                        </p>
                        <p>
                        <a href="#!">Shipping Rates</a>
                        </p>
                        <p>
                        <a href="#!">Help</a>
                        </p>

                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                        <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                    {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
                {/* <!-- Copyright --> */}

            {/* <!-- Footer --> */}
            </footer>
        );
    }
}

export default Footer;