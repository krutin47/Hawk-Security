import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Availability_form from './components/Availability/availability_form';

class App extends Component{
    render() {
		return (
			<Router>
                <Route exact path='/' component={Home} />
				<Route path='/availability_form' component={Availability_form} />
				{/* <Route path='/availability' component={Availability_submit} /> */}
				{/* <Route path='/schedule_submit' component={Schedule_submit} /> */}
			</Router>
		);
	}
}

export default App;