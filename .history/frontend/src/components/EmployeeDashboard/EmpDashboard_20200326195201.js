import React, { Component } from 'react'
import NavHeader from '../Navbar/NavHeader';
import Footer from '../Footer/Footer';
import UserScheduleDisplay from '../Schedule/user_schedule_display';

export class EmpDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                {/* Navbar component */}
                <NavHeader />
                {/* Navbar component End */}

                {/* Body Div */}
                <UserScheduleDisplay />
                {/* Body End */}

                {/* Footer */}
                <Footer />
                {/* Footer End */}
            </div>
        )
    }
}

export default EmpDashboard
