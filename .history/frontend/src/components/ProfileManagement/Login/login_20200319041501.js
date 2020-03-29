import React, { Component } from 'react';
import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
import Nav_Header from '../../Home/Nav_Header';
import LoginForm from './LoginForm';
import Footer from '../../Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './logintheme.css';
import { Link } from 'react-router-dom';

class Login extends Component {

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
        // <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
        //   <label htmlFor="password">Password</label>
        //   <input type="password" className="form-control" name="password"
        //     placeholder="Password"
        //     value={this.state.password}
        //     onChange={this.handleUserInput}  />
        // </div>
      //   <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      // </form>
      <div>

        {/* Header Section */}
        <Nav_Header/>
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
              
              <LoginForm/>
              
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
        
        {/* Footer */}
        <Footer/>
      </div>
    )
  }
}

export default Login;