import React, { Component } from 'react'
import Admin_schedule_display from '../Schedule/admin_schedule_display';

export class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div className= "fullscreen__container">
                {/* Body Div */}
                <Admin_schedule_display />
                {/* Body End */}
            </div>
        )
    }
}

export default AdminDashboard;
