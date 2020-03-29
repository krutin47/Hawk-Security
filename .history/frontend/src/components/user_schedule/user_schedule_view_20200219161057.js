import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import 'App.css'

export default class user_schedule_view extends React.Component {

  render() {
    return (
        <div class="container">
            <FullCalendar  defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}/>
        </div>
      
    )
  }

 
}