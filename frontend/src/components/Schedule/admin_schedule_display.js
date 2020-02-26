import React from 'react';
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Box } from '@material-ui/core';
import "./admin_schedule_theme.css"
import { Link } from 'react-router-dom';
 
import "react-datepicker/dist/react-datepicker.css";

class Admin_schedule_display extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  // viewschedule() {
  //   alert('Hello!');
  //   if(this.datepicker.value === ''){
  //       // alert( "no date selected");
  //       this.isDateSelected = false;
  //     }else{
  //       // alert( "date selected");
  //       this.isDateSelected = true;
  //     }
  //     console.log(this.datepicker.value);
  // }

  render() {
    
    return (
        <React.Fragment>
          <div className="headerMain">
            <div className="wrapper clearfix">
                <div className="siteNavigation fr">
                    <Link to="/admin_schedule_form">UPLOAD SCHEDULE</Link>
                </div>
            </div>
          </div>
          <div className="headerMain">
            <div className="wrapper clearfix">
                <div className="siteNavigation fr">
                    <Link to="/Admin_update_profile">UPDATE PROFILE</Link>
                </div>
            </div>
          </div>
          <div className="headerMain">
            <div className="wrapper clearfix">
                <div className="siteNavigation fr">
                    <Link to="/Admin_update_profile">REMOVE PROFILE</Link>
                </div>
            </div>
          </div>
          <div className="headerMain">
            <div className="wrapper clearfix">
                <div className="siteNavigation fr">
                    <Link to="/availability_display">DISPLAY AVAILABILITY</Link>
                </div>
            </div>
          </div>
              
          
            <div class="container justify-content-md-center">
              <div class="row justify-content-md-center">
              <div class="select_date_div col-md-auto">
                  <p>Select Date</p>
                </div>
                <div class="col-md-auto justify-content-md-center padding_div">
                  <DatePicker
                    ref = "datepicker"
                    id = "datepicker"
                    selected={this.state.startDate}
                    onChange={this.handleChange}  
                         />
                </div>
                <br/> <br/>
                <div class="col col-lg-2">
                    <button class="btn btn-primary btn-block padding_button"  >Get Schedule</button>
                </div>
              </div>
            </div>
        </React.Fragment>
    );
  }
}

export default Admin_schedule_display;
