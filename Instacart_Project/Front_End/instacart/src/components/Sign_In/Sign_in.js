import React from 'react';
import './Sign_in.css';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/signInAction';
//
import store from '../../store';

class SignIn extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.handleSignIn = this.handleSignIn.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.logInResponse) {

            console.log(nextProps.logInResponse)
            //
            console.log(store.getState());

        }
    }

    handleSignIn() {


        const logInData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.signInUser(logInData);

    // const response = await fetch('http://localhost:3000/sessions', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify ({    
    //     email: this.state.email,
    //     password: this.state.password,
    //     })
        
    // })
    // const json = await response.json();
    // console.log(json)

    }
    
    render() {
    return (
      
        <div className='con'>
        <h1 id='h1'>Sign In</h1>
        <input type='text' placeholder='Email' name='email' value={this.state.email} onChange = {
        this.onChange } />
        <br></br>
        <input type='password' placeholder='Password' name='password' value={this.state.password} onChange = {
        this.onChange } />
        <br></br>
        <input type='submit' value='Submit' onClick= {this.handleSignIn}/>
        </div>
      
     )
   }
}

const mapStateToProps = state => ({
    logInResponse: state.users.user
})

export default connect(mapStateToProps, { signInUser })(SignIn)
