import React from "react";
import "../styles/newVendor.scss";
import PayStack from "../container/paystack";
const NewVendor = () => (
  <div className="bg-light-skin pt-40 pb-40">
    <div className="ml-4 mr-4">
      <div className="max-w-2xl m-auto bg-gray-200 rounded-lg  pl-6 pr-4 sm:pl-10 sm:pr-10 payments-wrapper">
        <h3 className="text-center text-lg font-medium pt-10 m-10 md:text-xl">
          It is our pleasure to present your products to the Foodie Community.
        </h3>
        <h4 className="text-center text-sm pb-4">
          In order to proceed, please complete the payment below.
        </h4>

        <PayStack />
      </div>
    </div>
  </div>
);

export default NewVendor;
