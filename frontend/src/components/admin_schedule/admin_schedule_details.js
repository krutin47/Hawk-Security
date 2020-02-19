import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Admin_schedule_details extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  viewschedule() {
    alert('Hello!');
    if(this.datepicker.value === ''){
        // alert( "no date selected");
        this.isDateSelected = false;
      }else{
        // alert( "date selected");
        this.isDateSelected = true;
      }
      console.log(this.datepicker.value);
  }

  render() {
    
    return (
        <React.Fragment>
        <div>
            <p>Select Date</p>
        </div>
      <DatePicker
        ref = "datepicker"
        id = "datepicker"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      <div class="col-md-5">
              <button class="btn btn-md btn-success" onClick={this.viewschedule()} >Get Schedule</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin_schedule_details;