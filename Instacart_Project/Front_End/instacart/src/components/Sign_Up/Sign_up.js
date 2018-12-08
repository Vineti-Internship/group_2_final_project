import React from 'react';
import './Sign_up.css';




export class Sign_Up extends React.Component {

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
        }

        this.handleSignUp = this.handleSignUp.bind(this);
    }

    async handleSignUp() {

    if(this.state.password === this.state.confirmPassword){

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

    }

    else {
        throw new Error('Password Confirm Error!')
    }
    
    }
    
   render() {
    return (
      
        <div>
        <h1 id='h1'>Sign Up</h1>
        <input type='text' placeholder='First Name' name='firstName' value={this.state.firstName} onChange = { (event) => {this.setState({firstName: event.target.value})}}/>
        <br></br>
        <input type='text' placeholder='Last Name' name='lastName' value={this.state.lastName} onChange = { (event) => {this.setState({lastName: event.target.value})}}/>
        <br></br>
        <input type='text' placeholder='Email' name='email' value={this.state.email} onChange = {
        (event) => {this.setState({email: event.target.value})} } />
        <br></br>
        <input type='text' placeholder='Address' name='address' value={this.state.address} onChange = { (event) => {this.setState({address: event.target.value})}}/>
        <br></br>
        <input type='number' placeholder='Phone' name='phone' value={this.state.phone} onChange = { (event) => {this.setState({phone: event.target.value})}}/>
        <br></br>
        <input type='password' placeholder='Password' name='password' value={this.state.password} onChange = {
        (event) => {this.setState({password: event.target.value})} } />
        <br></br>
        <input type='password' placeholder='Password Confirmation' name='confirmPassword' value={this.state.confirmPassword} onChange = { (event) => {this.setState({confirmPassword: event.target.value})}}/>
        <br></br>
        <input type='submit' value='Submit' onClick= {this.handleSignUp}/>
        </div>
      
     )
   }
}

