import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/home';
import Dashboard from './components/dashboard';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={Home}></Route>
        <Route path='/dashboard' exact strict component={Dashboard}></Route>
      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
