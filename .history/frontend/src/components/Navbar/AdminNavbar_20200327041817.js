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
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/availability_form">AVAILABILITY FORM</Link></li>
                                {/* // TODO: make below three in drop down list */}
                                <li><Link to="/User_update_profile">UPDATE PROFILE</Link></li>
                                <li><Link to="/Remove_profile">REMOVE PROFILE</Link></li>
                                <li><Link onClick={props.logoutUser()}>LOGOUT</Link></li>
                                {/* //TODO: Logout Button needs be Added */}
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