import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import 'C:/Users/owner/Desktop/WebProjectGit/hawk_security/frontend/src/App.css'

export default class user_schedule_view extends React.Component {

  render() {
    return (
        <div class="container">
            <FullCalendar  defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}/>
        </div>
      
    )
  }

 
}