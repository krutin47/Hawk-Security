import React from 'react';
import '../../main.css';
import axios from 'axios'; 


class admin_schedule_form extends React.Component {
    constructor(props) {
        super(props);
    
        this.onChangeEmpID = this.onChangeEmpID.bind(this);
        this.onChangeEmpName = this.onChangeEmpName.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          EMP_ID: '',
          Name: '',
          StartscheduleDateTime: '',
          EndscheduleDateTime: '',
          location: '',
          emps: []
        }
      }      
    
      componentDidMount() {
        axios.get('http://localhost:5000/shift_upload/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                emps: response.data.map(emp => emp.Name),
                Name: response.data[0].Name
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

      onChangeEmpID(e) {
        this.setState({
            EMP_ID: e.target.value
        })
      }
    
      onChangeEmpName(e) {
        this.setState({
            Name: e.target.value
        })
      }
    
      onChangeStartDate(e) {
        this.setState({
            StartscheduleDateTime: e.target.value
        })
      }
    
      onChangeEndDate(e) {
        this.setState({
            EndscheduleDateTime: e.target.value
        })
      }
       
      onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    
        const shift_data = {
          ID: this.state.EMP_ID,
          Name: this.state.Name,          
          start: this.state.StartscheduleDateTime,
          end: this.state.EndscheduleDateTime,
          loc: this.state.location,
        }
    
        console.log(shift_data);
    
        axios.post('http://localhost:5000/shift_details/add', shift_data)
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
                                            value={this.state.Name}
                                            onChange={this.onChangeEmpName}>
                                            {
                                                this.state.emps.map(function(emp) {
                                                return <option 
                                                    key={emp}
                                                    value={emp}>{emp}
                                                    </option>;
                                                })
                                            }
                                        </select>
                                        {/* <select id="employeeName">
                                            <option hidden disabled selected value></option>
                                            <option value="XYZ">XYZ</option>
                                            <option value="ABC">ABC</option>
                                            <option value="PQR">PQR</option>
                                            <option value="AAA">AAA</option>
                                            <option value="XXX">XXX</option>
                                        </select> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="emId">Employee Id</label>
                                        <input type="text"
                                            disabled
                                            className="form-control"
                                            value={this.state.EMP_ID}
                                            onChange={this.onChangeDescription}>
                                        </input>
                                    </div>
                                </div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="efDate">Effective Date</label>
                                        <input type="text" name="efDate" id="efDate"></input>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="monday">Monday</label>
                                        <input type="text" name="monday" id="monday" placeholder="startTime"></input>
                                        <input type="text" name="monday" id="monday" placeholder="endTime"></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="location"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="tuesday">Tuesday</label>
                                        <input type="text" name="tuesday" id="tuesday" placeholder="startTime"></input>
                                        <input type="text" name="tuesday" id="tuesday" placeholder="endTime"></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="location"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="wednesday">Wednesday</label>
                                        <input type="text" name="wednesday" id="wednesday" placeholder="startTime"></input>
                                        <input type="text" name="wednesday" id="wednesday" placeholder="endTime"></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="location"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="thursday">Thursday</label>
                                        <input type="text" name="thursday" id="thursday" placeholder="startTime"></input>
                                        <input type="text" name="thursday" id="thursday" placeholder="endTime"></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="location"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="friday">Friday</label>
                                        <input type="text" name="friday" id="friday" placeholder="startTime"></input>
                                        <input type="text" name="friday" id="friday" placeholder="endTime"></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="location"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="saturday">Saturday</label>
                                        <input type="text" name="saturday" id="saturday" placeholder="startTime"></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="endTime"></input>
                                        <input type="text" name="saturday" id="saturday" placeholder="location"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="sunday">Sunday</label>
                                        <input type="text" name="sunday" id="sunday" placeholder="startTime"></input>
                                        <input type="text" name="sunday" id="sunday" placeholder="endTime"></input>
                                        <input type="text" name="sunday" id="sunday" placeholder="location"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center pt30">
                                <input type="submit" name="submit" value="submit"></input>
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