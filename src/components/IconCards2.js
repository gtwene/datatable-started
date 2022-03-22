import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

const IconCards2 = () => {
  const buttonStyling = `font-semibold border-2 border-grey-100 raised
   rounded-lg ring-grey-200 p-7 shadow hover:bg-gray-50 
   `;

  return (
    <div className="flex space-x-10 m-5">
      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FaSearchengin size="3.5rem" className="fill-blue-700" />
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FaReact size="3.5rem" className="fill-blue-700" />
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <BsYoutube size="3.5rem" className="fill-red-700" />
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FcGoogle size="3.5rem" />
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FcHome size="3.5rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconCards2;
