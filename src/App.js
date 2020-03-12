import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Dashboard from './components/dashboard';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={SignIn}></Route>
        <Route  path='/signup' exact component={SignUp}></Route>
        <Route path='/dashboard' exact strict component={Dashboard}></Route>
      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
