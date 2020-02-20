import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin_schedule_display from './components/Schedule/admin_schedule_display';
import User_schedule_display from './components/Schedule/user_schedule_display';
import Login from './components/Profile Management/Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    render() {
		return (
			<Router>
                <Route exact path='/' component={Home} />
				
				<Route path='/admin_schedule_display' component={Admin_schedule_display} />
				<Route path='/user_schedule_display' component={User_schedule_display} />
				<Route path='/login' component={Login} />
			
			</Router>
		);
	}
}

export default App;