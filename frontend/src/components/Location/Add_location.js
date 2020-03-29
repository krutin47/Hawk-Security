import React from 'react';
import '../../main.css';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

class Location_add extends React.Component {
    constructor(props) {
        super(props);
    
        this.onChangeLocationId = this.onChangeLocationId.bind(this);
        this.onChangeLocationName = this.onChangeLocationName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          locationid: '',
          name: '',
          address: '',
          
        }
      }      
    
      onChangeLocationId(e) {
        this.setState({
            locationid: e.target.value
        })
      }
    
      onChangeLocationName(e) {
        this.setState({
            name: e.target.value
        })
      }
    
      onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
      }
    
        
      onSubmit(e) {
        e.preventDefault();
    
        const location = {
          Location_ID: this.state.locationid,
          Name: this.state.name,          
          Address: this.state.address          
        }
    
        console.log(location);
    
        axios.post('http://localhost:5000/location/add', location)
          .then(res => console.log(res.data));
    
       // window.location = '/';
      }
    
    render() {
    
    return (
        <React.Fragment>


<header class="altBg">
    <div class="headerMain">
        <div class="wrapper clearfix">
            <div class="siteLogo fl">
                <a href="home.html"><img src="./images/Sitelogo.png" alt=""/></a>
            </div>
            <a class="expandMenu"><i></i><i></i><i></i></a>
           <div class="siteNavigation fr">
                <ul class="parent">
                    <li><a href="profile.html">PROFILE</a></li>
                    <li><a href="availablity.html">SHIFT SCHEDULES</a></li>
                    <li><a href="paystub.html">PAYSTUB</a></li>
                    <li><a href="jobs.html">JOB POSTING</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>

{/* JOB Form */}

<section class="pb70 sectionBox">
    <div class="wrapper smallWrapper">
            <div class="text-center uppercase">
                <h3>ADD SHIFT LOCATION</h3>
            </div> 
            <div class="pt40">
                <form>
                    <div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                    <label for="locationid">LOCATION ID</label>
                                    {/* <input type="text" name="locationid" id="locationid" placeholder="Enter Location ID here" required/> */}
                                    <input  type="text"
                                        required
                                        placeholder="Enter Location ID here"
                                        value={this.state.locationid}
                                        onChange={this.onChangeLocationId}
                                    />
                             </div>   
                        </div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                <label for="locationname">LOCATION NAME</label>
                                {/* <input type="text" name="locationname" id="locationname" placeholder="Enter Location Name here" required/> */}
                                <input  type="text"
                                        required
                                        placeholder="Enter Location Name here"
                                        value={this.state.name}
                                        onChange={this.onChangeLocationName}
                                    />
                             </div>   
                        </div>
                    </div>
                    <div>
                        <div class="ib vt w50 mw100">
                             <div class="field">
                                <label for="emId">LOCATION ADDRESS</label>
                                <textarea name="message" rows="10" cols="20"                                
                                required
                                
                                value={this.state.address}
                                onChange={this.onChangeAddress}>Provide Job Description.</textarea>
                                
                                </div>
                             </div>   
                        </div>
            
                    
                    <div class="text-center pt30">
                        <input type="submit" name="submit" value="submit" onClick = {this.onSubmit}/>
                    </div>
                </form> 
            </div>
    </div>
</section>





{/* <!--footer Section--> */}
<footer class="footerSection">
    <div class="footerTop p70-0 ">
        <div class="wrapper">
            <div class="clearfix noListStyle fortopInner">
                    <div class="footerNav ib w25  vt pr15 tabw50 xmw100 xmr0">
                        <h6 class="titleHeight">Quick Links</h6>
                        <ul>
                            <li><a href="javascript:void(0)">Equipment</a></li>
                            <li><a href="javascript:void(0)">Service &amp; Support</a></li>
                            <li><a href="javascript:void(0)">Company</a></li>
                            <li><a href="javascript:void(0)">Blog</a></li>
                            <li><a href="javascript:void(0)">Pricing</a></li>
                            <li><a href="javascript:void(0)">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footerNav ib w25 vt pr15 tabw50 xmw100 xmr0">
                        <h6 class="titleHeight">Extra</h6>
                        <ul>
                            <li><a href="javascript:void(0)">Schedule a Call</a></li>
                            <li><a href="javascript:void(0)">Terms of Service</a></li>
                            <li><a href="javascript:void(0)">Security</a></li>
                            <li><a href="javascript:void(0)">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="footerNav ib w25 vt pr15 withSocial tabw50 xmw100 xmr0">
                        <h6 class="titleHeight">Connect with us</h6>
                        <ul>
                            <li><a href="javascript:void(0)"><i class="fa fa-google-plus"></i>Google</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i>Twitter</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i>Facebook</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-linkedin"></i>Linkdin</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-pinterest"></i>Pintrest</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-instagram"></i>instagram</a></li>
                        </ul>
                    </div>
                
            </div>
        </div>

    </div>
    <div class="footerBottom p20-0 text-center">
        <div class="wrapper">
            <p>Hawk Security @2020.All rights has been reserved</p>
        </div>
    </div>
            </footer>
        </React.Fragment>    
    
    )
    }
}

export default Location_add