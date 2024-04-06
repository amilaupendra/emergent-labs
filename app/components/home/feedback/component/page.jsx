import React from "react";
import feedback from "../page";
import { FcBusinessman } from "react-icons/fc";
import Input from "postcss/lib/input";

const page = () => {
  const clients = [{name:'rashmika',feedback:'very good service'},{name:'nuwan',feedback:'very good your web page'},]

  return (
    <div className="flex-col w-full mb-8 bg-amber-50 ">
        <label>Enter your Name</label>
        <input type="text" placeholder="john " className="block w-full leading-tight text-gray-700 align-top border border-gray-200 rounded appearance-none md:mb-4 md:w-1/4 focus:outline-none focus:bg-white focus:border-gray-500"/>
        <label>Enter your feedback</label>
        <textarea type="text" placeholder="feedback here " className="w-full pb-0 mb-10 leading-tight text-gray-700 border border-gray-200 rounded appearance-none resize-y focus:outline-none focus:bg-white focus:border-gray-500"/>

      {clients.map((client, index) => (
        <div key={index} className="flex w-screen p-4">
            <FcBusinessman className="mr-3 scale-150"/>
          <div className="w-1/4 mr-3">
            <p>{client.name}</p>
          </div>
          <div className="w-3/4">
            <p>{client.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
