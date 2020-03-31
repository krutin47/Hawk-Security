import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const AvailDetails = props => (
    <tr className="row">
        <td className="col">{props.avail.EMP_ID}</td>
        <td className="col">{props.avail.MON_START}</td>
        <td className="col">{props.avail.MON_END}</td>
        <td className="col">{props.avail.TUE_START}</td>
        <td className="col">{props.avail.TUE_END}</td>
        <td className="col">{props.avail.WED_START}</td>
        <td className="col">{props.avail.WED_END}</td>
        <td className="col">{props.avail.THURS_START}</td>
        <td className="col">{props.avail.THURS_END}</td>
        <td className="col">{props.avail.FRI_START}</td>
        <td className="col">{props.avail.FRI_END}</td>
        <td className="col">{props.avail.SAT_START}</td>
        <td className="col">{props.avail.SAT_END}</td>
        <td className="col">{props.avail.SUN_START}</td>
        <td className="col">{props.avail.SUN_END}</td>
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
                <section className="sectionBox">
                    <div className="wrapper smallWrapper">
                        <div className="text-center uppercase pb40">
                            <h3>Employees' Availability</h3>
                        </div>
                        <div className="container">
                            <Table striped>
                                <thead>
                                    <tr className="row text-left">
                                        <th className="col">Name</th>
                                        <th className="col" colspan="2">MON</th>
                                        {/* <th className="col">MON_END</th> */}
                                        <th className="col pl-5" colspan="2">TUE</th>
                                        {/* <th className="col">TUE_END</th> */}
                                        <th className="col pl-5" colspan="2">WED</th>
                                        {/* <th className="col">WED_END</th> */}
                                        <th className="col pl-5" colspan="2">THURS</th>
                                        {/* <th className="col">THURS_END</th> */}
                                        <th className="col pl-5" colspan="2">FRI</th>
                                        {/* <th className="col">FRI_END</th> */}
                                        <th className="col pl-5" colspan="2">SAT</th>
                                        {/* <th className="col">SAT_END</th> */}
                                        <th className="col pl-5" colspan="2">SUN</th>
                                        {/* <th className="col">SUN_END</th> */}
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