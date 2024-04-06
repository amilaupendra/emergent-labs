"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import Navbar from "@/app/components/navbar/page";

const page = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [visibleForm, setVisibleForm] = useState(false);
  const [additionalRequirements, setAdditionalrequirements] = useState("")

  const isFormFilled = () => {
    return firstName && lastName && businessName && telephone && email;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      businessName,
      telephone,
      email,
      additionalRequirements,
    };
    
    if(firstName!=''&&lastName!=''&&businessName!=''&&telephone!=''&&email!=''){
      const url =
      "https://fwgi7iwl19.execute-api.ap-south-1.amazonaws.com/prod/promotion";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData), // Stringify the formData object
    });

    if (response.ok) {
      alert("succusfully submitted the form");
      setFirstName(""); // Clearing the form fields
      setLastName("");
      setBusinessName("");
      setTelephone("");
      setEmail("");
      setAdditionalrequirements("");
      setVisibleForm(false);
    }
    }else{
      return alert('abc')
    }

    
  };

  return (
    <div className="flex-col">
      <Navbar/>
      <div className={` md:w-1/2 md:m-auto ${visibleForm ? "blur" : ""} pt-16`}>
      {/* <p className="font-bold text-center">TERMS OF SERVICE </p>

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
        The service provider reserves the right to refuse the free service at any time without prior notice.
         However, we guarantee a refund if the service is refused after payment has been made.
        </p> */}
        <p className="px-4 pt-20 text-justify">We are pleased to offer a complimentary service exclusively to select businesses for a limited time. 
          Upon submission of the form, our team will promptly provide the necessary terms and details tailored to your specific needs</p>
        <p className="mb-2 text-left">
       
        </p>
      </div>
      <button
        onClick={() => {
          setVisibleForm(true);
        }}
        className=" btn btn-warning w-[150px] m-auto mt-4 mb-20 block "
      >
        Ok
      </button>

      {visibleForm ? (
        <form className="fixed top-0 flex justify-center w-screen h-auto pt-20 m-auto mb-20 border-2 shadow-xl md:w-screen md:border-solid border-grey-600">
          <div className="flex flex-col flex-wrap w-full p-4 mb-6 -mx-3 bg-white md:w-1/2">
          <div className="ml-[100%] cursor-pointer" onClick={()=>setVisibleForm(false)}><FaWindowClose /></div>
            <p className="mb-4 font-bold text-center"> It's your ticket to reaching new heights</p>
            <div className="px-3 mb-6 md:mb-0">
              <label
                htmlFor="name"
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                First Name
              </label>
              <input
                id="name"
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                autoComplete="name"
                type="text"
                required
                placeholder="name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="px-3 mb-6 md:mb-0">
              <label
                htmlFor="name"
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Last Name
              </label>
              <input
                id="name"
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                autoComplete="name"
                type="text"
                placeholder="name"
                onChange={(e) => setLastName(e.target.value)}
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
            <div className="w-full px-3">
              <label
                htmlFor="email"
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Do you need additional requirements?  
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                placeholder="User registration,Admin pannel,photo upload etc; "
                autoComplete="off"
                onChange={(e) => setAdditionalrequirements(e.target.value)}
              />
            </div>
              <button
                onClick={(e) => submitForm(e)}
                className=" btn btn-warning w-[150px] m-auto mt-4 block"
                disabled={!isFormFilled()}
              >
                <Link href='/pages/freesite'>Submit</Link>
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
