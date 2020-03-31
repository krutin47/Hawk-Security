import React from 'react';
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Box } from '@material-ui/core';
import "./admin_schedule_theme.css"
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { Table } from 'reactstrap';
// import NavHeader from '../../Navbar/NavHeader';
 
import "react-datepicker/dist/react-datepicker.css";

const AvailDetails = props => (
  <tr class="row">
      <td class="col">{props.avail.Name}</td>
      <td class="col">{props.avail.StartscheduledDateTime}</td>
      <td class="col">{props.avail.EndscheduledDateTime}</td>
      <td class="col">{props.avail.location}</td>
  </tr>
)

class Admin_schedule_display extends React.Component {
 
  constructor(props) {
    super(props);

   
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
  
    this.state = {
      date: new Date(),
      shiftList: []
    }
  }      
  


  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
    
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.date);
    const date = new Date(this.state.date);
    const formattedDate = date.getFullYear() + '-' + (date.getUTCMonth()+1) + '-' +date.getDate();
    console.log(formattedDate);

    axios.get('http://localhost:5000/shift_details/' +  formattedDate)
      .then(res => {
          console.log(res.data[0].Name);

          let events = [];
        for (let index = 0; index < res.data.length; index++) {
          let schedule = {
            Name : res.data[index].Name,
            StartscheduledDateTime : (new Date(res.data[index].StartscheduledDateTime)).getUTCHours()
                                   + ':' + (new Date(res.data[index].StartscheduledDateTime)).getUTCMinutes()                                                               ,
            EndscheduledDateTime: (new Date(res.data[index].EndscheduledDateTime)).getUTCHours()
                                   + ':' + (new Date(res.data[index].EndscheduledDateTime)).getUTCMinutes(),
            location: res.data[index].location
          }
          events.push(schedule);
        }
          this.setState({ shiftList: events })
          // console.log(shiftList);
      });

  }

  tableData() {
    return this.state.shiftList.map(currentdata => {
      return <AvailDetails avail={currentdata}/>;
    })
  }

  render() {
    
    return (
        <React.Fragment>
          <div className="fullcalander__container">     
          
            <div class="container justify-content-md-center">
              <div class="row justify-content-md-center">
                <div class="select_date_div col-md-auto">
                  <p>Select Date</p>
                </div>
                  <div class="col-md-auto justify-content-md-center padding_div">
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                   
                    
                  </div>
                  <br/> <br/>
                  <div class="col col-lg-2">
                    <button class="btn btn-primary btn-block padding_button" onClick = {this.onSubmit}  >Get Schedule</button>
                  </div>
              </div>
            </div>
            <section class="sectionBox">
              
                <div class="text-center uppercase pb10">
                  <h5>Shifts Details of selected date</h5>
                </div>
              <div class="container">
                <Table striped>
                
                    <tr class="row text-left">
                        <th class="col">Name</th>
                        <th class="col" colspan="2">Start Time</th>
                        {/* <th class="col">MON_END</th> */}
                        <th class="col pl-5" colspan="2">End Time</th>
                        {/* <th class="col">TUE_END</th> */}
                        <th class="col pl-5" colspan="2">Location</th>
                        {/* <th class="col">WED_END</th> */}
                    </tr>
                  
                  <tbody>
                      { this.tableData() }
                  </tbody>
                </Table>
              </div>
            
        </section>
        </div>  
        </React.Fragment>
    );
  }
}

export default Admin_schedule_display;