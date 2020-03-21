import { Link } from 'react-router-dom';

class Nav_header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header>
                <div className="headerMain">
                    <div className="wrapper clearfix">
                        <div className="siteLogo fl">
                            <Link to="/"><img src={require('../../assets/images/Sitelogo.png')} alt=""/></Link>
                        </div>
                        <a className="expandMenu"><i></i><i></i><i></i></a>
                        <div className="siteNavigation fr">
                            <ul className="parent">
                                <li><Link to="/admin_schedule_display">ADMIN PROFILE</Link></li>
                                <li><Link to="/user_schedule_display">USER PROFILE</Link></li>
                                <li><Link to="/register">REGISTER</Link></li>
                                <li><Link to="/login">LOGIN</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}