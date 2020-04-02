import React, { Component } from 'react';
import axios from 'axios';
import '../../main.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

function availability_form() {
    return (
        <React.Fragment>

            {/* Header Section */}

            <header class="altBg">
                 <div class="headerMain">
                    <div class="wrapper clearfix">
                        <div class="siteLogo fl">
                            <a href="home.html"><img src="../../assets/images/Sitelogo.png" alt=""/></a>
                        </div>
                        <a class="expandMenu"><i></i><i></i><i></i></a>
                    <div class="siteNavigation fr">
                            <ul class="parent">
                                <li><a href="profile.html">PROFILE</a></li>
                                <li><a href="availablity.html">SHIFT SCHEDULES</a></li>
                                <li><a href="paystub.html">PAYSTUB</a></li>
                                <li><a href="jobs.html">JOB POSTING</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Form Section */}

            <section class="pb70 sectionBox">
                <div class="wrapper smallWrapper">
                    <div class="text-center uppercase">
                        <h3>Availablity</h3>
                    </div>
                    <div class="pt40">
                        <form>
                            <div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="firstname">Full Name <sup>*</sup></label>
                                        <input type="text" name="firstname" id="firstname" required></input>
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="emId">Employee Id <sup>*</sup></label>
                                        <input type="text" name="emId" id="emId" required></input>
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="monday">Monday</label>
                                        <input type="text" name="monday" id="monday" placeholder="Start Time" required></input>
                                        <input type="text" name="monday" id="monday" placeholder="End Time" required></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="tuesday">Tuesday</label>
                                        <input type="text" name="tuesday" id="tuesday" placeholder="Start Time" required></input>
                                        <input type="text" name="tuesday" id="tuesday" placeholder="End Time" required></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="wednesday">Wednesday</label>
                                        <input type="text" name="wednesday" id="wednesday" placeholder="Start Time" required></input>
                                        <input type="text" name="wednesday" id="wednesday" placeholder="End Time" required></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="thursday">Thursday</label>
                                        <input type="text" name="thursday" id="thursday" placeholder="Start Time" required></input>
                                        <input type="text" name="thursday" id="thursday" placeholder="End Time" required></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="friday">Friday</label>
                                        <input type="text" name="friday" id="friday" placeholder="Start Time" required></input>
                                        <input type="text" name="friday" id="friday" placeholder="End Time" required></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="saturday">Saturday</label>
                                        <input type="text" name="saturday" id="saturday" placeholder="Start Time" required></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="End Time" required></input>
                                    </div>
                                    <p>Enter "-" if you are unavailable on a particular day.</p>
                                </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="sunday">Sunday</label>
                                        <input type="text" name="sunday" id="sunday" placeholder="Start Time" required></input>
                                        <input type="text" name="sunday" id="sunday" placeholder="End Time" required></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                
            </section>

            {/* Footer Section */}

            <footer className="footerSection">
                <div className="footerTop p70-0 ">
                    <div className="wrapper">
                    <div className="clearfix noListStyle fortopInner">
                        
                        <div className="footerNav ib w25 vt pr15 tabw50 xmw100 xmr0">
                        <h6 className="titleHeight">Extra</h6>
                        <ul>
                            <li><a href="javascript:void(0)">Schedule a Call</a></li>
                            <li><a href="javascript:void(0)">Terms of Service</a></li>
                            <li><a href="javascript:void(0)">Security</a></li>
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
                        <div className="newlaterForm ib w25 vt tabw50 xmw100 xmr0">
                        <h6 className="titleHeight">Newsletter Sign up</h6>
                        <form>
                            <fieldset>
                            <input type="email" placeholder="you@example.com"/>
                            </fieldset>
                            <fieldset>
                            <input type="button" value="Sign up"/>
                            </fieldset>
                        </form>
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
        </React.Fragment>    
    )
}
    

availability_form.propTypes = {

    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
export default connect(mapStateToProps)(withRouter(availability_form));


// export default availability_form