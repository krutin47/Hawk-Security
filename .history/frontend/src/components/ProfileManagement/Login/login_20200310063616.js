import React, { Component } from 'react';
import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './logintheme.css';
import { Link } from 'react-router-dom';

class Login extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
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

        {/* Header Section */}
        <header>
          <div className="headerMain">
            <div className="wrapper clearfix">
              <div className="siteLogo fl">
                <Link to="/"><img src={require('../../../assets/images/Sitelogo.png')} alt=""/></Link>
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
        {/* Hadder End */}


        {/* Body Section */}
        <div className="full_window">
          <div className="login_container">
            <div className="image_view">
              <img src={require('../../../assets/images/profilePage.jpg')} alt=""/>
            </div>
            <div className="form_container">
              <div className="login_text">
                <b>Login</b>
              </div>
              <form>  
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-label-group">
                      <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" required className="form-control" name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleUserInput}  />
                      </div>
                      
                      <FormGroup controlId="email_id" bsSize="large">
                        <Form.Label>Email</Form.Label>
                        <FormControl
                          autoFocus
                          type="email"
                          // value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="Please Enter Your Email ID"
                        />
                        
                        {/* <label>Email</label>
                        <input type="emailID" formControlName="emailID" className="form-control" required autofocus />  
                        <span className="invalid-feedback" > Invalid Email </span> */}
                      
                      </FormGroup>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-label-group">
                      <FormGroup controlId="password" bsSize="large">
                        <Form.Label>Password</Form.Label>
                        <FormControl
                          // value={password}
                          // onChange={e => setPassword(e.target.value)}
                          type="password"
                          placeholder="Please Enter Your Password"
                        />
                      </FormGroup>
                      {/* <label>Password</label>
                      <input type="password" formControlName="password" className="form-control"  required autofocus />
                      <span className="invalid-feedback"> Invalid Password </span> */}
                    </div>
                  </div> 
                  <div className="col-md-12">
                    <Button className="btn pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Login </Button>
                      {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                  </div>
                  <FormErrors formErrors={this.state.formErrors} />
                </div>
              </form>
              <div className="forgot_navigation">
                <Link to="/Forgot_password"><u>Forgot Password?</u></Link>
              </div>
              <div className="register_navigation">
                <Link to="/register"><u>Don't have account? Register Here</u></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Body End */}

          {/* <div className="login-container">
            <div className="row">
              <div className="col-10 col-sm-8">
                
              </div>
              <div className="col-2 col-sm-4">
                

                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <br/>
                      <div className="alert alert-success display_none">Login Successful!</div>
                    </div>
                    <div>
                      <br/>
                      <div  className="alert alert-danger display_none">Wrong credentials!</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div> */}
        
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
      </div>
    )
  }
}

export default Login;