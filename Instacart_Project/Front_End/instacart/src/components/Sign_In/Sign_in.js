import React from 'react';
import './Sign_in.css'


export const Sign_In = (props) => {

    let formFields = {}
    
   
    return (
      
        <form onSubmit={ (e) => {e.preventDefault(); props.handleSignIn(formFields.email.value, formFields.password.value); e.target.reset() }}>
        <h1 id="h1">Sign In</h1>
        <input ref={input => formFields.email = input} type="text" placeholder="Email"></input>
        <br></br>
        <input ref={input => formFields.password = input} type="password" placeholder="Password"></input>
        <br></br>
        <button>Sign In</button>
        </form>
      
    )
}