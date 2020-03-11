import React, { Component, ReactSVG } from 'react';
<<<<<<< HEAD
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
import Nav_Header from '../../Home/Nav_Header';
import Footer from '../../Home/Footer';
import { Link } from 'react-router-dom';
=======
//import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
>>>>>>> job adding UI

import 'bootstrap/dist/css/bootstrap.min.css';
import './ForgotPassword.css';

class ForgotPassword extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
<<<<<<< HEAD
      emailTouch: false,
      passwordValid: false,
      passwordTouch: false,
      formValid: false
    }
  }
    
  handleUserInput = (e) => {
    const name = e.target.name;
    console.log('this is:', name);
    const value = e.target.value;
    console.log('this is:', value);
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
    
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    console.log('fieldValidationErrors:', fieldValidationErrors);
    console.log('this.state.formErrors:', this.state.formErrors);
=======
      passwordValid: false,
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
>>>>>>> job adding UI
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
<<<<<<< HEAD
        case 'email':
            this.state.emailTouch = true;
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
        default:
            break;
    }
    
=======
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
>>>>>>> job adding UI
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
<<<<<<< HEAD

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
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
                          <div>
                              <label htmlFor="email">Email</label>
                              {/* // TODO: change class dynamically to manipulate the border of the input */}
                              <input className={'form-group ' + (this.errorClass(this.state.formErrors.email))} type="email" required className="form-control" name="email"
                                  placeholder="Please Enter Your Email ID"
                                  value={this.state.email}
                                  onChange={this.handleUserInput}  />
                              {errorMessage_Email}
                            </div>
                        </div>
                      </div>
                      <div className="col-md-12">
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
=======
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }
  
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  
  render () {
    return (
      // <form className="demoForm">
      //   <h2>Sign up</h2>
      //   <div className="panel panel-default">
      //     <FormErrors formErrors={this.state.formErrors} />
      //   </div>
      //   <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
      //     <label htmlFor="email">Email address</label>
      //     <input type="email" required className="form-control" name="email"
      //       placeholder="Email"
      //       value={this.state.email}
      //       onChange={this.handleUserInput}  />
      //   </div>
      //   <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
      //     <label htmlFor="password">Password</label>
      //     <input type="password" className="form-control" name="password"
      //       placeholder="Password"
      //       value={this.state.password}
      //       onChange={this.handleUserInput}  />
      //   </div>
      //   <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      // </form>
      <div>
        <form>
          <div className="login-container jumbotron">
            <div className="row">
                <div className="col-md-12">
                
                </div>
                <div className="col-md-12">
                    <div className="form-label-group">
                    <FormGroup controlId="email_id" bsSize="large">
                        
                        <Form.Label>Email</Form.Label>  
                        <FormControl
                        autoFocus
                        type="email"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                        placeholder="Please Enter Your Email ID"
                        />        
                        {/* <label>Email</label>
                        <input type="emailID" formControlName="emailID" className="form-control" required autofocus />  
                        <span className="invalid-feedback" > Invalid Email </span> */}
                    
                    </FormGroup>
                    </div>
                </div>
              
                <div className="col-md-12">
                    <br/>
                    <Button className="btn btn-success pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Submit</Button>
                    {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                </div>
            </div>

            <div className="row">
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
          </div>
          </div>
        </form>
>>>>>>> job adding UI
      </div>
    )
  }
}

<<<<<<< HEAD
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
=======
export default ForgotPassword;
>>>>>>> job adding UI
