import React, { Component } from 'react';
import { FormErrors } from './FormError';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        {/* <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button> */}
                        <Button className="btn pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Login </Button>
                        {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                    </div>
                    
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </form>
        );
    }
}

export default LoginForm;