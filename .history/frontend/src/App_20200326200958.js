import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./store";

//import all your components
import NavHeader from './components/Navbar';
import Footer from './components/Footer'

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

import Availability_form from './components/Availability/availability_form';
import Availability_display from './components/Availability/availability_display';


//import CSS that you want Globally in your App and it's child components.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component{
    render() {
		return (
			<Provider store={store}>
				<Router>
					{/* This will load the Navbar to all the Components */}
					<NavHeader />
					
					{/* creating Toasts in the Application */}
					<ToastContainer />
					
					{/* Home Component */}
					<Route exact path='/' component={Home} />
					
					{/* Authentication Components */}
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/Forgot_password' component={Forgot_password} />
					
					{/* Employee Dashboard Component */}
					<Route path='/employee_dashboard' component={EmpDashboard} />
					<Route path='/user_schedule_display' component={User_schedule_display} />
					<Route path='/User_update_profile' component={User_update_profile} />
					
					{/* Admin Dashboard Components */}
					<Route path='/admin_dashboard' component={AdminDashboard} />
					<Route path='/admin_schedule_display' component={Admin_schedule_display} />
					<Route path='/admin_schedule_form' component={Admin_schedule_form} />
					<Route path='/Admin_update_profile' component={Admin_update_profile} />
					
					{/* This will be common Component for Admin and Employee */}
					<Route path='/Remove_profile' component={Remove_profile} />
					
					{/* I don't have Knowledge regurding this thus in last(Misc) */}
					<Route path='/availability_form' component={Availability_form} />
					<Route path='/availability_display' component={Availability_display}/>
					
					{/* This will load the Footer To all Components*/}
					<Footer />
				</Router>
			</Provider>
		);
	}
}

export default App;