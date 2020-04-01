import React from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { Table } from 'reactstrap';

import "./admin_schedule_theme.css" 
import "react-datepicker/dist/react-datepicker.css";

const AvailDetails = props => (
  <tr className="row">
      <td className="col">{props.avail.Name}</td>
      <td className="col">{props.avail.StartscheduledDateTime}</td>
      <td className="col">{props.avail.EndscheduledDateTime}</td>
      <td className="col">{props.avail.location}</td>
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
    
    const date = new Date(this.state.date);
    const formattedDate = date.getFullYear() + '-' + (date.getUTCMonth()+1) + '-' +date.getDate();
   

    axios.get('http://localhost:5000/shift_details/' +  formattedDate)
      .then(res => {
          

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
          
            <div className="container justify-content-md-center">
              <div className="row justify-content-md-center">
                <div className="select_date_div col-md-auto">
                  <p>Select Date</p>
                </div>
                  <div className="col-md-auto justify-content-md-center padding_div">
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                   
                    
                  </div>
                  <br/> <br/>
                  <div className="col col-lg-2">
                    <button className="btn btn-primary btn-block padding_button" onClick = {this.onSubmit}  >Get Schedule</button>
                  </div>
              </div>
            </div>
            <section className="sectionBox__display">
              
                <div className="text-center uppercase pb10">
                  <h5>Shifts Details of selected date</h5>
                </div>
              <div className="container">
                <Table striped>
                
                    <tr className="row text-left">
                        <th className="col">Name</th>
                        <th className="col" colspan="2">Start Time</th>
                        {/* <th className="col">MON_END</th> */}
                        <th className="col pl-5" colspan="2">End Time</th>
                        {/* <th className="col">TUE_END</th> */}
                        <th className="col pl-5" colspan="2">Location</th>
                        {/* <th className="col">WED_END</th> */}
                    </tr>
                  
                    { this.tableData() }
                </Table>
              </div>
            
        </section>
        </div>  
        </React.Fragment>
    );
  }
}

export default Admin_schedule_display;
