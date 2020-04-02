//importing Components & required Modules
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

//importing CSS
import './NavHeader.css'


function UserNavbar(props) {
    console.log("props ----------> ", props);
    function onClickLogout(e) {
        e.preventDefault();
        console.log('The logout button was clicked.');
        props.logoutUser();
    } 
    return (
        <header>
            <div className="headerMain">
                <div className="wrapper clearfix">
                    <div className="siteLogo fl">
                        <Link to="/"><img src={require('../../assets/images/Sitelogo.png')} alt=""/></Link>
                    </div>
                    <a className="expandMenu"><i></i><i></i><i></i></a>
                    <div className="siteNavigation fr">
                        <ul className="parent">
                            <li><Link to="/user_schedule_display">HOME</Link></li>
                            <li><Link to="/availability_form">AVAILABILITY</Link></li>
                            {/* // TODO: make below three in drop down list */}
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">PROFILE
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/User_update_profile">UPDATE PROFILE</Link></li>                           
                                    <li><Link to="/Remove_profile">REMOVE PROFILE</Link></li>
                                    <li><Link onClick={onClickLogout}>LOGOUT</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

// //TODO :: update the Admin Navbar according to your need..
function AdminNavbar(props) {
    function onClickLogout(e) {
        e.preventDefault();
        console.log('The logout button was clicked.');
        props.logoutUser();
    }
    return (
        <header>
            <div className="headerMain">
                <div className="wrapper clearfix">
                    <div className="siteLogo fl">
                        <Link to="/"><img src={require('../../assets/images/Sitelogo.png')} alt=""/></Link>
                    </div>
                    <a className="expandMenu"><i></i><i></i><i></i></a>
                    <div className="siteNavigation fr">
                        <ul className="parent">
                            {/* //TODO: Add the respective Link And Logout Button */}
                            <li><Link to="/admin_schedule_display">DASHBOARD</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">EMPLOYEE
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/availability_display">AVAILABILITY</Link></li>                           
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">CREATE
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/add_location">LOCATION</Link></li>
                                    <li><Link to="/job_create">ADD JOB</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">PROFILE
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/Admin_update_profile">UPDATE PROFILE</Link></li>                           
                                    <li><Link to="/Remove_profile">REMOVE PROFILE</Link></li>
                                    <li><Link to='' onClick={onClickLogout}>LOGOUT</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

function GuestNavbar(props) {
    return (
        <header>
            <div className="headerMain">
                <div className="wrapper clearfix">
                    <div className="siteLogo fl">
                        <Link to="/"><img src={require('../../assets/images/Sitelogo.png')} alt=""/></Link>
                    </div>
                    <a className="expandMenu"><i></i><i></i><i></i></a>
                    <div className="siteNavigation fr">
                        <ul className="parent">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/job_display">JOBS</Link></li>
                            <li><a href="#contact_us">CONTACT US</a></li>
                            <li><a href="#_service_">SERVICES</a></li>
                            <li><Link to="/login"><strong id="quote">SIGN IN</strong></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

// // TODO :: Get status of the user and infalte the layout accordingly..

class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isAdmin: false,
            isEmployee: false,
            isGuest: true,
            errors: {},
            auth: {},
        };
    }

    componentDidMount() {

        this.setState({
            auth: this.props.auth,
        })

        if(this.props.auth.isAuthenticated) {
            this.setState({ 
                isLoggedIn: true,
                isAdmin: false,
                isEmployee: false,
            });
            console.log("navbar is authenticated....");
            console.log("nextProps.auth.user.role -----------> ", this.props.auth.user.role);
            
            if(this.props.auth.user.role === 1) {
                //this is employee
                this.setState({
                    isEmployee: true,
                    isGuest: false,
                    isAdmin: false
                });
            } else {
                //this is admin
                this.setState({
                    isAdmin: true,
                    isEmployee: false,
                    isGuest: false
                });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.setState({ 
                isLoggedIn: true,
                isAdmin: false,
                isEmployee: false,
            });
            console.log("navbar is authenticated....");
            console.log("nextProps.auth.user.role -----------> ", nextProps.auth.user.role);
            
            if(nextProps.auth.user.role === 1) {
                //this is employee
                this.setState({
                    isEmployee: true,
                    isGuest: false,
                    isAdmin: false
                });
            } else {
                //this is admin
                this.setState({
                    isAdmin: true,
                    isEmployee: false,
                    isGuest: false
                });
            }
        } else {
            //this is guest
            this.setState({
                isLoggedIn: false,
                isAdmin: false,
                isEmployee: false,
                isGuest: true,
            });
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        // console.log(this.state);
        if (this.state.isLoggedIn) {
            if(this.state.isAdmin) {
                return <AdminNavbar {...this.props}/>;
            } else if (this.state.isEmployee) {
                console.log("I am in the UserNavbar");
                return <UserNavbar {...this.props}/>;
            }
        } else {
            console.log("I am in the guestNavbaar");
            return <GuestNavbar />;
        }
    }
}

NavHeader.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { logoutUser })(withRouter(NavHeader));