import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './components/Sign_In/Sign_in';
import { SignUp } from './components/Sign_Up/Sign_up';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shops from './components/Stores/Stores';
import CurrentShop from './components/CurrentShop/CurrentShop';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp}/>
            <PrivateRoute path='/shops' exact component={Shops}/>
            <PrivateRoute path='/shops/:id' exact component={CurrentShop} />
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
