import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import the library
import PaystackButton from 'react-paystack';
import axios from 'axios';



class Paystack extends Component {

    state = {
        key: "pk_test_fbd2b2c8b4e5580d325d88cee725259dacd96409", //PAYSTACK PUBLIC KEY
        email: "biodun9@gmail.com",  // customer email
        amount: 250000 ,
    }

    callback = (response) => {
        alert('success. transaction ref is ' + response.reference)
        if (response.status === 'success')
        { axios.get('http://localhost:3002/registrations/1',{withCredentials: true})
        .then(response => { 
          if (response.data.status === 'ok') this.setState({vendor:true});
        })}
    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

  render() {
    const show = this.state.vendor?  (<Redirect to='/'/>) : <h3>This page will redirect you to your profile after succesful payment</h3>;
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
 
    export default Paystack;