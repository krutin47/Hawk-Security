import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeUser } from "../../../actions/authActions";

import 'bootstrap/dist/css/bootstrap.min.css';
import './RemoveProfile.css';

class RemoveProfile extends Component {

  constructor (props) {
    super(props);
    this.state = {
      auth: {},
      errors: {}
    }

    this.onClickYes = this.onClickYes.bind(this);
    this.onClickNo = this.onClickNo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidMount(){
    this.setState({
      auth: this.props.auth,
      errors: this.props.errors
    })
  }

  onClickYes(e) {
    e.preventDefault();
    this.props.removeUser(this.props.auth.user.id);
  }

  onClickNo(e) {
    e.preventDefault();
    this.props.history.goBack();
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
    console.log(this.props);
    return (
      <div>
        {/* Body Section */}
        <div className="full_window">
          
          {/* Login Container */}
          <div className="forgot_container">
            
            {/* Imaage View */}
            <div className="image_view_1">
              <img src={require('../../../assets/images/removeProfile.jpg')} alt=""/>
            </div>
            
            {/* Form Container */}
            <div className="remove-profile-form__container">
              
              {/* Register Form Component */}
              <div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                        <p>Are you sure you want to remove this profile?</p>                
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <Button className="btn btn-success pull-right" block 
                            bsSize="large" 
                            type="submit" 
                            onClick= {this.onClickYes}>Yes</Button>
                        </div>
                        <div className="col">
                          <Button className="btn btn-danger pull-right" block 
                            bsSize="large" 
                            type="button" 
                            onClick= {this.onClickNo}>No</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                      <br/>
                      <Button className="btn btn-danger pull-right" block bsSize="large" type="button" disabled={!this.state.formValid}>No</Button>
                      {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                  </div>
                </form>
                </div>
                
                </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div>
                  <br/>
                  <div className="alert alert-success display_none">Register Successful!</div>
                </div>
                <div>
                  <br/>
                  <div  className="alert alert-danger display_none">Wrong input field!</div>
              </div>
            </div>
          </div>
        </div>
        {/* Body End */}

      
      </div>
    )
  }
}

RemoveProfile.propTypes = {
  removeUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { removeUser })(withRouter(RemoveProfile));