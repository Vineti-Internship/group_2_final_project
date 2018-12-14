import React from 'react';
import './Sign_in.css';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/signInAction';
import { Redirect } from 'react-router-dom';

class SignIn extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            redirect: false,
        };

        this.handleSignIn = this.handleSignIn.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.logInResponse) {
            if(nextProps.logInResponse.id && nextProps.logInResponse.authentication_token) {
                this.setRedirect();
            }     
        }
    }

    handleSignIn() {
        const logInData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.signInUser(logInData);
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
    
    render() {
        return (
          <React.Fragment>
            {this.renderRedirect()}
            <div className='con'>
                <h1 id='h1'>Sign In</h1>
                <input type='text' placeholder='Email' name='email' value={this.state.email} onChange = { this.onChange } />
                <br></br>
                <input type='password' placeholder='Password' name='password' value={this.state.password} onChange = { this.onChange } />
                <br></br>
                <input type='submit' value='Submit' onClick= {this.handleSignIn}/>
                <p style={{color: "red"}}>{this.props.errorMessage}</p>
            </div>
          </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    logInResponse: state.users.user,
    errorMessage: state.users.errorMessage
});

const mapDispatchToProps =(dispatch) => {
    return {
        signInUser: (logInData) => {
            dispatch(signInUser(logInData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
