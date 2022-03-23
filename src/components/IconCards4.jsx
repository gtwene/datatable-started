import React from "react";
import { GrSettingsOption } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

const IconCards3 = () => {
  const buttonStyling = `flex items-center space-x-2 font-semibold border-2 border-grey-100 bg-gradient-to-r from-green-400 via-green-600 to-blue-400 rounded-lg ring-grey-200 p-10 shadow hover:bg-gray-50 
   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
   `;

   const buttonStylingnext = `flex items-center space-x-2 font-semibold border-2 border-grey-100 bg-[#1da1f2] rounded-lg ring-grey-200 p-10 shadow hover:bg-gray-50 
   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
   `;

   const buttonStyling2 = `flex items-center space-x-2 font-semibold border-2 border-grey-100 bg-gradient-to-r from-teal-200 to-lime-200  rounded-lg ring-grey-200 p-10 shadow hover:bg-gray-50 
   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
   `;

   const buttonStyling3 = `flex items-center space-x-2 font-semibold border-2 border-grey-100 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 rounded-lg ring-grey-200 p-10 shadow hover:bg-gray-50 
   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
   `;

   const buttonStyling4 = `flex items-center space-x-2 font-semibold border-2 border-grey-100 bg-gradient-to-r from-green-200 via-green-400 to-green-100 rounded-lg ring-grey-200 p-10 shadow hover:bg-gray-50 
   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
   `;

  const textStyle1 = `font-bold text-white hover:animate-pulse cursor-pointer`;

  const textStyle = `font-bold hover:animate-pulse cursor-pointer`;

  return (
    <div className="flex space-x-10 m-5">
      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <GrSettingsOption
              size="3.5rem"
              className="fill-blue-700 animate-spin"
            />
            <text className={textStyle1}>Create Additional Account</text>
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStylingnext}>
            <GrSettingsOption
              size="3.5rem"
              className="fill-blue-700 animate-spin"
            />
            <text className={textStyle1}>Create Additional Account</text>
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling2}>
            <FaReact size="3.5rem" className="fill-blue-700 animate-spin" />
            <text className={textStyle}>Amend Additional Account</text>
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling3}>
            <BsYoutube size="3.5rem" className="fill-red-700" />
            <text className={textStyle}>Approve Additional Account</text>
          </button>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling4}>
            <FcGoogle size="3.5rem" />
            <text className={textStyle}>Account Opening SLCB</text>
          </button>
        </div>
      </div>

      {/* <div className="">
        <div className="grid grid-cols-1 place-items-center">
          <button className={buttonStyling}>
            <FcHome size="3.5rem" />
            <text className={textStyle}>Home Town</text>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default IconCards3;
