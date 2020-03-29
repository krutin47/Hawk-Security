import React, { Component, ReactSVG } from 'react';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
import Nav_Header from '../../Home/Nav_Header';
import Footer from '../../Home/Footer';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ForgotPassword.css';

class ForgotPassword extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      formErrors: {email: ''},
      emailValid: false,
      emailTouch: false,
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
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }
  
  errorClass(error) {
    return(error.length === 0 ? 'is_valid' : 'has_error');
  }
  
  render () {

    let errorMessage_Email;
    if(this.state.emailTouch) {
        (this.state.emailValid)
        ? errorMessage_Email = <p className="isValid">Sweet! Email Id is valid</p>
        : errorMessage_Email = <p className="has-error">Please Enter a valid Email Id</p>
    }

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
            <div className="image_view">
              <img src={require('../../../assets/images/forgotPassword_1.jpg')} alt=""/>
            </div>
            
            {/* Form Container */}
            <div className="form_container">
              
              {/* Register Text */}
              <div className="login_text">
                <b>Forgot Password</b>
              </div>
              
              {/* Register Form Component */}
              <div>
                <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-label-group">
                          <FormGroup controlId="email" bsSize="large">
                            <Form.Label>Email</Form.Label>  
                            <FormControl
                              autoFocus
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleUserInput}
                              placeholder="Please Enter Your Email ID"  />
                          </FormGroup>
                          {errorMessage_Email}
                        </div>
                      </div>
                      <div className="col-md-6 justify-content-center">
                        <Button className="btn btn-success pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Submit</Button>
                      </div>
                    </div>
                </form>
              </div>
              
              {/* Login Link */}
              <div className="register_navigation">
                <Link to="/login"><u>Remebered your Password? Login Here</u></Link>
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

export default ForgotPassword;

{/* <div className="row">
      <div className="col-md-12">
        <div>
          <br/>
          <div className="alert alert-success display_none">Email sent Successfully!</div>
        </div>
        <div>
          <br/>
          <div  className="alert alert-danger display_none">Wrong Email address!</div>
        </div>
      </div>
    </div> */}