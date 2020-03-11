import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin_schedule_details from './components/admin_schedule/admin_schedule_details';
import User_schedule_view from './components/user_schedule/user_schedule_view';
import Login from './components/Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render() {
    return (
      <Router>
                {/* <Route exact path='/' component={Home} /> */}
        
        <Route path='/admin_schedule_details' component={Admin_schedule_details} />
        <Route path='/user_schedule_view' component={User_schedule_view} />
        <Route path='/login' component={Login} />
      
      </Router>
    );
  }
}

export default App;