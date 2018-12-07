import React from 'react';
import './Sign_up.css'


export const Sign_Up = (props) => {

    let formFields = {}
    
   
    return (
      
        <form onSubmit={ (e) => {e.preventDefault(); props.handleSignUp(formFields.f_name.value, formFields.l_name.value, formFields.email.value, formFields.address.value, formFields.phone.value, formFields.password.value, formFields.confirm_password.value); e.target.reset() }}>
        <h1 id="h1">Sign Up</h1>
        <input ref={input => formFields.f_name = input} type="text" placeholder="First Name"></input>
        <br></br>
        <input ref={input => formFields.l_name = input} type="text" placeholder="Last Name"></input>
        <br></br>
        <input ref={input => formFields.email = input} type="text" placeholder="Email"></input>
        <br></br>
        <input ref={input => formFields.address = input} type="text" placeholder="Address"></input>
        <br></br>
        <input ref={input => formFields.phone = input} type="text" placeholder="Phone Number"></input>
        <br></br>
        <input ref={input => formFields.password = input} type="password" placeholder="Password"></input>
        <br></br>
        <input ref={input => formFields.confirm_password = input} type="password" placeholder="Confirm Password"></input>
        <br></br>
        <button>Sign Up</button>
        </form>
      
    )
}