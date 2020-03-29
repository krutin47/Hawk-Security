import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const AvailDetails = props => (
    <tr class="row">
        <td class="col">{props.avail.EMP_ID}</td>
        <td class="col">{props.avail.MON_START}</td>
        <td class="col">{props.avail.MON_END}</td>
        <td class="col">{props.avail.TUE_START}</td>
        <td class="col">{props.avail.TUE_END}</td>
        <td class="col">{props.avail.WED_START}</td>
        <td class="col">{props.avail.WED_END}</td>
        <td class="col">{props.avail.THURS_START}</td>
        <td class="col">{props.avail.THURS_END}</td>
        <td class="col">{props.avail.FRI_START}</td>
        <td class="col">{props.avail.FRI_END}</td>
        <td class="col">{props.avail.SAT_START}</td>
        <td class="col">{props.avail.SAT_END}</td>
        <td class="col">{props.avail.SUN_START}</td>
        <td class="col">{props.avail.SUN_END}</td>
    </tr>
  )
  
class availability_display extends Component {
    constructor(props) {
      super(props);

      this.state = {availList: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/availability_display')
        .then(response => {
          this.setState({ availList: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
    tableData() {
      return this.state.availList.map(currentdata => {
        return <AvailDetails avail={currentdata}/>;
      })
    }
  
    render(){
        return (
            <React.Fragment>
                <section class="sectionBox">
                    <div class="wrapper smallWrapper">
                        <div class="text-center uppercase pb40">
                            <h3>Employees' Availability</h3>
                        </div>
                        <div class="container">
                            <Table striped>
                                <thead>
                                    <tr class="row text-left">
                                        <th class="col">Name</th>
                                        <th class="col" colspan="2">MON</th>
                                        {/* <th class="col">MON_END</th> */}
                                        <th class="col pl-5" colspan="2">TUE</th>
                                        {/* <th class="col">TUE_END</th> */}
                                        <th class="col pl-5" colspan="2">WED</th>
                                        {/* <th class="col">WED_END</th> */}
                                        <th class="col pl-5" colspan="2">THURS</th>
                                        {/* <th class="col">THURS_END</th> */}
                                        <th class="col pl-5" colspan="2">FRI</th>
                                        {/* <th class="col">FRI_END</th> */}
                                        <th class="col pl-5" colspan="2">SAT</th>
                                        {/* <th class="col">SAT_END</th> */}
                                        <th class="col pl-5" colspan="2">SUN</th>
                                        {/* <th class="col">SUN_END</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.tableData() }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default availability_display;