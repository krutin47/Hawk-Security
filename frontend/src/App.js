import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Availability_form from './components/Availability/availability_form';
import Admin_schedule_form from './components/Schedule/admin_schedule_form';
import Availability_display from './components/Availability/availability_display';
import Admin_schedule_display from './components/Schedule/admin_schedule_display';
import User_schedule_display from './components/Schedule/user_schedule_display';
import Login from './components/ProfileManagement/Login/login';
import Register from './components/ProfileManagement/Registration/register'
import User_update_profile from './components/ProfileManagement/Update/User_updateProfile';
import Admin_update_profile from './components/ProfileManagement/Update/Admin_updateProfile';
import Remove_profile from './components/ProfileManagement/Update/RemoveProfile';
import Forgot_password from './components/ProfileManagement/ForgotPassword/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

// job pages added
import Job_form from './components/Career/job_form'; 
import Job_display from './components/Career/job_display';


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
				<Route path='/job_form' component={Job_form} />
				<Route path='/job_display' component={Job_display} />
			</Router>
		);
	}
}

export default App;