import React from 'react';
import PayStack from './paystack'
const NewVendor = () => (
    <div>
        <h3>It is our pleasure to present your products to the Foodie Community.</h3>
        <h4>Please fill the form below</h4>
        <form className="form-group">
           <input className="form-control" placeholder="Company Name"></input>
           <input className="form-control" placeholder="Location"></input>
           <input className="form-control" placeholder="Specialty"></input>
           
        <PayStack />
        </form>
    </div>
)

export default NewVendor