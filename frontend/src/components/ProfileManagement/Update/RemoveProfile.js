<<<<<<< HEAD
import React, { Component, ReactSVG } from 'react';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
import Nav_Header from '../../Home/Nav_Header';
import Footer from '../../Home/Footer';
import { Link } from 'react-router-dom';

=======
import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Alert } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> job adding UI
import './RemoveProfile.css';

class RemoveProfile extends Component {

  constructor (props) {
    super(props);
<<<<<<< HEAD
  }
    
  render () {
    return (
      <div>
        
        {/* Header Section */}
        <Nav_Header/>
        {/* Hadder End */}

        {/* Body Section */}
        <div className="full_window">
          
          {/* Login Container */}
          <div className="forgot_container">
            
            {/* Imaage View */}
            <div className="image_view_1">
              <img src={require('../../../assets/images/removeProfile.jpg')} alt=""/>
            </div>
            
            {/* Form Container */}
            <div className="remove-profile-form__container">
              
              {/* Register Form Component */}
              <div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                        <p>Are you sure you want to remove this profile?</p>                
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <Button className="btn btn-success pull-right" block bsSize="large" type="submit" >Yes</Button>
                        </div>
                        <div className="col">
                          <Button className="btn btn-danger pull-right" block bsSize="large" type="button" >No</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Body End */}

        {/* Footer Component */}
        <Footer/>
        {/* Footer Component End */}
=======
    this.state = {
      email: '',
      password: '',
      licence_number: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      licenceValid: false,
      formValid: false
    }
  }
  
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
  
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }
  
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  
  render () {
    return (
      <div>
        <form>
          <div className="login-container jumbotron">
            <div className="row">
                <div className="col-md-12">
                    <p>Are you sure you want to remove this profile?</p>                
                </div>
                <div className="container">

                <div className="row">
                  <div className="col">
                      <br/>
                      <Button className="btn btn-success pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Yes</Button>
                      {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                  </div>
                  <div className="col">
                      <br/>
                      <Button className="btn btn-danger pull-right" block bsSize="large" type="button" disabled={!this.state.formValid}>No</Button>
                      {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                  </div>
                </div>
                </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div>
                  <br/>
                  <div className="alert alert-success display_none">Register Successful!</div>
                </div>
                <div>
                  <br/>
                  <div  className="alert alert-danger display_none">Wrong input field!</div>
              </div>
            </div>
          </div>
          </div>
        </form>
>>>>>>> job adding UI
      </div>
    )
  }
}

export default RemoveProfile;