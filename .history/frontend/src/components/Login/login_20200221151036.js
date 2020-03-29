import React, { Component } from 'react';
import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './logintheme.css';

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
        <form>
          <div class="login-container jumbotron">
            <div class="row">
              <div class="col-md-12">
                <div class="form-label-group">
                  <FormGroup controlId="email_id" bsSize="large">
                    
                    <ControlLabel>Email</ControlLabel>  
                    <FormControl
                      autoFocus
                      type="email"
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
                      placeholder="Please Enter Your Email ID"
                    />
                    
                    {/* <label>Email</label>
                    <input type="emailID" formControlName="emailID" class="form-control" required autofocus />  
                    <span class="invalid-feedback" > Invalid Email </span> */}
                  
                  </FormGroup>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-label-group">
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      // value={password}
                      // onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="Please Enter Your Password"
                    />
                  </FormGroup>
                  {/* <label>Password</label>
                  <input type="password" formControlName="password" class="form-control"  required autofocus />
                  <span class="invalid-feedback"> Invalid Password </span> */}
                </div>
              </div>
              
              <div class="col-md-12">
                <br/>
                <Button class="btn btn-success pull-right" block bsSize="large" type="submit" onClick="">Login </Button>
                  {/* <button class="btn btn-success pull-right" type="submit" >Login</button> */}
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div>
                  <br/>
                  <div  class="alert alert-success ">Login Successful!</div>
                </div>
                <div>
                  <br/>
                  <div  class="alert alert-danger">Wrong credentials!</div>
              </div>
            </div>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;