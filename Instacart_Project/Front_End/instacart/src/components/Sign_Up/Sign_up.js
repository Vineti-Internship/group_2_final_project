import React from 'react';
import { Redirect } from 'react-router-dom';


export class SignUp extends React.Component {

    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            confirmPassword: '',
            redirect: false,
            inputErrors: {},
        };

        this.handleSignUp = this.handleSignUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    setRedirect = () => {
        this.setState({
            redirect: true,
        });
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/'/>;
        }
    }

    async handleSignUp() {
          

        if(this.inputValidation()){
            await fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify ({   
                            first_Name: this.state.firstName,
                            last_Name: this.state.lastName, 
                            email: this.state.email,
                            address: this.state.address,
                            phone: this.state.phone,
                            password: this.state.password,
                            password_confirmation: this.state.confirmPassword,
                        })
        
                    });
        
                    this.setRedirect();
        }
    
    }

    inputValidation = () => {
        let isValid = true;
        let inputErrors = {};
        
        if(!this.state.firstName || !this.state.firstName.match('^[A-Za-z\s\-]+$') ||  this.state.firstName.length > 50){
            isValid = false;
            inputErrors.firstName = 'Must contain only letters and have size not more than 50 characters';
        }
        if(!this.state.lastName || !this.state.lastName.match('^[A-Za-z]+$') || this.state.lastName.length > 50){
            isValid = false;
            inputErrors.lastName = 'Must contain only letters and have size not more than 50 characters';
        }
        if(!this.state.email || !this.state.email.match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')){
            isValid = false;
            inputErrors.email = 'Invalid Email';
        }
        if(!this.state.address){
            isValid = false;
            inputErrors.address = 'Invalid Address';
        }
        if(!this.state.phone.match('^([+\d].*)\d$') || this.state.phone.length > 50 || this.state.phone.length < 8){
            isValid = false;
            inputErrors.phone = 'Length of phone number must be 8..50 and start with + sign';
        }   
        if(this.state.password.length < 6){
            isValid = false;
            inputErrors.password = 'Minimum length of password is 6 characters';
        }
        if(this.state.password !== this.state.confirmPassword || this.state.confirmPassword.length < 6){
            isValid = false;
            inputErrors.confirmPassword = 'Confirm password error';
        }
        
        this.setState({
            inputErrors
        })
        return isValid;
    }
    
    render() {
        const {firstName} = this.state;
        return (
      
            <div className='con'>
                {this.renderRedirect()}
                <h1 id='h1'>Sign Up</h1>
                <input type='text' placeholder='First Name' name='firstName' value={firstName} onChange = { this.onChange }/>
                <p className='error'>{this.state.inputErrors.firstName}</p>
               
                <input type='text' placeholder='Last Name' name='lastName' value={this.state.lastName} onChange = { this.onChange }/>
                <p className='error'>{this.state.inputErrors.lastName}</p>
                
                <input type='text' placeholder='Email' name='email' value={this.state.email} onChange = { this.onChange } />
                <p className='error'>{this.state.inputErrors.email}</p>
                
                <input type='text' placeholder='Address' name='address' value={this.state.address} onChange = { this.onChange }/>
                <p className='error'>{this.state.inputErrors.address}</p>
                
                <input type='text' placeholder='Phone' name='phone' value={this.state.phone} onChange = { this.onChange }/>
                <p className='error'>{this.state.inputErrors.phone}</p>
               
                <input type='password' placeholder='Password' name='password' value={this.state.password} onChange = { this.onChange } />
                <p className='error'>{this.state.inputErrors.password}</p>
                
                <input type='password' placeholder='Password Confirmation' name='confirmPassword' value={this.state.confirmPassword} onChange = { this.onChange }/>
                <p className='error'>{this.state.inputErrors.confirmPassword}</p>
                
                <input type='submit' value='Submit' onClick = {this.handleSignUp}/>
            </div>
      
        );
    }
}

