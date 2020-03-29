import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

//import all your components
import NavHeader from './components/Navbar/NavHeader';
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home';

import Login from './components/ProfileManagement/Login/login';
import Register from './components/ProfileManagement/Registration/register'
import Forgot_password from './components/ProfileManagement/ForgotPassword/ForgotPassword';

import EmpDashboard from './components/EmployeeDashboard/EmpDashboard';
import User_schedule_display from './components/Schedule/user_schedule_display';
import User_update_profile from './components/ProfileManagement/Update/User_updateProfile';

import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import Admin_update_profile from './components/ProfileManagement/Update/Admin_updateProfile';
import Admin_schedule_form from './components/Schedule/admin_schedule_form';
import Admin_schedule_display from './components/Schedule/admin_schedule_display';

import Remove_profile from './components/ProfileManagement/Update/RemoveProfile';
import Forgot_password from './components/ProfileManagement/ForgotPassword/ForgotPassword';
import Add_location from './components/Location/Add_location';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './main.css'


// Check for token to keep user logged in
if (localStorage.jwtToken) {
	  
	// Set auth token header auth
  	const token = localStorage.jwtToken;
  	setAuthToken(token);
	  
	// Decode token and get user info and exp
  	const decoded = jwt_decode(token);
	  
	// Set user and isAuthenticated
  	store.dispatch(setCurrentUser(decoded));
	
	// Check for expired token
  	const currentTime = Date.now() / 1000; // to get in milliseconds
	  
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		
		// Redirect to login
		window.location.href = "./login";
  	}
}


class App extends Component{
    render() {
		return (
			<Router>
                <Route exact path='/' component={Home} />
				<Route path='/availability_form' component={Availability_form} />
				<Route path='/admin_schedule_display' component={Admin_schedule_display} />
				<Route path='/user_schedule_display' component={User_schedule_display} />
				<Route path='/availability_display' component={Availability_display}/>
				<Route path='/admin_schedule_form' component={Admin_schedule_form} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/User_update_profile' component={User_update_profile} />
				<Route path='/Admin_update_profile' component={Admin_update_profile} />
				<Route path='/Remove_profile' component={Remove_profile} />
				<Route path='/Forgot_password' component={Forgot_password} />
				<Route path='/Add_location' component={Add_location} />
			</Router>
		);
	}
}

export default App;