import React from 'react';
import './Sign_up.css';




export class Sign_Up extends React.Component {

    constructor(){
        super()

        this.state = {
            f_name: '',
            l_name: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            confirm_password: '',
        }

        this.handleSignUp = this.handleSignUp.bind(this);
    }

    async handleSignUp() {

    if(this.state.password === this.state.confirm_password){

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({   
        first_Name: this.state.f_name,
        last_Name: this.state.l_name, 
        email: this.state.email,
        address: this.state.address,
        phone: this.state.phone,
        password: this.state.password,
        password_confirmation: this.state.confirm_password,
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
        <input type='text' placeholder='First Name' name='f_name' value={this.state.f_name} onChange = { (event) => {this.setState({f_name: event.target.value})}}/>
        <br></br>
        <input type='text' placeholder='Last Name' name='l_name' value={this.state.l_name} onChange = { (event) => {this.setState({l_name: event.target.value})}}/>
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
        <input type='password' placeholder='Password Confirmation' name='confirm_password' value={this.state.confirm_password} onChange = { (event) => {this.setState({confirm_password: event.target.value})}}/>
        <br></br>
        <input type='submit' value='Submit' onClick= {this.handleSignUp}/>
        </div>
      
     )
   }
}

