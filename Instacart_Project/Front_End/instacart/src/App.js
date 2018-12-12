import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import SignIn from './components/Sign_In/Sign_in';
import { SignUp } from './components/Sign_Up/Sign_up';
// import  FoodPage  from './components/food/singleComponent';
// import  Grid  from './components/food';
// import  Fmodal  from './components/food/modal';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shops from './components/Stores/Stores';
import CurrentShop from './components/CurrentShop/CurrentShop';
import Backet from './components/card/main'

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
            {/* <Route path="/products"  component={()=><FoodPage data={{imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>}/> */}
            <Route path="/test/card" exact component={Backet} />
            <PrivateRoute path='/shops' exact component={Shops}/>
            <PrivateRoute path='/shops/:id' exact component={CurrentShop} />
            <Route component={Error}/>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
