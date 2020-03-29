import React, { useState } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './logintheme.css';


export default function login(props) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
    function validateForm() {
      // return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div class="login-container jumbotron">
            <div class="row">
              <div class="col-md-12">
                <div class="form-label-group">
                  <FormGroup controlId="email_id" bsSize="large">
                    
                    <ControlLabel>Email</ControlLabel>  
                    <FormControl
                      autoFocus
                      type="email"
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
                      placeholder="Please Enter Your Email ID"
                    />
                    
                    {/* <label>Email</label>
                    <input type="emailID" formControlName="emailID" class="form-control" required autofocus />  
                    <span class="invalid-feedback" > Invalid Email </span> */}
                  
                  </FormGroup>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-label-group">
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      // value={password}
                      // onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="Please Enter Your Password"
                    />
                  </FormGroup>
                  {/* <label>Password</label>
                  <input type="password" formControlName="password" class="form-control"  required autofocus />
                  <span class="invalid-feedback"> Invalid Password </span> */}
                </div>
              </div>
              
              <div class="col-md-12">
                <br/>
                <Button class="btn btn-success pull-right" block bsSize="large" disabled={!validateForm()} type="submit">Login </Button>
                  {/* <button class="btn btn-success pull-right" type="submit" >Login</button> */}
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div>
                  <br/>
                  <div  class="alert alert-success">Login Successful!</div>
                </div>
                <div>
                  <br/>
                  <div  class="alert alert-danger">Wrong credentials!</div>
              </div>
            </div>
          </div>
          </div>
        </form>
      </div>
    )
}
