import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./container/signUp";
import SignIn from "./container/signIn";
import Dashboard from "./container/dashboard";
import Header from "./container/header";
import NewVendor from "./components/newVendor";
import VendorProfile from "./container/vendorProfile";
import ViewVendor from "./components/viewVendor";
import SavedVendor from "./components/savedVendor"


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
          <Route
            path="/viewvendor/:vendor_id"
            exact
            component={ViewVendor}
          ></Route>
          <Route path="/savedvendors/:user_id" exact strict component={SavedVendor}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
