import React from 'react';
import { Redirect } from 'react-router-dom';


export class SignUp extends React.Component {

    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            confirmPassword: '',
            redirect: false,
        }

        this.handleSignUp = this.handleSignUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    setRedirect = () => {
        this.setState({
            redirect: true,
        })
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/'/>
        }
    }

    async handleSignUp() {

    if(!this.state.firstName.match('/\A[a-zA-Z]+\z|\A[a-zA-Z]+\-+[a-zA-Z]+\z/') || !this.state.firstName || this.state.firstName.length > 50){
        console.error('First Name error!');
    }
    if(!this.state.lastName.match('/\A[a-zA-Z]+\z/') || !this.state.lastName || this.state.lastName.length > 50){
        console.error('Last Name error!');
    }
    if(!this.state.email.match('/\A[\w+\-.]+@[a-z\-.]+\.[a-z]+\z/i') || !this.state.email){
        console.error('Email error!');
    }
    if(!this.state.address){
        console.error('Address error!');
    }
    // if(this.state.phone.match('/\A\++\d+\z/' || this.state.phone.length > 50 || this.state.phone.length < 8)){
    //     console.error(this.state.phone);
    // }   NOT WORKING YET!
    if(this.state.password.length < 6){
        console.error('Password error!');
    }
    if(this.state.password === this.state.confirmPassword && this.state.password.length >= 6 && this.state.confirmPassword.length >= 6){

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

    })

    this.setRedirect();

    }

    else {
        throw new Error('Password Confirm Error!')
    }
    
    }
    
   render() {
       const {firstName} = this.state;
    return (
      
        <div className='con'>
        {this.renderRedirect()}
        <h1 id='h1'>Sign Up</h1>
        <input type='text' placeholder='First Name' name='firstName' value={firstName} onChange = { this.onChange }/>
        <br></br>
        <input type='text' placeholder='Last Name' name='lastName' value={this.state.lastName} onChange = { this.onChange }/>
        <br></br>
        <input type='text' placeholder='Email' name='email' value={this.state.email} onChange = {
        this.onChange } />
        <br></br>
        <input type='text' placeholder='Address' name='address' value={this.state.address} onChange = { this.onChange }/>
        <br></br>
        <input type='text' placeholder='Phone' name='phone' value={this.state.phone} onChange = { this.onChange }/>
        <br></br>
        <input type='password' placeholder='Password' name='password' value={this.state.password} onChange = { this.onChange } />
        <br></br>
        <input type='password' placeholder='Password Confirmation' name='confirmPassword' value={this.state.confirmPassword} onChange = { this.onChange }/>
        <br></br>
        <input type='submit' value='Submit' onClick = {this.handleSignUp}/>
        </div>
      
     )
   }
}

