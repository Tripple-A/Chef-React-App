import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./container/signUp";
import SignIn from "./container/signIn";
import Dashboard from "./container/dashboard";
import Header from "./container/header";
import NewVendor from "./components/newVendor";
import VendorProfile from "./components/vendorProfile";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/" exact component={SignIn}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/newvendor/:user_id" exact component={NewVendor}></Route>
          <Route
            path="/vendor/:user_id"
            exact
            component={VendorProfile}
          ></Route>
          <Route path="/dashboard" exact strict component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
