import React from 'react';
import '../../main.css'

function Admin_schedule_form() {
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
                                        <label for="firstname">First Name <sup>*</sup></label>
                                        <input type="text" name="firstname" id="firstname" required></input>
                                    </div>
                                </div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="lastname">Last Name <sup>*</sup></label>
                                        <input type="text" name="lastname" id="lastname" required></input>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="emId">Employee Id <sup>*</sup></label>
                                        <input type="text" name="emId" id="emId" required></input>
                                    </div>
                                </div>
                                <div class="ib vt w50 mw100">
                                    <div class="field">
                                        <label for="efDate">Effective Date *</label>
                                        <input type="text" name="efDate" id="efDate" required></input>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="monday">Monday</label>
                                        <input type="text" name="monday" id="monday"></input>
                                        <input type="text" name="monday" id="monday"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="tuesday">Tuesday</label>
                                        <input type="text" name="tuesday" id="tuesday"></input>
                                        <input type="text" name="tuesday" id="tuesday"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="wednesday">Wednesday</label>
                                        <input type="text" name="wednesday" id="wednesday"></input>
                                        <input type="text" name="wednesday" id="wednesday"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="thursday">Thursday</label>
                                        <input type="text" name="thursday" id="thursday"></input>
                                        <input type="text" name="thursday" id="thursday"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="friday">Friday</label>
                                        <input type="text" name="friday" id="friday"></input>
                                        <input type="text" name="friday" id="friday"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="saturday">Saturday</label>
                                        <input type="text" name="saturday" id="saturday"></input>
                                        <input type="text" name="saturday" id="saturday"></input>
                                    </div>
                                </div>
                                <div class="ib vt w14 tabw25 mw100">
                                    <div class="field">
                                        <label for="sunday">Sunday</label>
                                        <input type="text" name="sunday" id="sunday"></input>
                                        <input type="text" name="sunday" id="sunday"></input>
                                    </div>
                                </div>
                                 <p><sup>*</sup>Required Fields.</p>
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

export default Admin_schedule_form