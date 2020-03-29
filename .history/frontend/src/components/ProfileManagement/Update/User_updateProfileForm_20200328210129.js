import React from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//TODO: Database connection and sending and requesting the info
class UserUpdateProfileForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address:'',
            phone:'',
            gender:'',
            formErrors: {address: '', phone: '', gender: ''},
            addressValid: false,
            addressTouch: false,
            phoneValid: false,
            phoneTouch: false,
            genderValid: false,
            genderTouch: false,
            formValid: false
        }
    }
      
    handleUserInput = (e) => {
        const name = e.target.name;
        console.log('this is:', name);
        const value = e.target.value;
        console.log('this is:', value);
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
    }
      
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let addressValid = this.state.addressValid;
        let phoneValid = this.state.phoneValid;
        let genderValid = this.state.genderValid;
      
        switch(fieldName) {
            case 'address':
                this.state.addressTouch = true;
                addressValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.address = 
                    addressValid 
                        ? <p className="isValid">Sweet! address is filled</p> 
                        : '';
                break;
            case 'phone':
                this.state.phoneTouch = true;
                phoneValid = value.length >= 6;
                fieldValidationErrors.phone = 
                    phoneValid 
                        ? <p className="isValid">Awesome! phone number is valid</p>
                        : <p className="has-error">Please Enter a valid phone number</p>;
                break;
            case 'gender':
                this.state.genderTouch = true;
                genderValid = this.state.gender === "male" || this.state.gender === "female" || this.state.gender === "other";
                fieldValidationErrors.gender = 
                    genderValid 
                        ? <p className="isValid">Awesome!</p>
                        : <p className="has-error">Please select a valid gender</p>;
                break;
            default:
                break;
        }
        
        this.setState({formErrors: fieldValidationErrors,
                        addressValid: addressValid,
                        phoneValid: phoneValid,
                        genderValid: genderValid
                      }, this.validateForm);
    }
    
    validateForm() {
        this.setState({formValid: this.state.addressValid && this.state.phoneValid});
    }
      
    errorClass(error) {
        return(error.length === 0 ? 'is_valid' : 'has_error');
    }

    render(){
        return(
            <form>  
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input type="text" required className="form-control" name="firstName"
                                    placeholder={this.state.firstName}
                                    value={this.state.firstName}  
                                    onChange={this.handleUserInput} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input type="text" required className="form-control" name="lastName"
                                    placeholder="Please Enter Your Last Name"
                                    value={this.state.lastName}  
                                    onChange={this.handleUserInput} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="address">Address</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={'form-group ' + (this.errorClass(this.state.formErrors.address))} type="address" required className="form-control" name="address"
                                    placeholder="Please Enter Your address ID"
                                    value={this.state.address}
                                    onChange={this.handleUserInput}  />
                                {errorMessage_address}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="phone">phone</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={`form-group ${this.errorClass(this.state.formErrors.phone)}`} type="phone" className="form-control" name="phone"
                                    placeholder="Please Enter Your phone"
                                    value={this.state.phone}
                                    onChange={this.handleUserInput}  />
                                {errorMessage_phone}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-label-group">
                            <div>
                                <label htmlFor="gender">Confirm Password</label>
                                {/* // TODO: change class dynamically to manipulate the border of the input */}
                                <input className={`form-group ${this.errorClass(this.state.formErrors.password)}`} type="password" className="form-control" name="gender"
                                    placeholder="Please Confirm Your Password"
                                    value={this.state.gender}
                                    onChange={this.handleUserInput}  />
                                {errorMessage_gender}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <Button className="btn pull-right" block type="submit" disabled={!this.state.formValid}>Update</Button>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserUpdateProfileForm;