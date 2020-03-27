import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './NavHeader.css'

//TODO :: update the User Navbar according to your need..
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
                            <li><Link to="/admin_schedule_display">HOME</Link></li>
                            <li><Link to="/user_schedule_display">SERVICES</Link></li>
                            <li><Link to="/register">INDUSTRY</Link></li>
                            <li><Link to="/login">CONTCT US</Link></li>
                        </ul>
                    </div>
                    <div className="login_button"> <strong id="quote">sign in</strong> </div>
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
                            <li><a href="#contact_us">CONTCT US</a></li>
                            <li><Link to="/login"><strong id="quote">SIGN IN</strong></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

//TODO :: Get status of the user and infalte the layout accordingly..

class Nav_header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isAdmin: false,
            isUser: false,
            isGuest: true
        };
    }

    render() {
        
        if (this.props.isLoggedIn) {
            if(this.props.isAdmin) {
                return <AdminNavbar />;
            } else if (this.props.isUser) {
                return <UserNavbar />;
            }
        } else {
            return <GuestNavbar />;
        }
    }
}

export default Nav_header;