import React from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

//TODO: Database connection and sending and requesting the info
class RegistrationForm extends React.Component {
    constructor (props) {
        super(props);
        
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.errorClass = this.errorClass.bind(this);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {email: '', password: '', confirmPassword: ''},
            emailValid: false,
            emailTouch: false,
            passwordValid: false,
            passwordTouch: false,
            confirmPasswordValid: false,
            confirmPasswordTouch: false,
            formValid: false,
        }
    }
      
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + ' ---> ', value);
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
    }
      
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        //console.log('fieldValidationErrors:', fieldValidationErrors);
        //console.log('this.state.formErrors:', this.state.formErrors);
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;
      
        switch(fieldName) {
            case 'email':
                this.setState({emailTouch : true});
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid 
                    ? <p className="isValid">Sweet! Email Id is valid</p> 
                    : <p className="has-error">Please Enter a valid Email Id</p>;
                break;
            case 'password':
                this.setState({passwordTouch : true});
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid 
                    ? <p className="isValid">Awesome! Password is valid</p>
                    : <p className="has-error">Please Enter a valid Password</p>;
                if(this.state.confirmPasswordTouch) {
                    confirmPasswordValid = (this.state.password == this.state.confirmPassword) ? true : false ;
                    fieldValidationErrors.confirmPassword = confirmPasswordValid
                        ? <p className="isValid">Great! confirm Password is same</p>
                        : <p className="has-error">Confirm Password did not match</p>;
                }
                break;
            case 'confirmPassword':
                this.setState({confirmPasswordTouch : true});
                confirmPasswordValid = (this.state.password == this.state.confirmPassword) ? true : false ;
                fieldValidationErrors.confirmPassword = confirmPasswordValid 
                    ? <p className="isValid">Great! confirm Password is same</p>
                    : <p className="has-error">Confirm Password did not match</p>;
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
        console.log((this.state.emailValid && this.state.passwordValid) && this.state.confirmPasswordValid);
        this.setState({formValid: (this.state.emailValid && this.state.passwordValid) && this.state.confirmPasswordValid});
    }
      
    errorClass(error) {
        return(error ? 'is_valid' : 'has_error');
    }

    onSubmitForm(e){
        e.preventDefault();

        if(this.state.formValid) {

            const employee = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
            }
    
            axios.post('http://localhost:5000/employee/add', employee)
                .then(res => {
                    if(res.data.length > 0) {
                        console.log(res.data);
                        let fieldValidationErrors = this.state.formErrors;
                        if(res.data == "Error") {
                            fieldValidationErrors.email = <p className="has-error">Oops..!! Email id is already taken</p>;
                            fieldValidationErrors.password = '';
                            fieldValidationErrors.confirmPassword = '';
                            this.setState({
                                password: '',
                                confirmPassword: '',
                                formErrors: fieldValidationErrors
                            });
                        } else {
                            // TODO: show this in elegant way so user can understand.
                            window.alert('Registed..!!');
                        }
                    }
                })
                // ? err.data type is undefine so cant catch it properly but not sure enough. 
                .catch(err => console.log('' + err.data));
        }
    }

    render(){
        return(
            <form>  
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input type="text" required className="form-control" name="firstName"
                                    placeholder="Please Enter Your First Name"
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
                                <input className={'form-group ' + (this.errorClass(this.state.emailValid))} type="email" required className="form-control" name="email"
                                    placeholder="Please Enter Your Email ID"
                                    value={this.state.email}
                                    onChange={this.handleUserInput}  />
                                {this.state.formErrors.email}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="password">Password</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={`${this.errorClass(this.state.passwordValid)}`} type="password" className="form-control" name="password"
                                    placeholder="Please Enter Your Password"
                                    value={this.state.password}
                                    onChange={this.handleUserInput}  />
                                {this.state.formErrors.password}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={`${this.errorClass(this.state.confirmPasswordValid)}`} type="password" className="form-control" name="confirmPassword"
                                    placeholder="Please Confirm Your Password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleUserInput}  />
                                {this.state.formErrors.confirmPassword}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <Button className="btn pull-right" block 
                            type="submit" 
                            disabled={!this.state.formValid} 
                            onClick={this.onSubmitForm} >Register</Button>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegistrationForm;