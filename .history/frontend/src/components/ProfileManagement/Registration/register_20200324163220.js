import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Nav_Header from '../../Home/Nav_Header';
import Footer from '../../Home/Footer';

class Register extends Component {

  render () {
    return (

      <div>
        
        {/* Header Section */}
        <Nav_Header/>
        {/* Hadder End */}

        {/* Body Section */}
        <div className="full_window">
          
          {/* Login Container */}
          <div className="login_container">
            
            {/* Imaage View */}
            <div className="image_view">
              <img src={require('../../../assets/images/profilePage.jpg')} alt=""/>
            </div>
            
            {/* Form Container */}
            <div className="form_container">
              
              {/* Register Text */}
              <div className="login_text">
                <b>Register</b>
              </div>
              
              {/* Register Form Component */}
              <RegistrationForm/>
              
              {/* Login Link */}
              <div className="register_navigation">
                <Link to="/login"><u>Already have an account? Login Here</u></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Body End */}

        {/* Footer Component */}
        <Footer/>
        {/* Footer Component End */}
      </div>
    )
  }
}

export default Register;