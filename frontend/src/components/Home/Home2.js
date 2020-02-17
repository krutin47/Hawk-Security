import React from 'react'
import './styles.scss'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    headerMain: {
      backgroundColor: '#084e96',
      textColor: '#ffffff'
    },
  
    paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dddddd',
      boxShadow: "2px 2px 6px 0 rgba(0,0,0,0.2)",
      transition: "0.4s",
      "&:hover":{
        boxShadow: "22px 30px 60px 0 rgba(0,0,0,0.2)",
      }
    },   
}));

function Home2() {
    const classes = styles();

    return (
        <div>
            <header className = "text-white">
                <div className = {classes.headerMain}>
                    <div className="wrapper clearfix">
                        <div className="siteLogo fl">
                            <img src="./../../assets/images/Sitelogo1.png" alt=""/>
                        </div>
                        <a className="expandMenu"><i></i><i></i><i></i></a>
                        <div className="siteNavigation fr">
                            <ul className="parent">
                                <li>PROFILE</li>
                                <li>AVAILABLITY</li>
                                <li>PAYSTUB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home2;