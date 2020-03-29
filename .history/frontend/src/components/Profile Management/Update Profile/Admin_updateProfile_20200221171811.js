import React, { Component } from 'react';
import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin_updateProfile.css';

class AdminUpdateProfile extends Component {

  constructor (props) {
    super(props);
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
                
              <div className="col-md-12">
                <div className="form-label-group">
                  <FormGroup controlId="userName" bsSize="large">
                    
                    <ControlLabel>User Name</ControlLabel>  
                    <FormControl
                      autoFocus
                      type="text"
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
                      placeholder="Lorem Ipsum"
                    />
                    
                    {/* <label>Email</label>
                    <input type="emailID" formControlName="emailID" className="form-control" required autofocus />  
                    <span className="invalid-feedback" > Invalid Email </span> */}
                  
                  </FormGroup>
                </div>
              </div>
                
                <div className="form-label-group">
                  <FormGroup controlId="email_id" bsSize="large">
                    
                    <ControlLabel>Email</ControlLabel>  
                    <FormControl
                      autoFocus
                      type="email"
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
                      placeholder="Lorem@ipsum.com"
                    />
                    
                    {/* <label>Email</label>
                    <input type="emailID" formControlName="emailID" className="form-control" required autofocus />  
                    <span className="invalid-feedback" > Invalid Email </span> */}
                  
                  </FormGroup>
                </div>
              </div>
              
              <div className="col-md-12">
                <div className="form-label-group">
                  <FormGroup controlId="licence_number" bsSize="large">
                    <ControlLabel>Licence No</ControlLabel>
                    <FormControl
                      // value={password}
                      // onChange={e => setPassword(e.target.value)}
                      type="text"
                      placeholder="LorRmIpsum123"
                    />
                  </FormGroup>
                  {/* <label>Password</label>
                  <input type="password" formControlName="password" className="form-control"  required autofocus />
                  <span className="invalid-feedback"> Invalid Password </span> */}
                </div>
              </div>
              
              <div className="col-md-12">
                <div className="form-label-group">
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      // value={password}
                      // onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="loremIpasum"
                    />
                  </FormGroup>
                  {/* <label>Password</label>
                  <input type="password" formControlName="password" className="form-control"  required autofocus />
                  <span className="invalid-feedback"> Invalid Password </span> */}
                </div>
              </div>


              
              <div className="col-md-12">
                <br/>
                <Button className="btn btn-success pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Update</Button>
                  {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
              </div>
            </div>

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
        </form>
      </div>
    )
  }
}

export default AdminUpdateProfile;