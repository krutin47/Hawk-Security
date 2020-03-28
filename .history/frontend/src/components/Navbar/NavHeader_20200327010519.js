//importing Components & required Modules
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//importing CSS
import './NavHeader.css'

// TODO :: update the User Navbar according to your need..
function UserNavbar(props) {
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
                            <li><Link to="/availability_form">AVAILABILITY FORM</Link></li>
                            <li><Link to="/User_update_profile">UPDATE PROFILE</Link></li>
                            <li><Link to="/Remove_profile">REMOVE PROFILE</Link></li>
                            {/* //TODO: Logout Button needs be Added */}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

//TODO :: update the Admin Navbar according to your need..
function AdminNavbar(props) {
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
                            <li><Link to="/admin_schedule_display">ADMIN PROFILE</Link></li>
                            <li><Link to="/user_schedule_display">USER PROFILE</Link></li>
                            <li><Link to="/register">REGISTER</Link></li>
                            <li><Link to="/login">LOGIN</Link></li>
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
                            <li><Link to="/admin_schedule_display">HOME</Link></li>
                            <li><Link to="/user_schedule_display">SERVICES</Link></li>
                            <li><Link href="#contact_us">CONTCT US</Link></li>
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
            errors: {}
        };
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
            
            if(nextProps.auth.user.role == 1) {
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
        console.log(this.state);
        
        if (this.state.isLoggedIn) {
            if(this.state.isAdmin) {
                return <AdminNavbar />;
            } else if (this.state.isEmployee) {
                console.log("UserNavbar true");
                return <UserNavbar />;
            }
        } else {
            console.log("guestNavbaar");
            
            return <GuestNavbar />;
        }
    }
}

NavHeader.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(NavHeader));