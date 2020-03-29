import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin_schedule_details from './components/admin_schedule/admin_schedule_details';
import User_schedule_view from './components/user_schedule/user_schedule_view';
import Login from './components/Profile Management/Login/login';
import Register from './components/Profile Management/Register/Register'
import ForgotPassword from './components/Profile Management/Forgot Password/ForgotPassword'
import UserUpdateProfile from './components/Profile Management/Update Profile/User_updateProfile'
import AdminUpdateProfile from './components/Profile Management/Update Profile/Admin_updateProfile'
import RemoveProfile from './components/Profile Management/Remove Profile/RemoveProfile'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render() {
    return (
      <Router>
                {/* <Route exact path='/' component={Home} /> */}
        
        <Route path='/admin_schedule_details' component={Admin_schedule_details} />
        <Route path='/user_schedule_view' component={User_schedule_view} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot_password' component={ForgotPassword} />
        <Route path='/user_update_profile' component={UserUpdateProfile} />
        <Route path='/admin_update_profile' component={AdminUpdateProfile} />
        <Route path='/remove_profile' component={RemoveProfile} />
      
      </Router>
    );
  }
}

export default App;