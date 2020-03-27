import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import ListGrid from "react-listgrid";
import listWeekPlugin from '@fullcalendar/list';
import './user_schedule_display.css'
import { Link } from 'react-router-dom';


export default class user_schedule_display extends React.Component {

  state = {
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      {title:'Shoppers, Sprig Garden Road', start: new Date('Feb 19, 2020 12:00:00') , end: new Date('Feb 19, 2020 16:00:00')},
    {title:'Shoppers, Sprig Garden Road', start: new Date('Feb 23, 2020 12:00:00') , end: new Date('Feb 23, 2020 16:00:00')},
    {title:'Wallmart, Sprig Garden Road', start: new Date('Feb 27, 2020 16:00:00') , end: new Date('Feb 27, 2020 22:00:00')}
    ]
  }
  render() {
    return (
      <React.Fragment>
      <div className="headerMain">
      <div className="wrapper clearfix">
          <div className="siteNavigation fr">
              <Link to="/User_update_profile">UPDATE PROFILE</Link>
          </div>
      </div>
    </div>
    <div className="headerMain">
      <div className="wrapper clearfix">
          <div className="siteNavigation fr">
              <Link to="/Remove_profile">REMOVE PROFILE</Link>
          </div>
      </div>
    </div>
    <div className="headerMain">
      <div className="wrapper clearfix">
          <div className="siteNavigation fr">
              <Link to="/availability_form">AVAILABILITY FORM</Link>
          </div>
      </div>
    </div>
    

        <div class="container">
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
        </div>
        </React.Fragment>
    )
  }

 
}
