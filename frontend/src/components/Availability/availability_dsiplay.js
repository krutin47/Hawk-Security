import React from 'react';
import { Table } from 'reactstrap';

function availability_display() {
    return (
        <React.Fragment>
            <section class="sectionBox">
                <div class="wrapper smallWrapper">
                    <div class="text-center uppercase pb40">
                        <h3>Employees' Availability</h3>
                    </div>
                        <Table striped >
                            <thead>
                                <tr class="row">
                                    <th class="col">#ID</th>
                                    <th class="col">Name</th>
                                    <th class="col">Monday</th>
                                    <th class="col">Tuesday</th>
                                    <th class="col">Wednesday</th>
                                    <th class="col">Thursday</th>
                                    <th class="col">Friday</th>
                                    <th class="col">Saturday</th>
                                    <th class="col">Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="row">
                                    <td class="col">1</td>
                                    <th class="col">Milap</th>
                                    <td class="col">12-17</td>
                                    <td class="col">15-23</td>
                                    <td class="col"></td>
                                    <td class="col">15-23</td>
                                    <td class="col">15-23</td>
                                    <td class="col"></td>
                                    <td class="col">9-15</td>
                                </tr>
                                <tr class="row">
                                <td class="col">2</td>
                                    <th class="col">Nikita</th>
                                    <td class="col">12-17</td>
                                    <td class="col">15-23</td>
                                    <td class="col">8-20</td>
                                    <td class="col"></td>
                                    <td class="col">15-23</td>
                                    <td class="col">11-23</td>
                                    <td class="col"></td>
                                </tr>
                                <tr class="row">
                                <td class="col">3</td>
                                    <th class="col">Yash</th>
                                    <td class="col">12-17</td>
                                    <td class="col">15-23</td>
                                    <td class="col">8-18</td>
                                    <td class="col"></td>
                                    <td class="col">15-23</td>
                                    <td class="col">9-18</td>
                                    <td class="col"></td>
                                </tr>
                                <tr class="row">
                                <td class="col">4</td>
                                    <th class="col">Krutin</th>
                                    <td class="col">12-17</td>
                                    <td class="col">15-23</td>
                                    <td class="col"></td>
                                    <td class="col">15-23</td>
                                    <td class="col">15-23</td>
                                    <td class="col"></td>
                                    <td class="col">9-15</td>
                                </tr>
                            </tbody>
                        </Table>
                </div>
            </section>
        </React.Fragment>
    )
}

export default availability_display
