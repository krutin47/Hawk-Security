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
            <div>
                {/* Navbar component */}
                {/* <NavHeader /> */}
                {/* Navbar component End */}

                {/* Body Div */}
                <Admin_schedule_display />
                {/* Body End */}

                {/* Footer */}
                {/* <Footer /> */}
                {/* Footer End */}
            </div>
        )
    }
}

export default AdminDashboard;
