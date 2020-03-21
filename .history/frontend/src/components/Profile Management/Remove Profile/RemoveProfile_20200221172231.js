import React, { Component } from 'react';
import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './RemoveProfile.css';

class RemoveProfile extends Component {

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
      <div>
        <form>
          <div className="login-container jumbotron">
            <div className="row">
                <div className="col-md-12">
                    <p>Are you sure you want to remove this profile?</p>                
                </div>
                <div className="col-md-12">
                    <br/>
                    <Button className="btn btn-success pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Register</Button>
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

export default RemoveProfile;