import React, { Component } from 'react';
import axios from 'axios';
import '../../main.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

class availability_form extends React.Component{
    constructor(props) {
        super(props);
    
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
          first_name: '',
          last_name: '',
          id: '',
          date: '',
          start: [],
          end: []
        }
    }      

    componentDidMount() {

        const local_id = this.props.auth.user.id;
        console.log(local_id);
        
        axios.get('http://localhost:5000/availability_display/' + local_id)
          .then(response => {
            this.setState({
                first_name: response.data[0].firstName
            })
            this.setState({
                last_name: response.data[0].lastName
            })
            this.setState({
                id: response.data[0]._id
            })
          })
          .catch((error) => {
            console.log(error);
        })
    
        var today = new Date();
        var today_format = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        this.setState({
            date: today_format
        })
        console.log(this.state.first_name, this.state.last_name, this.state.emp_id);  
    }

    onChangeStartTime(e) {
        if (e.target.value.length === 5){
            let data = e.target.value;
            this.state.start.push(data);

            this.setState({
                start: this.state.start
            })
        }

        if (e.target.value === "-"){
            let data = "";
            this.state.start.push(data);

            this.setState({
                start: this.state.start
            })
        }
    }
    
    onChangeEndTime(e) {
        if (e.target.value.length === 5){
            let data = e.target.value;
            this.state.end.push(data);

            this.setState({
                end: this.state.end
            })
        }

        if (e.target.value === "-"){
            let data = "";
            this.state.end.push(data);

            this.setState({
                end: this.state.end
            })
        }
    }

    onSubmit(e) {
        e.preventDefault();
    
        const avail_data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            start: this.state.start,
            end: this.state.end,
            id: this.state.id,
        }
    
        console.log(avail_data);
    
        axios.post('http://localhost:5000/availability_display/add', avail_data)
            .then(res => console.log(res.data));
    
        // window.location = '/';
    }

    render(){
        return (
            <React.Fragment>
                <section class="pb70 sectionBox">
                    <div class="wrapper smallWrapper">
                        <div class="text-center uppercase">
                            <h3>Availablity</h3>
                        </div>
                        <div class="pt40">
                            <form>
                                <div>
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="firstname">First Name</label>
                                            <input type="text" name="firstname" id="firstname" disabled placeholder={this.state.first_name}></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="lastname">Last Name</label>
                                            <input type="text" name="lastname" id="lastname" disabled placeholder={this.state.last_name}></input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="emId">Employee Id</label>
                                            <input type="text" name="emId" disabled placeholder={this.state.id}></input>
                                        </div>
                                    </div> */}
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="efDate">Effective Date</label>
                                            <input type="text" name="efDate" id="efDate" disabled placeholder={this.state.date}></input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="monday">Monday</label>
                                            <input type="text" name="monday" id="monday" onChange={this.onChangeStartTime} placeholder="00:00"></input>
                                            <input type="text" name="monday" id="monday" onChange={this.onChangeEndTime} placeholder="00:00"></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="tuesday">Tuesday</label>
                                            <input type="text" name="tuesday" id="tuesday" onChange={this.onChangeStartTime} placeholder="00:00"></input>
                                            <input type="text" name="tuesday" id="tuesday" onChange={this.onChangeEndTime} placeholder="00:00"></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="wednesday">Wednesday</label>
                                            <input type="text" name="wednesday" id="wednesday" onChange={this.onChangeStartTime} placeholder="00:00"></input>
                                            <input type="text" name="wednesday" id="wednesday" onChange={this.onChangeEndTime} placeholder="00:00"></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="thursday">Thursday</label>
                                            <input type="text" name="thursday" id="thursday" onChange={this.onChangeStartTime} placeholder="00:00"></input>
                                            <input type="text" name="thursday" id="thursday" onChange={this.onChangeEndTime} placeholder="00:00"></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="friday">Friday</label>
                                            <input type="text" name="friday" id="friday" onChange={this.onChangeStartTime} placeholder="00:00"></input>
                                            <input type="text" name="friday" id="friday" onChange={this.onChangeEndTime} placeholder="00:00"></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="saturday">Saturday</label>
                                            <input type="text" name="saturday" id="saturday" onChange={this.onChangeStartTime} placeholder="00:00"></input>
                                            <input type="text" name="saturday" id="saturday" onChange={this.onChangeEndTime} placeholder="00:00"></input>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="sunday">Sunday</label>
                                            <input type="text" name="sunday" id="sunday" onChange={this.onChangeStartTime} placeholder="00:00"></input>
                                            <input type="text" name="sunday" id="sunday" onChange={this.onChangeEndTime} placeholder="00:00"></input>
                                        </div>
                                    </div>
                                    <p>Enter "-" if you are unavailable on a particular day.</p>
                                </div>
                                <div class="text-center pt30">
                                    <input type="submit" name="submit" value="submit" onClick={this.onSubmit}></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </React.Fragment>    
        )
    }
}
    

availability_form.propTypes = {

    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
export default connect(mapStateToProps)(withRouter(availability_form));


// export default availability_form