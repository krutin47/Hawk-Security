import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import ListGrid from "react-listgrid";
import listWeekPlugin from '@fullcalendar/list';
import './user_schedule_display.css';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';


class user_schedule_display extends React.Component {

  calendarComponentRef = React.createRef();

  sampleData = {
    calendarWeekends: true,
    calendarEvents: [ 
      // initial event data
      {title:'Shoppers, Sprig Garden Road', start: new Date('Feb 19, 2020 12:00:00') , end: new Date('Feb 19, 2020 16:00:00')},
      {title:'Shoppers, Sprig Garden Road', start: new Date('Feb 23, 2020 12:00:00') , end: new Date('Feb 23, 2020 16:00:00')},
      {title:'Wallmart, Sprig Garden Road', start: new Date('Feb 27, 2020 16:00:00') , end: new Date('Feb 27, 2020 22:00:00')}
    ]
  };


  constructor (props) {
    super(props);
    this.state = {
      calendarEvents : []
    };
    
}

  
  componentDidMount() {
    const emp_id = this.props.auth.user.id;

    console.log(emp_id);

    axios.get('http://localhost:5000/shift_details/empshifts/' + emp_id)
      .then(res => {
        console.log(res.data);
        let events = [];
        for (let index = 0; index < res.data.length; index++) {
          let schedule = {
            title : res.data[index].location,
            start : new Date(res.data[index].StartscheduledDateTime),
            end: new Date(res.data[index].EndscheduledDateTime)
          }
          events.push(schedule);
        }
        this.setState({
          calendarEvents : events
        })
      });
  }

  

 
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };


  render() {

    console.log(this.props.auth.user.id);s

 console.log(this.state);
    return (
      <React.Fragment>
        <div className="fullcalander__container">
        <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek, listWeek'
            }}
            // buttonText = "{listWeek: 'List Week'}"
            plugins={[dayGridPlugin, listWeekPlugin]}
            events={this.state.calendarEvents}
            ref={this.calendarComponentRef}
            // weekends={this.state.calendarWeekends}
            // events={this.state.event}
            // eventClick={this.handleEventClick}
            nowIndicator='true'

          />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

user_schedule_display.propTypes = {

  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(user_schedule_display));