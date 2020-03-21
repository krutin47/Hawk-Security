import React from 'react';
import '../../main.css'

function admin_schedule_form() {
    return (
        <React.Fragment>
            <section class="pb50 sectionBox">
                <div class="wrapper smallWrapper">
                    <div class="text-center uppercase">
                        <h3>Schedule</h3>
                    </div>
                    <div class="pt40">
                        <form>
                            <div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="employeeName">Employee Name <sup>*</sup></label>
                                        <select id="employeeName">
                                            <option hidden disabled selected value></option>
                                            <option value="XYZ">XYZ</option>
                                            <option value="ABC">ABC</option>
                                            <option value="PQR">PQR</option>
                                            <option value="AAA">AAA</option>
                                            <option value="XXX">XXX</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="emId">Employee Id</label>
                                        <input type="text" name="emId" id="emId"></input>
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

export default admin_schedule_form