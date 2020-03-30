import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";

import './RemoveProfile.css';

class RemoveProfile extends Component {

  constructor (props) {
    super(props);
  }

  onClickYes(e) {
    e.preventDefault();
    this.props.removeUser(this.props.auth.user.id);
  }

  onClickNo(e) {
    e.preventDefault();
    this.props.history.pop();
  }
    
  render () {
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
                </form>
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