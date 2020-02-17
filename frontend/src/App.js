import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Availability from './components/Availability/Availability'

class App extends Component{
    render() {
		return (
			<Router>
                <Route exact path='/' component={Home} />
				<Route path='/register' component={Register} />
				<Route path='/availability' component={Availability} />
			</Router>
		);
	}
}

export default App;