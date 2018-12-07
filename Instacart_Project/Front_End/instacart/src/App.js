import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Sign_In } from './components/Sign_In/Sign_in';
import { Sign_Up } from './components/Sign_Up/Sign_up';
import Home from './components/Home/Home';
import Error from './components/Error/Error';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Sign_In} />
          <Route path="/signup" exact component={Sign_Up}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
