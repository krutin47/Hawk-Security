import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";


class AdminNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    
    render() {
        
        const { user } = this.props.auth;
        
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
        )
    }
}

AdminNavbar.prototype = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(AdminNavbar));