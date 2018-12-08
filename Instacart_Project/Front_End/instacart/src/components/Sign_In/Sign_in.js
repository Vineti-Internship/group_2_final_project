import React from 'react';
import './Sign_in.css';


export class Sign_In extends React.Component {

    constructor(){
        super()

        this.state = {
            email: '',
            password: '',
        }

        this.handleSignIn = this.handleSignIn.bind(this);
    }

    async handleSignIn() {

    const response = await fetch('http://localhost:3000/sessions', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({    
        email: this.state.email,
        password: this.state.password,
        })
        
    })
    const json = await response.json();
    console.log(json)

    }
    
    render() {
    return (
      
        <div>
        <h1 id='h1'>Sign In</h1>
        <input type='text' placeholder='Email' name='email' value={this.state.email} onChange = {
        (event) => {this.setState({email: event.target.value})} } />
        <br></br>
        <input type='password' placeholder='Password' name='password' value={this.state.password} onChange = {
        (event) => {this.setState({password: event.target.value})} } />
        <br></br>
        <input type='submit' value='Submit' onClick= {this.handleSignIn}/>
        </div>
      
     )
   }
}
