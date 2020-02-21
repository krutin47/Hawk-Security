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
                        <Table striped>
                            <thead>
                                <tr class="row">
                                    <th class="col">#ID</th>
                                    <th class="col">First Name</th>
                                    <th class="col">Last Name</th>
                                    <th class="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="row">
                                    <td class="col">1</td>
                                    <td class="col">Milap</td>
                                    <td class="col">Bhandari</td>
                                    <td class="col">@mila</td>
                                </tr>
                                <tr class="row">
                                    <td class="col">2</td>
                                    <td class="col">Nikita</td>
                                    <td class="col">Patel</td>
                                    <td class="col">@niki</td>
                                </tr>
                                <tr class="row">
                                    <td class="col">3</td>
                                    <td class="col">Yash</td>
                                    <td class="col">Shah</td>
                                    <td class="col">@yas</td>
                                </tr>
                                <tr class="row">
                                    <td class="col">4</td>
                                    <td class="col">Krutin</td>
                                    <td class="col">Trivedi</td>
                                    <td class="col">@krut</td>
                                </tr>
                            </tbody>
                        </Table>
                </div>
            </section>
        </React.Fragment>
    )
}

export default availability_display
