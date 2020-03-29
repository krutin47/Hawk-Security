import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './components/Home/Home';
import availability_form from './components/Availability/availability_form';
import admin_schedule_form from './components/Schedule/admin_schedule_form';
import availability_display from './components/Availability/availability_display';

class App extends Component{
    render() {
		return (
			<Router>
                <Route exact path='/' component={home} />
				<Route path='/availability_form' component={availability_form} />
				<Route path='/admin_schedule_form' component={admin_schedule_form} />
				<Route path='/availability_display' component={availability_display} />
				{/* <Route path='/availability' component={Availability_submit} /> */}
				{/* <Route path='/schedule_submit' component={Schedule_submit} /> */}
			</Router>
		);
	}
}

export default App;