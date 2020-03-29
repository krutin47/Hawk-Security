import React from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//TODO: Database connection and sending and requesting the info
class UserUpdateProfileForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: 'Krutin',
            lastName: 'Trivedi',
            email: 'krutin@gmail.com',
            password: 'Krutin@47',
            confirmPassword: 'Krutin@47',
            formErrors: {email: '', password: '', confirmPassword: ''},
            emailValid: false,
            emailTouch: false,
            passwordValid: false,
            passwordTouch: false,
            confirmPasswordValid: false,
            confirmPasswordTouch: false,
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
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;
      
        switch(fieldName) {
            case 'email':
                this.state.emailTouch = true;
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                this.state.passwordTouch = true;
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            case 'confirmPassword':
                this.state.confirmPasswordTouch = true;
                confirmPasswordValid = this.state.password === this.state.confirmPassword ;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '': ' is not same';
                break;
            default:
                break;
        }
        
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        confirmPasswordValid: confirmPasswordValid
                      }, this.validateForm);
    }
    
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
      
    errorClass(error) {
        return(error.length === 0 ? 'is_valid' : 'has_error');
    }

    render(){

        let errorMessage_Email;
        let errorMessage_password;
        let errorMessage_confirmPassword;
        if(this.state.emailTouch) {
            (this.state.emailValid)
            ? errorMessage_Email = <p className="isValid">Sweet! Email Id is valid</p>
            : errorMessage_Email = <p className="has-error">Please Enter a valid Email Id</p>
        }
        if(this.state.passwordTouch) {
            (this.state.passwordValid)
            ? errorMessage_password = <p className="isValid">Awesome! Password is valid</p>
            : errorMessage_password = <p className="has-error">Please Enter a valid Password</p>
        }
        if(this.state.confirmPasswordTouch) {
            (this.state.passwordValid)
            ? errorMessage_confirmPassword = <p className="isValid">Great! confirm Password is same</p>
            : errorMessage_confirmPassword = <p className="has-error">Password did not match</p>
        }

        return(
            <form>  
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input type="text" required className="form-control" name="firstName"
                                    placeholder={this.state.firstName}
                                    value={this.state.firstName}  
                                    onChange={this.handleUserInput} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input type="text" required className="form-control" name="lastName"
                                    placeholder="Please Enter Your Last Name"
                                    value={this.state.lastName}  
                                    onChange={this.handleUserInput} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="email">Email address</label>
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
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="password">Password</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={`form-group ${this.errorClass(this.state.formErrors.password)}`} type="password" className="form-control" name="password"
                                    placeholder="Please Enter Your Password"
                                    value={this.state.password}
                                    onChange={this.handleUserInput}  />
                                {errorMessage_password}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={`form-group ${this.errorClass(this.state.formErrors.password)}`} type="password" className="form-control" name="confirmPassword"
                                    placeholder="Please Confirm Your Password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleUserInput}  />
                                {errorMessage_confirmPassword}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <Button className="btn pull-right" block type="submit" disabled={!this.state.formValid}>Register</Button>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserUpdateProfileForm;