import React from 'react';
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";

import './logintheme.css';

//TODO: Database connection and sending and requesting the info
class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          emailTouch: false,
          passwordValid: false,
          passwordTouch: false,
          formValid: false
        }

        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.context.history.push("/user_schedule_display"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
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
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
            case 'email':
                this.state.emailTouch = true;
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid 
                    ? <p className="isValid">Sweet! Email Id is valid</p> 
                    : <p className="has-error">Please Enter a valid Email Id</p>;
                break;
            case 'password':
                this.state.passwordTouch = true;
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid 
                    ? <p className="isValid">Awesome! Password is valid</p>
                    : <p className="has-error">Please Enter a valid Password</p>;
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
        return(error.length === 0 ? 'is_valid' : 'has_error');
    }

    onSubmitForm(e){
        e.preventDefault();

        // if(this.state.formValid) {

            const employee = {
                email: this.state.email,
                password: this.state.password,
            }
            
            this.props.loginUser(employee);
        // }
    }

    render(){
        return(
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="email">Email address</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={'form-group ' + (this.errorClass(this.state.formErrors.email))} type="email" required className="form-control" name="email"
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
                                <input className={`form-group ${this.errorClass(this.state.formErrors.password)}`} type="password" className="form-control" name="password"
                                    placeholder="Please Enter Your Password"
                                    value={this.state.password}
                                    onChange={this.handleUserInput}  />
                                {this.state.formErrors.password}
                            </div>
                        </div>
                    </div> 
                    
                    <div className="col-md-12">
                        <Button className="btn pull-right" block 
                            type="submit" 
                            disabled={!this.state.formValid}
                            onClick={this.onSubmitForm}>Login</Button>
                    </div>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(LoginForm);



// ! For logout
// onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };

//   const { user } = this.props.auth;

//   Dashboard.propTypes = {
//     logoutUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
//   };
//   const mapStateToProps = state => ({
//     auth: state.auth
//   });
//   export default connect(
//     mapStateToProps,
//     { logoutUser }
//   )(Dashboard);