import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import ListGrid from "react-listgrid";
import listWeekPlugin from '@fullcalendar/list';
import './user_schedule_display.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


export default class user_schedule_display extends React.Component {

  state = {
    calendarWeekends: true,
    calendarEvents: [ 
      // initial event data
      {title:'Shoppers, Sprig Garden Road', start: new Date('Feb 19, 2020 12:00:00') , end: new Date('Feb 19, 2020 16:00:00')},
      {title:'Shoppers, Sprig Garden Road', start: new Date('Feb 23, 2020 12:00:00') , end: new Date('Feb 23, 2020 16:00:00')},
      {title:'Wallmart, Sprig Garden Road', start: new Date('Feb 27, 2020 16:00:00') , end: new Date('Feb 27, 2020 22:00:00')}
    ]
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
            <FullCalendar  
              defaultView ="dayGridMonth" 
              header={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek, listWeek'
              }}
              // buttonText = "{listWeek: 'List Week'}"
              plugins = {[ dayGridPlugin,listWeekPlugin ]}
              events={ this.state.calendarEvents }
            />

            <Footer/>
        </div>
      </React.Fragment>
    )
  }
}
