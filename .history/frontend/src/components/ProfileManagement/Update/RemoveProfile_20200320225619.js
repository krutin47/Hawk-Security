import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Alert } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './RemoveProfile.css';

class RemoveProfile extends Component {

  constructor (props) {
    super(props);
  }
    
  render () {
    return (
      <div>
        
        {/* Header Section */}
        <Nav_Header/>
        {/* Hadder End */}

        {/* Body Section */}
        <div className="full_window">
          
          {/* Login Container */}
          <div className="forgot_container">
            
            {/* Imaage View */}
            <div className="image_view">
              <img src={require('../../../assets/images/forgotPassword_1.jpg')} alt=""/>
            </div>
            
            {/* Form Container */}
            <div className="form_container">
              
              {/* Register Text */}
              <div className="login_text">
                <b>Forgot Password</b>
              </div>
              
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
                          <br/>
                          <Button className="btn btn-success pull-right" block bsSize="large" type="submit" disabled={!this.state.formValid}>Yes</Button>
                          {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                        </div>
                        <div className="col">
                          <br/>
                          <Button className="btn btn-danger pull-right" block bsSize="large" type="button" disabled={!this.state.formValid}>No</Button>
                          {/* <button className="btn btn-success pull-right" type="submit" >Login</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Login Link */}
              <div className="register_navigation">
                <Link to="/login"><u>Remebered your Password? Login Here</u></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Body End */}

        {/* Footer Component */}
        <Footer/>
        {/* Footer Component End */}
      </div>
    )
  }
}

export default RemoveProfile;