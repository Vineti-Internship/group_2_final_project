import React from 'react';
import './App.css';
import { Sign_In } from './components/Sign_In/Sign_in';
import { Sign_Up } from './components/Sign_Up/Sign_up';


class App extends React.Component {
  handleSignup =()=>{

  }
  render() {
  return <Sign_Up handleSignUp={this.handleSignup} />
  }
}

export default App;
