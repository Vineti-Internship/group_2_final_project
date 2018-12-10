import React from 'react';
import './Sign_in.css';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/signInAction';

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
            // console.log(store.getState());






            fetch('http://localhost:3000/users', {
                method: 'GET',
                headers: {
                    'Authorization': nextProps.logInResponse.authentication_token,
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
            .then((data) => console.log(data))
        
        
        
        
        }
    }

    handleSignIn() {
        const logInData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.signInUser(logInData);
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

const mapDispatchToProps =(dispatch) => {
    return {
        signInUser: (logInData) => {
            dispatch(signInUser(logInData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
