"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [visibleForm, setVisibleForm] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    const formData = {
      name,
      businessName,
      telephone,
      email,
    };
    console.log("businessss name here", formData);
  };

  return (
    <div className="flex-col">
      <div className=" md:w-1/2 md:m-auto">
        <p className="font-bold text-left">Limited Availability </p>
        <p className="mb-2 text-left ">
          This free offer is available for a limited time or to a limited number
          of users.
        </p>
        <p className="font-bold text-left">Scope Limitations: </p>
        <p className="mb-2 text-left ">
          The free service includes the creation of a static website only.
          Additional features, functionalities, or design elements may require
          extra charges.
        </p>
        <p className="font-bold text-left">Costs Responsibility </p>
        <p className="mb-2 text-left">
          Customers are responsible for the cost of domain name registration and
          hosting fees associated with their website.
        </p>
        <p className="font-bold text-left">Additional Costs </p>
        <p className="mb-2 text-left ">
          Any improvements, maintenance, or extra functionalities beyond the
          basic static website will incur additional costs. Customers will
          receive a quote for these services before proceeding.
        </p>
        <p className="font-bold text-left">No Access to Source Code </p>
        <p className="mb-2 text-left ">
          Customers will not be provided access to the source code of the
          website. Ownership of the source code remains with the service
          provider.
        </p>
        <p className="font-bold text-left">Limited Responsibility: </p>
        <p className="mb-2 text-left">
          Once the website is handed over to the customer, the service provider
          is not responsible for any further maintenance, updates, or issues
          with the website.
        </p>
        <p className="font-bold text-left">No Guarantee of Service </p>
        <p className="mb-2 text-left">
          Acceptance of the free offer does not guarantee the availability of
          the service. Circumstances beyond the service provider's control may
          prevent fulfillment of the offer.
        </p>
        <p className="font-bold text-left">Right to Refuse </p>
        <p className="mb-2 text-left">
          The service provider reserves the right to refuse service to any
          customer for any reason.
        </p>
        <p className="font-bold text-left">Changes to Terms: </p>
        <p className="mb-2 text-left">
          The service provider reserves the right to change the terms and
          conditions of the free offer at any time without prior notice.
        </p>
      </div>
      <button
        onClick={() => {
          setVisibleForm(true);
        }}
        className=" btn btn-warning w-[150px] m-auto mt-4 mb-20 block "
      >
        Agree
      </button>

      {visibleForm ? (
        <form className="items-center w-full m-auto mb-20 border-2 shadow-xl md:w-1/2 md:border-solid border-grey-600">
          <div className="flex flex-col flex-wrap p-8 mb-6 -mx-3">
            <div className="px-3 mb-6 md:mb-0">
              <label
                htmlFor="name"
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Name
              </label>
              <input
                id="name"
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                autoComplete="name"
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="px-3 mb-6 md:mb-0">
              <label
                htmlFor="business"
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Business Name
              </label>
              <input
                id="business"
                autoComplete="organization"
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="My Business"
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label
                htmlFor="telephone"
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Telephone
              </label>
              <input
                id="telephone"
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                autoComplete="tel"
                type="tel"
                placeholder="07723564502"
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label
                htmlFor="email"
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Email
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="john@gmail.com"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={(e) => submitForm(e)}
              className=" btn btn-warning w-[150px] m-auto mt-4 "
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default page;
