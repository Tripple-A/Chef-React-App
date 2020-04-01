import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { apiUrl } from "../helpers/helperFns";
import PaystackButton from "react-paystack";
import { ASSIGNUSER } from "../actions";
import axios from "axios";

const mapDispatchToProps = dispatch => ({
  assignUser: user => dispatch(ASSIGNUSER(user)),
  
});


class Paystack extends Component {
  state = {
    key: "pk_test_fbd2b2c8b4e5580d325d88cee725259dacd96409", //PAYSTACK PUBLIC KEY
    email: "biodun9@gmail.com", // customer email
    amount: 250000,
    vendor: false
  };

  callback = response => {
    alert("success. transaction ref is " + response.reference);
    if (response.status === "success") {
      const id = this.props.user_id;
      axios
        .get(`${apiUrl}/registrations/${id}`, { withCredentials: true })
        .then(response => {
          if (response.data.status === "ok") {
            this.setState({ vendor: true });
            this.props.assignUser(response.data.user)
          } 
        });
    }
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    const url = `/vendor/${this.props.user_id}`
    const show = this.state.vendor ? (
      <Redirect to = {url} />
    ) : (
      <h3 className="pb-16 pt-2 text-sm text-center ">
        This page will redirect you to your profile after succesful payment
      </h3>
    );
    return (
      <div>
        <p>
          <PaystackButton
            text="Make Payment"
            class="payButton"
            callback={this.callback}
            close={this.close}
            disabled={true}
            embed={true}
            reference={this.getReference()}
            email={this.state.email}
            amount={this.state.amount}
            paystackkey={this.state.key}
            tag="button"
          />
        </p>
        <div>{show} </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Paystack);
