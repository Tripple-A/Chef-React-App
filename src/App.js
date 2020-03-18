import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Dashboard from './components/dashboard';
import Header from './components/header';
import NewVendor from './components/newVendor'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div><Header /></div>
      <Switch>
        <Route  path='/' exact component={SignIn}></Route>
        <Route  path='/signup' exact component={SignUp}></Route>
        <Route  path='/newvendor' exact component={NewVendor}></Route>
        <Route path='/dashboard' exact strict component={Dashboard}></Route>
      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
