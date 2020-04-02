import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '../../main.css';
import "react-datepicker/dist/react-datepicker.css";


class admin_schedule_form extends React.Component {
    constructor(props) {
        super(props);
    
        this.onChangeEmpName = this.onChangeEmpName.bind(this);
        this.onChangeEmpID = this.onChangeEmpID.bind(this);
        this.onChangeEffective = this.onChangeEffective.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        
        this.state = {
          emp_name: '',
          emp_id: '',
          effective: '',
          start: [],
          end: [],
          location: [],
          loc_option: [],
          emp_list: [],
          loc_list: [],
          date : ""
        }
      }      
    
    componentDidMount() {
        axios.get('http://localhost:5000/shift_upload/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                emp_list: response.data.map(emp => ((emp.firstName) + ' ' + (emp.lastName))),
                emp_name: response.data[0].Name
              })
            }
          })
          .catch((error) => {
            console.log(error);
        })
    
        axios.get('http://localhost:5000/location/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                loc_list: response.data.map(loc => loc.Name),
                loc_option: response.data[0].Name
              })
            }
          })
          .catch((error) => {
            console.log(error);
        })  
    }

    onChangeDate(date) {
        this.setState({
          date: date
        })
    }
    
    isMonday(date){
        const day = new Date(date).getDay();
        return day == 1;
    }

    onChangeEmpName(e) {
        
        axios.get('http://localhost:5000/shift_upload/' + e.target.value)
          .then(res => {
            console.log(res.data[0]._id);  
            this.setState({
                emp_id: res.data[0]._id
            });
            this.onChangeEmpID(res.data[0]._id);
        });

        this.setState({
            emp_name: e.target.value
        })
    }
    
    onChangeEmpID(id) {
        this.setState({
            emp_id: id
        })
    }
    
    onChangeEffective(e) {
        this.setState({
            effective: e.target.value
        })
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
            let data = -1;
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
            let data = -1;
            this.state.end.push(data);

            this.setState({
                end: this.state.end
            })
        }
    }
       
    onChangeLocation(e) {
        // let data = e.target.value;
        // this.state.location.push(data);

        // this.setState({
        //     location: this.state.location
        // })
        let data = e.target.value;
        this.state.location.push(data);

        this.setState({
            location: this.state.location
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const date = new Date(this.state.date);
        // const formattedDate = date.getFullYear() + '-' + (date.getUTCMonth()+1) + '-' +date.getDate();
        // console.log(formattedDate);

        const shift_data = {
            emp_name: this.state.emp_name,
            emp_id: this.state.emp_id,
            start: this.state.start,
            end: this.state.end,
            location: this.state.location,
            date: date
        }
    
        console.log(shift_data);
    
        axios.post('http://localhost:5000/shift_upload/add', shift_data)
          .then(res => console.log(res.data));
    
       // window.location = '/';
    }
  
    render(){
        return (
            <React.Fragment>
                <section class="pb50 sectionBox">
                    <div class="wrapper smallWrapper">
                        <div class="text-center uppercase">
                            <h3>Upload a Schedule</h3>
                        </div>
                        <div class="pt40">
                            <form>
                                <div>
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="employeeName">Employee Name <sup>*</sup></label>
                                            <select ref="userInput"
                                                required
                                                className="form-control"
                                                value={this.state.emp_name}
                                                onChange={this.onChangeEmpName}>
                                                {
                                                    this.state.emp_list.map(function(emp) {
                                                    return <option 
                                                        key={emp}
                                                        value={emp}>{emp}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                            </div>
                                    </div>
                                </div>
                                <div>
                                    {/* <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label for="emId">Employee Id</label>
                                            <input type="text" disabled placeholder={this.state.emp_id}>
                                            </input>
                                        </div>
                                    </div> */}
                                    <div class="ib vt w50 mw100">
                                        <div class="field">
                                            <label>Effective Date</label>
                                            <DatePicker selected={this.state.date} onChange={this.onChangeDate} 
                                            filterDate={date => this.isMonday(date)} placeholderText="Select Effective Day" required/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="monday">Monday</label>
                                            <input type="text" name="monday" id="monday" placeholder="00:00" onChange={this.onChangeStartTime} required></input>
                                            <input type="text" name="monday" id="monday" placeholder="00:00" onChange={this.onChangeEndTime} required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>    
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="tuesday">Tuesday</label>
                                            <input type="text" name="tuesday" id="tuesday" placeholder="00:00" onChange={this.onChangeStartTime} required></input>
                                            <input type="text" name="tuesday" id="tuesday" placeholder="00:00" onChange={this.onChangeEndTime} required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="wednesday">Wednesday</label>
                                            <input type="text" name="wednesday" id="wednesday" placeholder="00:00" onChange={this.onChangeStartTime} required></input>
                                            <input type="text" name="wednesday" id="wednesday" placeholder="00:00" onChange={this.onChangeEndTime} required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="thursday">Thursday</label>
                                            <input type="text" name="thursday" id="thursday" placeholder="00:00" onChange={this.onChangeStartTime} required></input>
                                            <input type="text" name="thursday" id="thursday" placeholder="00:00" onChange={this.onChangeEndTime} required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="friday">Friday</label>
                                            <input type="text" name="friday" id="friday" placeholder="00:00" onChange={this.onChangeStartTime} required></input>
                                            <input type="text" name="friday" id="friday" placeholder="00:00" onChange={this.onChangeEndTime} required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="saturday">Saturday</label>
                                            <input type="text" name="saturday" id="saturday" placeholder="00:00" onChange={this.onChangeStartTime} required></input>
                                            <input type="text" name="saturday" id="saturday" placeholder="00:00" onChange={this.onChangeEndTime} required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib vt w14 tabw25 mw100">
                                        <div class="field">
                                            <label for="sunday">Sunday</label>
                                            <input type="text" name="sunday" id="sunday" placeholder="00:00" onChange={this.onChangeStartTime} required></input>
                                            <input type="text" name="sunday" id="sunday" placeholder="00:00" onChange={this.onChangeEndTime} required></input>
                                            <select
                                                required
                                                className="form-control"
                                                // value={this.state.loc_option}
                                                onChange={this.onChangeLocation}>
                                                {
                                                    this.state.loc_list.map(function(loc) {
                                                    return <option 
                                                        key={loc}
                                                        value={loc}>{loc}
                                                        </option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <p>Enter "-" if there are no shift on a particular day.</p>
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

export default admin_schedule_form