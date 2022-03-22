import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { MdUnsubscribe } from "react-icons/md";

export const IconCards = () => {
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 
  text-gray-100 rounded-sm ring-2 ring-blue-200 p-10
  hover:bg-white  hover:text-white hover:ring-slate-300 `;

  const buttonStyling2 = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900
  text-gray-100 rounded-md ring-2 ring-slate-400 p-10 
  hover:bg-white hover:text-white hover:ring-slate-300  shadow-lg shadow-slate-800/100`;

  return (
    <div>
      <div className=" bg-slate-800 p-20">
        <div className="grid grid-cols-1 place-items-center">
          <button type="submit" className={buttonStyling}>
            {/* <p>Search</p> */}
            <FaSearchengin size="3.5rem" />
          </button>
        </div>
      </div>

      <div className="bg-slate-100 p-20">
        <div className="grid grid-cols-1 place-items-center">
          <button type="submit" className={buttonStyling2}>
            {/* <p>Subscribe</p> */}
            <MdUnsubscribe size="3.5rem" />
          </button>
        </div>
      </div>
    </div>
  );
};
