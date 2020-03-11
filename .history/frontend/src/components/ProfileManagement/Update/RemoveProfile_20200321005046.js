import React, { Component, ReactSVG } from 'react';
import { Button, FormGroup, FormControl, Form, Alert } from "react-bootstrap";
import Nav_Header from '../../Home/Nav_Header';
import Footer from '../../Home/Footer';
import { Link } from 'react-router-dom';

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
                          <Button className="btn btn-success pull-right" block bsSize="large" type="submit" >Yes</Button>
                        </div>
                        <div className="col">
                          <Button className="btn btn-danger pull-right" block bsSize="large" type="button" >No</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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