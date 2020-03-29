import React, { Component } from 'react';
import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";

class LoginForm extends React.Component {
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
        console.log('this is:', name);
        const value = e.target.value;
        console.log('this is:', value);
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

    render(){
        return(
            <form>  
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                <label htmlFor="email">Email address</label>
                                <input type="email" required className="form-control" name="email"
                                    placeholder="Please Enter Your Email ID"
                                    value={this.state.email}
                                    onChange={this.handleUserInput}  />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password"
                                    placeholder="Please Enter Your Password"
                                    value={this.state.password}
                                    onChange={this.handleUserInput}  />
                            </div>
                        </div>
                    </div> 
                    
                    <div className="col-md-12">
                        {/* <button type="submit" bsSize="large" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button> */}
                        <Button className="btn pull-right" block type="submit" disabled={!this.state.formValid}>Login </Button>
                        {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                    </div>
                    
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </form>
        );
    }
}

export default LoginForm;