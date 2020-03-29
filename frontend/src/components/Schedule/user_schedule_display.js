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


  // state = {
  //   modal: false,
  //   calendarWeekends: true,
  //   event: [],

  // };

  constructor(props) {
    super(props)
    this.state = {
      cal_events: [],
    }
  }

  componentDidMount() {

    const emp_id = this.props.auth.user.id;
     let  calendarEvents = [];
    console.log(emp_id);
    let shift = {title : "test" ,
    start: new Date( 'Feb 19, 2020 12:00:00') , end: new Date('Feb 19, 2020 12:00:00')};

    this.state.cal_events.push(shift);

    axios.get('http://localhost:5000/shift_details/empshifts/' + emp_id)
      .then(res => {

        let shifts = res.data;
        let cal_temp;
        this.setState({ event: res.data });
        this.setState({ shifts: res.data });
       // for (let index = 0; index < shifts.length; index++) {
        //  let shift = {title : "test" ,
        //                start: new Date( 'Feb 19, 2020 12:00:00') , end: new Date('Feb 19, 2020 12:00:00')};
                  
        //                this.state.cal_events.push(shift);
     //   }
       
        //{title:'Shoppers, Sprig Garden Road', start: new Date('Feb 19, 2020 12:00:00') , end: new Date('Feb 19, 2020 16:00:00')},
        // for (let i = 0; i < shifts.length; i++) {
        //   cal_temp[i].start =    shifts[i].StartscheduledDateTime;
        //   cal_temp[i].end =    shifts[i].EndscheduledDateTime;
        //   cal_temp[i].title = shifts[i].location;

        // }
        // this.setState({
        //   cal_events:cal_temp
        // })


      })
      .catch(function (error) {
        console.log(error);
      })

  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };


  render() {

    console.log(this.props.auth.user.id);

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
            events={ this.state.cal_events }
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